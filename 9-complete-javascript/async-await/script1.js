console.log("Helo")

// async function getData(){
//     // if I want to request 3 urls
//    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/1")
//    const res2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2")
//    const res3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3")
//    console.log(res.data)
// }

// async function getData(){
//     // if I want to request 3 urls
//    const res = axios.get("https://pokeapi.co/api/v2/pokemon/1")
//    const res2 = axios.get("https://pokeapi.co/api/v2/pokemon/2")
//    const res3 = axios.get("https://pokeapi.co/api/v2/pokemon/3")
//    const poke1 = await res
//    const poke2 = await res2
//    const poke3 = await res3
// //    now res, res2, res3 are promises not data
//    console.log(poke1.data)
// }


async function getData(){
   const res = axios.get("https://pokeapi.co/api/v2/pokemon/1")
   const res2 = axios.get("https://pokeapi.co/api/v2/pokemon/2")
   const res3 = axios.get("https://pokeapi.co/api/v2/pokemon/3")
   const results = await Promise.all([res,res2,res3])
   console.log(results)
}


getData()









// async function hello(){
//     return "Hey Guys"
// }
// hello().then((value) => {
//     console.log(value)
// })

// const add  = async (a,b) => {
//     if(typeof(a)!== 'number' | typeof(b)!== 'number' ){
//         throw new Error("Not a number")
//     }
//     return a+b;
// }

// add(24,35).then((value) => {console.log(value)})

// async function getData(){
//     try{
//         const res = await axios.get('https://swapi.dev/api/planets')
//         console.log(res.data)
//     }
//     catch(err){
//         console.log(err)
//     }
// }


// getData()

// getData().catch((err) => {console.log(err)})
// --_________________________

// const moveX = (element, amount, delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const bodyBoundary = document.body.clientWidth;
// 			const elRight = element.getBoundingClientRect().right;
// 			const currLeft = element.getBoundingClientRect().left;
// 			if (elRight + amount > bodyBoundary) {
// 				reject({ bodyBoundary, elRight, amount });
// 			}
// 			else {
// 				element.style.transform = `translateX(${currLeft + amount}px)`;
// 				resolve();
// 			}
// 		}, delay);
// 	});
// };

// const btn = document.querySelector('button');
// async function animateRight(el, amt) {
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// }
// animateRight(btn, 100).catch((err) => {
// 	console.log('Hit the right edge! Now Moving left!');
// 	animateRight(btn, -100);
// });

// const btn = document.querySelector('button');
// moveX(btn, 100, 1000)
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.catch(({ bodyBoundary, amount, elRight }) => {
// 		console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
// 		console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
// 	});

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
// 	setTimeout(() => {
// 		const bodyBoundary = document.body.clientWidth;
// 		const elRight = element.getBoundingClientRect().right;
// 		const currLeft = element.getBoundingClientRect().left;
// 		if (elRight + amount > bodyBoundary) {
// 			onFailure();
// 		}
// 		else {
// 			element.style.transform = `translateX(${currLeft + amount}px)`;
// 			onSuccess();
// 		}
// 	}, delay);
// };

// LOOK AT THIS UGLY MESS!
// moveX(
// 	btn,
// 	300,
// 	1000,
// 	() => {
// 		//success callback
// 		moveX(
// 			btn,
// 			300,
// 			1000,
// 			() => {
// 				//success callback
// 				moveX(
// 					btn,
// 					300,
// 					1000,
// 					() => {
// 						//success callback
// 						moveX(
// 							btn,
// 							300,
// 							1000,
// 							() => {
// 								//success callback
// 								moveX(
// 									btn,
// 									300,
// 									1000,
// 									() => {
// 										//success callback
// 										alert('YOU HAVE A WIDE SCREEN!');
// 									},
// 									() => {
// 										//failure callback
// 										alert('CANNOT MOVE FURTHER!');
// 									}
// 								);
// 							},
// 							() => {
// 								//failure callback
// 								alert('CANNOT MOVE FURTHER!');
// 							}
// 						);
// 					},
// 					() => {
// 						//failure callback
// 						alert('CANNOT MOVE FURTHER!');
// 					}
// 				);
// 			},
// 			() => {
// 				//failure callback
// 				alert('CANNOT MOVE FURTHER!');
// 			}
// 		);
// 	},
// 	() => {
// 		//failure callback
// 		alert('CANNOT MOVE FURTHER!');
// 	}
// );