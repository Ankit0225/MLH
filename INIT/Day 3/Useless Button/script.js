const btn = document.querySelector('.btn')
const audio = document.querySelector('.audio')
btn.addEventListener('click', ()=> {
   audio.play()
   console.log('play');
})