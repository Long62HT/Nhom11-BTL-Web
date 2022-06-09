const btnDropDown = document.querySelector('.backcolor')



btnDropDown.addEventListener('click',()=>{
    document.querySelector('.dropdown-menu').classList.toggle('actives');
    console.log(document.querySelector('.dropdown-menu'));
})

let width = window.innerWidth;
console.log(width);
if(width>=1366){
    
    btnDropDown.addEventListener("mouseover", ()=>{
        document.querySelector('.dropdown-menu').classList.remove('actives');
    })

    

}
btnDropDown.addEventListener("mouseleave", ()=>{
    document.querySelector('.dropdown-menu').classList.add('actives');

})