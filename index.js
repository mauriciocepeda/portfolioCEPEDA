const themeButton=document.querySelector('#themeButton');
const body=document.querySelector('body');
// ----------------------------------------------------------------


themeButton.addEventListener('click',()=>{
    if (themeButton.classList=="col-2 text-center bi bi-brightness-high fs-2 pt-3"){
        themeButton.classList="col-2 text-center sbi bi-moon fs-2 pt-3";
        body.classList="dark";
        body.style.transition="2s";
    }else{
        themeButton.classList="col-2 text-center bi bi-brightness-high fs-2 pt-3";
        body.classList="light";
        body.style.transition="2s";
    }
})


