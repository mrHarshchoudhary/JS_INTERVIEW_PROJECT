const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const navbar = document.getElementById('navbar');

function closeNavbar(e) {

  if (!navbar.contains(e.target) && e.target !== toggle) {
    document.body.classList.remove('show-nav');
    
   
    // document.body.removeEventListener('click', closeNavbar);
  }
}


toggle.addEventListener('click',()=>{
  document.body.classList.toggle('show-nav')
    document.body.addEventListener('click', closeNavbar);
   
})

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));


close.addEventListener('click',()=>modal.classList.remove('show-modal'))

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);