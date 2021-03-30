
var input = document.getElementById('userinput');
var clicks = document.getElementById('enter');
var ul = document.querySelector("ul");
var delets = document.querySelector('li');
console.log(clicks);
// createing a element 
function createli(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
    li.onclick = taggil;
    input.value = "";
// createing an button for deleteing 
    button =  document.createElement("button");
    button.appendChild(document.createTextNode('Delete'));
    button.classList.add('delete')
    li.appendChild(button)
    button.onclick = deleteli;
}
// this is the function to delete
function deleteli(evt){
    evt.target.parentNode.remove();
}
// this is the toggle to the word
function taggil(event){
   var finished = this.classList.toggle("done");

}

function clickevent(){
    if(input.value.length > 0){
        return createli();
    }
}
function keypresss(){
    if(input.value.length > 0 && event.keyCode === 13 ){
        return createli();
    }
}

clicks.addEventListener('click', clickevent);
input.addEventListener('keypress', keypresss);