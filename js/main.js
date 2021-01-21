'use strict';

{
  const id = [];

  document.querySelector('button').addEventListener('click', () => {
    const task = document.getElementById('task');
    
    const li_1 = document.createElement('li');
    id.push(li_1);
    li_1.textContent = id.length - 1;
    document.getElementById('number').appendChild(li_1);

    
    const li_2 = document.createElement('li');
    li_2.textContent = task.value;
    document.getElementById('conte').appendChild(li_2);

    const li_3 = document.createElement('li');
    li_3.innerHTML = '<button>作業中</button> <button>削除</button>';
    document.getElementById('state').appendChild(li_3);

    task.value = ' ';
    task.focus();

  });

}