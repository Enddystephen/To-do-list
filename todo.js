const todoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');
        
        
        addTaskButton.addEventListener('click', function(){

            const taskItem = todoInput.value.trim();
            if(todoInput.value == ''){
                alert('create a task')
            } else{
                const taskText = createElement(taskItem)
                todoList.appendChild(taskText);
                todoInput.value = '';
            }     
        });
           
        const createElement = (taskText) => {
            const taskItem = document.createElement('li')
            taskItem.className = "todo-item";

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox');
            taskItem.appendChild(checkbox)

            const taskTextSpan = document.createElement('span');
            taskTextSpan.innerHTML = taskText;
            taskItem.appendChild(taskTextSpan)

            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = 'Delete'
            deleteBtn.classList.add('delete-btn')
            taskItem.appendChild(deleteBtn)

            deleteBtn.addEventListener('click', function(deleteTask){
                const taskItem = event.target.parentNode;
                todoList.removeChild(taskItem)

            });
                
            return taskItem;     
        };

        //  for checkbox // 
        todoList.addEventListener('change', function(toggleCheckbox){
            taskItem.classList.toggle('toggle')
        
        });

        // for delete button//
        const deleteTask  = (event) => {
            const taskItem = event.target.parentNode;
            todoList.removeChild(taskItem);
        };
