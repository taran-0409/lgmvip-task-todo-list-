let add=document.querySelector('#add');
let input=document.querySelector('#newtask input');
let task=document.querySelector('#tasks');
add.onclick = function(){
  if(input.value.length == 0){
      alert("Please Enter a Task")
  }

  else{
      task.innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${input.value}
              </span>
              <button class="delete">
                 X
              </button>
          </div>
      `;
    
      var current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }
  }
}
function removeAll() {
    task.innerHTML="";
}