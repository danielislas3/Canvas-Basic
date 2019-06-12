const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

//lenar canvas
ctx.fillRect(100 , 100, 200, 200)
//llenar canvas
ctx.clearRect(100 , 100, 200, 200)
//estilo de canvas
ctx.fillStyle='crimson'
ctx.strokeStyle='crimson'
ctx.strokeRect(200, 200 ,200 ,200) 