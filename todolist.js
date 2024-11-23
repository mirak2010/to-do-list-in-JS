var myform=document.getElementById("myform");
var myInput=document.getElementById("myInput");
var myItems=document.getElementById("myItems");

myform.addEventListener("submit",
    function(event){
        event.preventDefault();
        createItem(myInput.value);

    }
)
function createItem(inputItems){
    var items=`<li>${inputItems}
    <button onclick="deleteElement(this)">Delete</button> </li>`
    myItems.insertAdjacentHTML("beforeend", items)
    myInput.value="";
    myInput.focus();
}
function deleteElement(ElementtoDelete){
    ElementtoDelete.parentElement.remove();
}


