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
    };
    todos.push(todo);
    
    function displayTodos() {
      let table = document.querySelector('table');
      let newRow = table.insertRow();

      Object.values(todo).forEach(element => {
          let newCell = newRow.insertCell();
          let newText = document.createTextNode(element);
          newCell.appendChild(newText);    
      });
    };  

    displayTodos();

    task.value = "";

  });  
}