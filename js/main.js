'use strict';

{
  const todos = [];

  document.querySelector('button').addEventListener('click', () => {
    const task = document.getElementById('task');
    
    const todo = 
    {
      id: todos.length,
      task: task.value,
      status: '作業中',
      delete: '削除',
    };
    todos.push(todo);
    
    function displayTodos() {
      let table = document.querySelector('table');
      let newRow = table.insertRow();

      Object.values(todo).forEach(element => {
          let newCell = newRow.insertCell();

          if(element === todos.length - 1 || element === task.value) {
            let newText = document.createTextNode(element);
            newCell.appendChild(newText);    
          } else {
            let newButton = document.createElement('button');
            newButton.textContent = element;
            newCell.appendChild(newButton);    
          }
      });
    };  

    displayTodos();

    task.value = '';

  });  
}