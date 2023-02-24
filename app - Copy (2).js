// @ts-check
class EventEmitter {
	constructor() {
		this.listeners = {};
	}

	on(message, listener) {
		if (!this.listeners[message]) {
			this.listeners[message] = [];
		}
		this.listeners[message].push(listener);
	}

	emit(message, payload = null) {
		if (this.listeners[message]) {
			this.listeners[message].forEach((l) => l(message, payload));
		}
	}
}

class GameObject {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.dead = false;
		this.type = '';
		this.width = 0;
		this.height = 0;
		this.img = undefined;
	}

	draw(ctx) {
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	}

	rectFromGameObject() {
		return {
			top: this.y,
			left: this.x,
			bottom: this.y + this.height,
			right: this.x + this.width,
		};
	}
}

class Hero extends GameObject {
	constructor(x, y) {
		super(x, y);
		(this.width = 99), (this.height = 75);
		this.type = 'Hero';
		this.speed = { x: 0, y: 0 };
	}
}

class Laser extends GameObject {
	constructor(x, y) {
		super(x, y);
		this.width = 9;
		this.height = 33;
		this.type = 'Laser';
		let id = setInterval(() => {
			if (!this.dead) {
				this.y = this.y > 0 ? this.y - 20 : this.y;
				if (this.y <= 0) {
					this.dead = true;
				}
			} else {
				clearInterval(id);
			}
		}, 100);
	}
}

class Explosion extends GameObject {
	constructor(x, y, img) {
		super(x, y);
		this.img = img;
		this.type = 'Explosion';
		(this.width = 56 * 2), (this.height = 54 * 2);
		setTimeout(() => {
			this.dead = true;
		}, 300);
	}
}

class Monster extends GameObject {
	constructor(x, y) {
		super(x, y);
		this.type = 'Monster';
		(this.width = 98), (this.height = 50);
		let id = setInterval(() => {
			if (!this.dead) {
				this.y = this.y < HEIGHT ? this.y + 30 : this.y;
				if (this.y >= HEIGHT - this.height) {
					this.dead = true;
					eventEmitter.emit('MONSTER_OUT_OF_BOUNDS');
				}
			} else {
				clearInterval(id);
			}
		}, 1500);
	}
}

const Messages = {
	MONSTER_OUT_OF_BOUNDS: 'MONSTER_OUT_OF_BOUNDS',
	HERO_SPEED_LEFT: 'HERO_MOVING_LEFT',
	HERO_SPEED_RIGHT: 'HERO_MOVING_RIGHT',
	HERO_SPEED_ZERO: 'HERO_SPEED_ZERO',
	HERO_FIRE: 'HERO_FIRE',
	GAME_END_LOSS: 'GAME_END_LOSS',
	GAME_END_WIN: 'GAME_END_WIN',
	COLLISION_MONSTER_LASER: 'COLLISION_MONSTER_LASER',
	COLLISION_MONSTER_HERO: 'COLLISION_MONSTER_HERO',
	KEY_EVENT_UP: 'KEY_EVENT_UP',
	KEY_EVENT_DOWN: 'KEY_EVENT_DOWN',
	KEY_EVENT_LEFT: 'KEY_EVENT_LEFT',
	KEY_EVENT_RIGHT: 'KEY_EVENT_RIGHT',
	GAME_START: 'GAME_START',
};

class Game {
	constructor() {
		this.points = 0;
		this.life = 3;
		this.end = false;
		this.ready = false;

		eventEmitter.on(Messages.MONSTER_OUT_OF_BOUNDS, () => {
			hero.dead = true;
		});
		eventEmitter.on(Messages.HERO_SPEED_LEFT, () => {
			hero.speed.x = -10;
			hero.img = heroImgLeft;
		});
		eventEmitter.on(Messages.HERO_SPEED_RIGHT, () => {
			hero.speed.x = 10;
			hero.img = heroImgRight;
		});
		eventEmitter.on(Messages.HERO_SPEED_ZERO, () => {
			hero.speed = { x: 0, y: 0 };
			if (game.life === 3) {
				hero.img = heroImg;
			} else {
				hero.img = heroImgDamaged;
			}
		});
		eventEmitter.on(Messages.HERO_FIRE, () => {
			if (coolDown === 0) {
				let l = new Laser(hero.x + 45, hero.y - 30);
				l.img = laserRedImg;
				gameObjects.push(l);
				cooling();
			}
		});
		eventEmitter.on(Messages.GAME_END_LOSS, (_, gameLoopId) => {
			game.end = true;
			displayMessage('You died... - Press [Enter] to start the game Captain Pew Pew');
			clearInterval(gameLoopId);
		});

		eventEmitter.on(Messages.GAME_END_WIN, (_, gameLoopId) => {
			game.end = true;
			displayMessage('Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew', 'green');
			clearInterval(gameLoopId);
		});
		eventEmitter.on(Messages.COLLISION_MONSTER_LASER, (_, { first: laser, second: monster }) => {
			laser.dead = true;
			monster.dead = true;
			this.points += 100;

			gameObjects.push(new Explosion(monster.x, monster.y, laserRedShot));
		});
		eventEmitter.on(Messages.COLLISION_MONSTER_HERO, (_, { monster: m, id }) => {
			game.life--;
			if (game.life === 0) {
				hero.dead = true;
				eventEmitter.emit(Messages.GAME_END_LOSS, id);
				gameObjects.push(new Explosion(hero.x, hero.y, laserGreenShot));
			}
			hero.img = heroImgDamaged;
			m.dead = true;
			gameObjects.push(new Explosion(m.x, m.y, laserRedShot));
		});
		eventEmitter.on(Messages.KEY_EVENT_UP, () => {
			hero.y = hero.y > 0 ? hero.y - 5 : hero.y;
		});
		eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
			hero.y = hero.y < HEIGHT ? hero.y + 5 : hero.y;
		});
		eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
			hero.x = hero.x > 0 ? hero.x - 10 : hero.x;
		});
		eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
			hero.x = hero.x < WIDTH ? hero.x + 10 : hero.x;
		});
		eventEmitter.on(Messages.GAME_START, () => {
			if (game.ready && game.end) {
				// assets loaded
				runGame();
			}
		});
	}
}

const eventEmitter = new EventEmitter();
const hero = new Hero(0, 0);
const WIDTH = 1024;
const HEIGHT = 768;
let gameObjects = [];
let laserRedImg;
let laserRedShot;
let laserGreenShot;
let canvas;
let ctx;
let heroImg;
let heroImgLeft;
let heroImgRight;
let heroImgDamaged;
let lifeImg;
let monsterImg;

let coolDown = 0;

const game = new Game();

function loadTexture(path) {
	return new Promise((resolve) => {
		const img = new Image();
		img.src = path;
		img.onload = () => {
			resolve(img);
		};
	});
}

function rectFromGameObject(go) {
	return {
		top: go.y,
		left: go.x,
		bottom: go.y + go.height,
		right: go.x + go.width,
	};
}

function intersectRect(r1, r2) {
	return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
}

function draw(ctx, objects) {
	objects.forEach((obj) => {
		obj.draw(ctx);
	});
}

let onKeyDown = function (e) {
	console.log(e.keyCode);
	switch (e.keyCode) {
		case 37:
		case 39:
		case 38:
		case 40: // Arrow keys
		case 32:
			e.preventDefault();
			break; // Space
		default:
			break; // do not block other keys
	}
};

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keydown', (e) => {
	switch (e.keyCode) {
		case 37:
			// if left
			eventEmitter.emit(Messages.HERO_SPEED_LEFT);
			break;
		case 39:
			eventEmitter.emit(Messages.HERO_SPEED_RIGHT);
			break;
	}
});

// TODO make message driven
window.addEventListener('keyup', (evt) => {
	eventEmitter.emit(Messages.HERO_SPEED_ZERO);
	if (evt.key === 'ArrowUp') {
		eventEmitter.emit(Messages.KEY_EVENT_UP);
	} else if (evt.key === 'ArrowDown') {
		eventEmitter.emit(Messages.KEY_EVENT_DOWN);
	} else if (evt.key === 'ArrowLeft') {
		eventEmitter.emit(Messages.KEY_EVENT_LEFT);
	} else if (evt.key === 'ArrowRight') {
		eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
	} else if (evt.keyCode === 32) {
		// space
		eventEmitter.emit(Messages.HERO_FIRE);
	} else if (evt.key === 'Enter') {
		eventEmitter.emit(Messages.GAME_START);
	}
});

function cooling() {
	coolDown = 500;
	let id = setInterval(() => {
		coolDown -= 100;
		if (coolDown === 0) {
			clearInterval(id);
		}
	}, 100);
}

function displayGameScore(message) {
	ctx.font = '30px Arial';
	ctx.fillStyle = 'red';
	ctx.textAlign = 'right';
	ctx.fillText(message, canvas.width - 90, canvas.height - 30);
}

function displayLife() {
	// should show tree ships.. 94 * 3
	const START_X = canvas.width - 150 - 30;
	for (let i = 0; i < game.life; i++) {
		ctx.drawImage(lifeImg, START_X + (i + 1) * 35, canvas.height - 90);
	}
}

function displayMessage(message, color = 'red') {
	ctx.font = '30px Arial';
	ctx.fillStyle = color;
	ctx.textAlign = 'center';
	ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}

function createMonsters(monsterImg) {
	// 98 * 5     canvas.width - (98*5 /2)
	const MONSTER_TOTAL = 5;
	const MONSTER_WIDTH = MONSTER_TOTAL * 98;
	const START_X = (canvas.width - MONSTER_WIDTH) / 2;
	const STOP_X = START_X + MONSTER_WIDTH;

	for (let x = START_X; x < STOP_X; x += 98) {
		for (let y = 0; y < 50 * 5; y += 50) {
			gameObjects.push(new Monster(x, y));
		}
	}

	gameObjects.forEach((go) => {
		go.img = monsterImg;
	});
}

function createHero(heroImg) {
	hero.dead = false;
	hero.img = heroImg;
	hero.y = (canvas.height / 4) * 3;
	hero.x = canvas.width / 2;
	gameObjects.push(hero);
}

function checkGameState(gameLoopId) {
	const monsters = gameObjects.filter((go) => go.type === 'Monster');
	if (hero.dead) {
		eventEmitter.emit(Messages.GAME_END_LOSS, gameLoopId);
	} else if (monsters.length === 0) {
		eventEmitter.emit(Messages.GAME_END_WIN);
	}

	// update hero position
	if (hero.speed.x !== 0) {
		hero.x += hero.speed.x;
	}

	const lasers = gameObjects.filter((go) => go.type === 'Laser');
	// laser hit something
	lasers.forEach((l) => {
		monsters.forEach((m) => {
			if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
				eventEmitter.emit(Messages.COLLISION_MONSTER_LASER, {
					first: l,
					second: m,
				});
			}
		});
	});

	// hero hit monster
	monsters.forEach((m) => {
		if (intersectRect(m.rectFromGameObject(), hero.rectFromGameObject())) {
			eventEmitter.emit(Messages.COLLISION_MONSTER_HERO, { monster: m, id: gameLoopId });
		}
	});

	gameObjects = gameObjects.filter((go) => !go.dead);
}

function runGame() {
	gameObjects = [];
	game.life = 3;
	game.points = 0;
	game.end = false;

	createMonsters(monsterImg);
	createHero(heroImg);

	let gameLoopId = setInterval(() => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		displayGameScore('Score: ' + game.points);
		displayLife();
		checkGameState(gameLoopId);
		draw(ctx, gameObjects);
	}, 100);
}

window.onload = async () => {
	canvas = document.getElementById('myCanvas');
	ctx = canvas.getContext('2d');

	heroImg = await loadTexture('spaceArt/png/player.png');
	heroImgLeft = await loadTexture('spaceArt/png/playerLeft.png');
	heroImgRight = await loadTexture('spaceArt/png/playerRight.png');
	heroImgDamaged = await loadTexture('spaceArt/png/playerDamaged.png');
	monsterImg = await loadTexture('spaceArt/png/enemyShip.png');
	laserRedImg = await loadTexture('spaceArt/png/laserRed.png');
	laserRedShot = await loadTexture('spaceArt/png/laserRedShot.png');
	laserGreenShot = await loadTexture('spaceArt/png/laserGreenShot.png');
	lifeImg = await loadTexture('spaceArt/png/life.png');

	game.ready = true;
	game.end = true;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	displayMessage('Press [Enter] to start the game Captain Pew Pew', 'blue');

	// CHECK  draw 5 * 5 monsters
	// CHECK move monsters down 1 step per 0.5 second
	// CHECK if monster collide with hero, destroy both, display loose text
	// CHECK if monster reach MAX, destroy hero, loose text
	// TODO add explosion when laser hits monster, should render for <=300ms
	// TODO add specific texture when moving left or right
	// TODO take damage when a meteor moves into you
	// TODO add meteor, meteors can damage ships
	// TODO add UFO after all monsters are down, UFO can fire back
	// TODO start random green laser from an enemy and have it go to HEIGHT, if collide with hero then deduct point

	// CHECK  draw bullet
	// CHECK , bullet should be destroyed at top
	// CHECK space should produce bullet, bullet should move 2 step per second
	// CHECK if bullet collide with monster, destroy both
	// CHECK if bullet rect intersect with monster rect then it is colliding..
};
