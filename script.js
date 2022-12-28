const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');


closePopUp.addEventListener('click', () =>{
    popUp.classList.remove('active');
})


openPopUp.addEventListener("click" , function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


console.log(openPopUp);
console.log(closePopUp);