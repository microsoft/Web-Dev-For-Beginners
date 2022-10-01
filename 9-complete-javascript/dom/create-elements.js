const url = 'https://cdn.vox-cdn.com/thumbor/FxBr6MiQn3W2bWPBA1dQqLvNREQ=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61520649/jbareham_180424_2499_0007.0.jpg'
const section = document.querySelector('section')
const newImg = document.createElement('img')
newImg.setAttribute('src',url)
section.appendChild(newImg)
