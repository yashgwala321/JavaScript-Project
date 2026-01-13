const add = document.querySelector('.add');
const todoInput = document.querySelector('.todo_text');
const ul = document.querySelector('.list-items');
const error = document.querySelector('.error');
const SuccessComplete = document.querySelector('.success_complete')
const addMsg = document.querySelector('.success_add')

add.addEventListener("click", function () {

  function CreateToDoData(){
    let value = todoInput.value;
    
    if (value === "") {
        error.innerText = "Please Enter Your ToDo Text!";
        error.style.color = "red";
        error.style.fontSize = "12px";
        error.style.textAlign = "center"
        error.style.fontFamily = "Arial"
        error.style.marginTop = "5px"
        return;
    }
    error.innerText = "";

    //Add To-DO
    const li = document.createElement("li");
    li.innerHTML = `<div class="li_div">${value}<img src="image/delete.png" alt="" class="delete_image"></div>`;
    ul.appendChild(li);

    addMsg.innerText = "To-Do item Created Successfully"
    addMsg.classList.add("success_add")

    setTimeout(() => {
        addMsg.classList.add("fade-out")
    }, 1000);

    setTimeout(()=>{
        addMsg.innerText = ""
    }, 2000)

    addMsg.classList.remove("fade-out")

    todoInput.value = "";
  }
  CreateToDoData()

});


ul.addEventListener("click", function(e){
    function CompleteItems(e){
      if(e.target.classList.contains("li_div")){

        e.target.style.textDecoration = "line-through"
        SuccessComplete.innerText = "To-Do item Completed Successfully"
        SuccessComplete.classList.add("success_complete")
        
        
        setTimeout(() => {
              SuccessComplete.classList.add("fade-out");
        }, 1000);

        setTimeout(() => {
              SuccessComplete.innerText = "";
        }, 2000);

        SuccessComplete.classList.remove("fade-out");
      }
  }
  CompleteItems(e)
})

ul.addEventListener("click",function(e){
   function DeleteItems (e){
      if(e.target.classList.contains("delete_image")){
          let msg = confirm("Are you sure you want to delete this item?")
          if(msg){
              e.target.closest("li").remove()
          }
      }
   }
   DeleteItems(e)
})


