
const question = document.querySelectorAll(".question");
const br = document.querySelectorAll(".br");
const valid = document.querySelector("button");
let nombre = document.querySelector("span");
nombre.textContent =0;
function reponse(){
    nombre.textContent =0;
    for (let index = 0; index < question.length; index++) {
        if(br[index].checked){
            question[index].className = "br"; 
            nombre.textContent ++;
        }
        else{
            question[index].className = "mr";
        }
    }
}
valid.addEventListener("click", reponse);
