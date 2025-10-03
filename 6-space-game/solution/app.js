// Space Game — app.js

(() => {
  // Element references
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const canvas = $('#myCanvas');
  const ctx = canvas.getContext('2d');

  const btnStart = $('[data-action="start"]');
  const btnPause = $('[data-action="pause"]');
  const btnReset = $('[data-action="reset"]');
  const btnMute = $('[data-action="mute"]');
  const btnFullscreen = $('[data-action="fullscreen"]');
  const btnOpenSettings = $('[data-action="open-settings"]');

  const outScore = $('#score');
  const outLevel = $('#level');
  const outLives = $('#lives');
  const outShield = $('#shield');
  const outFps = $('#fps');
  const outTime = $('#time');

  const settingsDialog = $('#settingsDialog');
  const pauseDialog = $('#pauseDialog');

  const inputBgUrl = $('#bgImageUrl');
  const inputSpriteUpload = $('#spriteUpload');

  const sfxShoot = $('#sfxShoot');
  const sfxExplosion = $('#sfxExplosion');
  const bgMusic = $('#bgMusic');

  // Game config and state
  const BASE_WIDTH = 1024;
  const BASE_HEIGHT = 768;

  const settings = {
    difficulty: 'normal',     // easy | normal | hard | insane
    graphics: 'medium',       // low | medium | high | ultra
    musicVolume: 0.6,         // 0..1
    sfxVolume: 0.8,           // 0..1
    controlScheme: 'wasd',    // wasd | arrows | custom
    muted: false
  };

  const difficultyTable = {
    easy:   { enemyRate: 1.6, enemySpeed: 60,  maxEnemies: 12 },
    normal: { enemyRate: 1.2, enemySpeed: 90,  maxEnemies: 16 },
    hard:   { enemyRate: 0.9, enemySpeed: 120, maxEnemies: 22 },
    insane: { enemyRate: 0.7, enemySpeed: 160, maxEnemies: 28 }
  };

  const graphicsTable = {
    low:   { glow: false, blur: 0, starLayers: 1 },
    medium:{ glow: false, blur: 0, starLayers: 2 },
    high:  { glow: true,  blur: 0, starLayers: 3 },
    ultra: { glow: true,  blur: 2, starLayers: 4 }
  };

  let state = {
    running: false,
    paused: false,
    lastTs: 0,
    accTime: 0,
    fps: 0,
    frameCount: 0,
    frameTimer: 0,
    score: 0,
    level: 1,
    lives: 3,
    shield: 100,
    timeSec: 0,
    enemySpawnTimer: 0,
    fireCooldown: 0,
    specialCooldown: 0,
  };

  // Entities
  const player = {
    x: BASE_WIDTH / 2,
    y: BASE_HEIGHT - 140,
    r: 18,
    angle: -Math.PI / 2,
    speed: 240,
    vx: 0,
    vy: 0
  };

  const bullets = [];
  const enemies = [];
  const particles = [];

  // Background image
  let bgImage = null;
  inputBgUrl?.addEventListener('change', () => {
    const url = inputBgUrl.value.trim();
    if (!url) { bgImage = null; return; }
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => { bgImage = img; };
    img.onerror = () => { bgImage = null; };
    img.src = url;
  });

  // High-DPI canvas scaling while drawing in CSS pixels
  function resizeCanvas() {
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = Math.floor(BASE_WIDTH * dpr);
    canvas.height = Math.floor(BASE_HEIGHT * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Input handling
  const keys = new Set();
  const keyMap = {
    up:    ['w', 'W', 'ArrowUp'],
    down:  ['s', 'S', 'ArrowDown'],
    left:  ['a', 'A', 'ArrowLeft'],
    right: ['d', 'D', 'ArrowRight'],
    fire:  [' ', 'Spacebar'],
    special: ['Shift'],
    pause: ['p', 'P'],
    fullscreen: ['f', 'F'],
  };

  window.addEventListener('keydown', (e) => {
    keys.add(e.key);
    if (keyMap.pause.includes(e.key)) {
      e.preventDefault();
      togglePause();
    }
    if (keyMap.fullscreen.includes(e.key)) {
      e.preventDefault();
      toggleFullscreen();
    }
    if (keyMap.fire.includes(e.key)) e.preventDefault();
  }, { passive: false });

  window.addEventListener('keyup', (e) => {
    keys.delete(e.key);
  });

  // Buttons
  btnStart?.addEventListener('click', startGame);
  btnPause?.addEventListener('click', togglePause);
  btnReset?.addEventListener('click', resetGame);
  btnMute?.addEventListener('click', toggleMute);
  btnFullscreen?.addEventListener('click', toggleFullscreen);
  btnOpenSettings?.addEventListener('click', () => {
    settingsDialog?.showModal();
  });

  // Settings dialog apply/close
  settingsDialog?.addEventListener('close', () => {
    if (settingsDialog.returnValue === 'apply') {
      const diff = $('#difficulty').value;
      const gfx = $('#graphics').value;
      const musicV = Number($('#musicVolume').value) / 100;
      const sfxV = Number($('#sfxVolume').value) / 100;
      const scheme = $('#controlScheme').value;
      settings.difficulty = diff;
      settings.graphics = gfx;
      settings.musicVolume = clamp01(musicV);
      settings.sfxVolume = clamp01(sfxV);
      settings.controlScheme = scheme;
      applyVolumes();
    }
  });

  // Pause dialog buttons (form method="dialog" maps button value)
  pauseDialog?.addEventListener('close', () => {
    const val = pauseDialog.returnValue;
    if (val === 'resume') {
      togglePause(false);
    } else if (val === 'restart') {
      resetGame();
      startGame();
    }
  });

  // Fullscreen events for UI sync
  document.addEventListener('fullscreenchange', () => {
    // Could update icon or button state here if desired
  });

  // Audio helpers
  function applyVolumes() {
    const vMusic = settings.muted ? 0 : settings.musicVolume;
    const vSfx = settings.muted ? 0 : settings.sfxVolume;
    if (bgMusic) bgMusic.volume = clamp01(vMusic);
    if (sfxShoot) sfxShoot.volume = clamp01(vSfx);
    if (sfxExplosion) sfxExplosion.volume = clamp01(vSfx);
  }
  applyVolumes();

  function toggleMute() {
    settings.muted = !settings.muted;
    btnMute?.setAttribute('aria-pressed', String(settings.muted));
    applyVolumes();
  }

  // Game lifecycle
  function startGame() {
    if (!state.running) {
      state.running = true;
      state.paused = false;
      state.lastTs = 0;
      // Try starting BG music on user gesture; ignore if blocked
      bgMusic?.play?.().catch(() => {/* Autoplay may be blocked until further interaction */});
      requestAnimationFrame(loop);
    }
  }

  function togglePause(force = null) {
    if (!state.running) return;
    const next = (force === null) ? !state.paused : !!force;
    state.paused = next;
    if (state.paused) {
      pauseDialog?.showModal();
    } else {
      if (pauseDialog?.open) pauseDialog.close('resume');
      // Reset lastTs so dt spike doesn’t occur
      state.lastTs = 0;
      requestAnimationFrame(loop);
    }
  }

  function resetGame() {
    state = {
      running: false,
      paused: false,
      lastTs: 0, accTime: 0, fps: 0, frameCount: 0, frameTimer: 0,
      score: 0, level: 1, lives: 3, shield: 100, timeSec: 0,
      enemySpawnTimer: 0, fireCooldown: 0, specialCooldown: 0,
    };
    bullets.length = 0;
    enemies.length = 0;
    particles.length = 0;
    player.x = BASE_WIDTH / 2;
    player.y = BASE_HEIGHT - 140;
    player.vx = 0; player.vy = 0; player.angle = -Math.PI / 2;
    updateHUD();
  }

  // Fullscreen
  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await (canvas.requestFullscreen?.() || $('#play')?.requestFullscreen?.());
      } else {
        await document.exitFullscreen?.();
      }
    } catch {
      // ignore
    }
  }

  // Loop
  function loop(ts) {
    if (!state.running || state.paused) return;
    if (!state.lastTs) state.lastTs = ts;
    const dt = Math.min(0.033, (ts - state.lastTs) / 1000); // clamp 33ms
    state.lastTs = ts;

    // FPS calc
    state.frameTimer += dt;
    state.frameCount++;
    if (state.frameTimer >= 0.5) {
      state.fps = Math.round(state.frameCount / state.frameTimer);
      state.frameCount = 0;
      state.frameTimer = 0;
    }

    // Update world
    update(dt);
    // Render
    render();

    requestAnimationFrame(loop);
  }

  // Update
  function update(dt) {
    state.timeSec += dt;

    // Controls
    const scheme = settings.controlScheme;
    const up = (scheme === 'arrows') ? keys.has('ArrowUp') : (keys.has('w') || keys.has('W') || keys.has('ArrowUp'));
    const down = (scheme === 'arrows') ? keys.has('ArrowDown') : (keys.has('s') || keys.has('S') || keys.has('ArrowDown'));
    const left = (scheme === 'arrows') ? keys.has('ArrowLeft') : (keys.has('a') || keys.has('A') || keys.has('ArrowLeft'));
    const right = (scheme === 'arrows') ? keys.has('ArrowRight') : (keys.has('d') || keys.has('D') || keys.has('ArrowRight'));
    const firing = keys.has(' ') || keys.has('Spacebar');
    const special = keys.has('Shift');

    const accel = player.speed;
    player.vx = (right ? 1 : 0) - (left ? 1 : 0);
    player.vy = (down ? 1 : 0) - (up ? 1 : 0);

    const mag = Math.hypot(player.vx, player.vy) || 1;
    player.vx = (player.vx / mag) * accel;
    player.vy = (player.vy / mag) * accel;

    player.x += player.vx * dt;
    player.y += player.vy * dt;

    // Boundaries
    player.x = clamp(player.x, player.r + 4, BASE_WIDTH - player.r - 4);
    player.y = clamp(player.y, player.r + 4, BASE_HEIGHT - player.r - 4);

    // Aim angle toward movement if moving
    if (mag > 1) {
      player.angle = Math.atan2(player.vy, player.vx);
    }

    // Firing
    state.fireCooldown -= dt;
    if (firing && state.fireCooldown <= 0) {
      fireBullet();
      state.fireCooldown = 0.15;
    }

    // Special (smart-bomb)
    state.specialCooldown -= dt;
    if (special && state.specialCooldown <= 0 && state.shield >= 25) {
      state.specialCooldown = 6;
      state.shield = Math.max(0, state.shield - 25);
      // Clear enemies in a wave
      enemies.splice(0, enemies.length);
      explode(player.x, player.y, 28, 'special');
      sfxExplosion?.cloneNode(true)?.play?.().catch(()=>{});
    }

    // Enemies spawn
    const diff = difficultyTable[settings.difficulty] || difficultyTable.normal;
    state.enemySpawnTimer -= dt;
    if (state.enemySpawnTimer <= 0 && enemies.length < diff.maxEnemies) {
      spawnEnemy(diff.enemySpeed);
      state.enemySpawnTimer = diff.enemyRate;
    }

    // Update bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
      const b = bullets[i];
      b.x += Math.cos(b.a) * b.speed * dt;
      b.y += Math.sin(b.a) * b.speed * dt;
      b.life -= dt;
      if (b.life <= 0 || b.x < -20 || b.x > BASE_WIDTH + 20 || b.y < -20 || b.y > BASE_HEIGHT + 20) {
        bullets.splice(i, 1);
      }
    }

    // Update enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
      const e = enemies[i];
      const dx = player.x - e.x;
      const dy = player.y - e.y;
      const ang = Math.atan2(dy, dx);
      e.x += Math.cos(ang) * e.speed * dt;
      e.y += Math.sin(ang) * e.speed * dt;
      e.a = ang;

      // Bullet collision
      let hit = false;
      for (let j = bullets.length - 1; j >= 0; j--) {
        const b = bullets[j];
        if (dist2(e.x, e.y, b.x, b.y) < (e.r + b.r) * (e.r + b.r)) {
          bullets.splice(j, 1);
          hit = true;
          break;
        }
      }
      if (hit) {
        state.score += Math.round(25 + Math.random() * 25);
        explode(e.x, e.y, 10, 'enemy');
        sfxExplosion?.cloneNode(true)?.play?.().catch(()=>{});
        enemies.splice(i, 1);
        continue;
      }

      // Player collision
      if (dist2(e.x, e.y, player.x, player.y) < (e.r + player.r) * (e.r + player.r)) {
        state.shield -= 25;
        explode(player.x, player.y, 16, 'player');
        sfxExplosion?.cloneNode(true)?.play?.().catch(()=>{});
        enemies.splice(i, 1);
        if (state.shield <= 0) {
          state.lives -= 1;
          state.shield = 100;
          if (state.lives <= 0) {
            gameOver();
            return;
          }
        }
      }
    }

    // Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;
      if (p.life <= 0) particles.splice(i, 1);
    }

    // Level scaling
    const newLevel = 1 + Math.floor(state.timeSec / 30);
    if (newLevel !== state.level) state.level = newLevel;

    updateHUD();
  }

  function updateHUD() {
    outScore.textContent = String(state.score);
    outLevel.textContent = String(state.level);
    outLives.textContent = String(state.lives);
    outShield.textContent = `${Math.max(0, Math.min(100, Math.round(state.shield)))}%`;
    outFps.textContent = String(state.fps);
    outTime.textContent = toMMSS(state.timeSec);
  }

  // Render
  function render() {
    // Clear
    ctx.clearRect(0, 0, BASE_WIDTH, BASE_HEIGHT);

    // Background
    if (bgImage) {
      drawCoverImage(bgImage, 0, 0, BASE_WIDTH, BASE_HEIGHT);
    } else {
      // Starfield layers
      const starLayers = graphicsTable[settings.graphics]?.starLayers ?? 2;
      for (let i = 0; i < starLayers; i++) {
        const density = 40 + i * 30;
        drawStars(density, i * 1000);
      }
    }

    // Effects
    const gfx = graphicsTable[settings.graphics] || graphicsTable.medium;
    if (gfx.blur) {
      ctx.filter = `blur(${gfx.blur}px)`;
    }

    // Enemies
    ctx.save();
    for (const e of enemies) {
      ctx.save();
      ctx.translate(e.x, e.y);
      ctx.rotate(e.a);
      ctx.fillStyle = '#ff6b6b';
      if (gfx.glow) {
        ctx.shadowColor = '#ff6b6b';
        ctx.shadowBlur = 12;
      }
      ctx.beginPath();
      ctx.arc(0, 0, e.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();

    // Bullets
    ctx.save();
    for (const b of bullets) {
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.a);
      ctx.fillStyle = '#a78bfa';
      if (gfx.glow) {
        ctx.shadowColor = '#a78bfa';
        ctx.shadowBlur = 10;
      }
      ctx.fillRect(-2, -8, 4, 16);
      ctx.restore();
    }
    ctx.restore();

    // Player
    ctx.save();
    ctx.translate(player.x, player.y);
    ctx.rotate(player.angle);
    ctx.fillStyle = '#5ac8fa';
    if (gfx.glow) {
      ctx.shadowColor = '#5ac8fa';
      ctx.shadowBlur = 14;
    }
    drawTriangle(0, 0, player.r);
    ctx.restore();

    // Particles
    ctx.save();
    for (const p of particles) {
      ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.s, p.s);
    }
    ctx.globalAlpha = 1;
    ctx.restore();

    // Reset filter
    ctx.filter = 'none';
  }

  // Helpers: drawing
  function drawTriangle(x, y, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x - r * 0.7, y - r * 0.9);
    ctx.lineTo(x - r * 0.7, y + r * 0.9);
    ctx.closePath();
    ctx.fill();
  }

  function drawStars(count, seed) {
    // Simple deterministic star positions based on seed
    const rand = mulberry32(Math.floor(state.timeSec * 60) + seed);
    ctx.save();
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    for (let i = 0; i < count; i++) {
      const x = Math.floor(rand() * BASE_WIDTH);
      const y = Math.floor(rand() * BASE_HEIGHT);
      const s = rand() * 2;
      ctx.fillRect(x, y, s, s);
    }
    ctx.restore();
  }

  function drawCoverImage(img, x, y, w, h) {
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    const scale = Math.max(w / iw, h / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = x + (w - dw) / 2;
    const dy = y + (h - dh) / 2;
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  // Spawn and effects
  function spawnEnemy(speed) {
    // Spawn at a random edge
    const edge = Math.floor(Math.random() * 4);
    let x = 0, y = 0;
    if (edge === 0) { x = Math.random() * BASE_WIDTH; y = -20; }
    if (edge === 1) { x = BASE_WIDTH + 20; y = Math.random() * BASE_HEIGHT; }
    if (edge === 2) { x = Math.random() * BASE_WIDTH; y = BASE_HEIGHT + 20; }
    if (edge === 3) { x = -20; y = Math.random() * BASE_HEIGHT; }
    enemies.push({
      x, y, r: 16 + Math.random() * 8, a: 0,
      speed: speed * (0.8 + Math.random() * 0.4)
    });
  }

  function fireBullet() {
    bullets.push({
      x: player.x + Math.cos(player.angle) * (player.r + 6),
      y: player.y + Math.sin(player.angle) * (player.r + 6),
      a: player.angle,
      speed: 540,
      life: 1.2,
      r: 6
    });
    // Low-latency clone for overlapping sounds
    sfxShoot?.cloneNode(true)?.play?.().catch(()=>{});
  }

  function explode(x, y, count, type) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 60 + Math.random() * 180;
      particles.push({
        x, y,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp,
        s: 2 + Math.random() * 3,
        life: 0.6 + Math.random() * 0.6,
        maxLife: 1.2,
        color: type === 'player' ? '#ff6b6b' : (type === 'special' ? '#5ac8fa' : '#a78bfa')
      });
    }
  }

  // Game over
  function gameOver() {
    state.running = false;
    // Persist score
    try {
      const key = 'spaceGameScores';
      const list = JSON.parse(localStorage.getItem(key) || '[]');
      list.push({ initials: 'YOU', score: state.score, t: Date.now() });
      list.sort((a, b) => b.score - a.score);
      localStorage.setItem(key, JSON.stringify(list.slice(0, 10)));
      renderScores(list.slice(0, 10));
    } catch {
      // ignore
    }
    // Show pause dialog as "Restart"
    if (!pauseDialog?.open) pauseDialog?.showModal();
  }

  function renderScores(list) {
    const ol = $('#scores');
    if (!ol) return;
    ol.innerHTML = '';
    list.forEach(item => {
      const li = document.createElement('li');
      const pretty = item.score.toLocaleString();
      li.dataset.initials = item.initials || 'YOU';
      li.dataset.score = String(item.score);
      li.textContent = `${li.dataset.initials} — ${pretty}`;
      ol.appendChild(li);
    });
  }

  // Utilities
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function clamp01(v) { return clamp(v, 0, 1); }
  function dist2(x1, y1, x2, y2) { const dx = x1 - x2, dy = y1 - y2; return dx*dx + dy*dy; }
  function toMMSS(sec) {
    const s = Math.floor(sec);
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
  }
  function mulberry32(a) {
    return function() {
      let t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
  }

  // Initial scores render
  try {
    const key = 'spaceGameScores';
    const list = JSON.parse(localStorage.getItem(key) || '[]');
    renderScores(list.slice(0, 10));
  } catch {
    // ignore
  }

  // Expose minimal API for external hooking if needed
  window.SpaceGame = {
    start: startGame,
    pause: () => togglePause(true),
    resume: () => togglePause(false),
    reset: resetGame,
    fullscreen: toggleFullscreen,
    mute: toggleMute
  };
})();
