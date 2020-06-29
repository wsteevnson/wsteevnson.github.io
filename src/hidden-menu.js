let hamToggle = document.getElementById('hamburger-checkbox');
let hiddenMenu = document.getElementById('hidden-menu');

let showMenuVar = 1;
hamToggle.addEventListener('click',()=>{
    showMenuVar++;
    showMenuVar%2===0 ? hiddenMenu.classList.add('show-menu') : 
    hiddenMenu.classList.remove('show-menu');
});
console.log(showMenuVar);