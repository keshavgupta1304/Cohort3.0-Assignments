const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const program = new Command();

const filePath=path.join(__dirname,'todos.json')

program
  .name('Todo-Cli')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

function getTodos()
{
  if(fs.existsSync(filePath))
  {
    const data = fs.readFileSync(filePath, 'utf8');
    if(data.trim())
    {
      return JSON.parse(data)
    }
  }
  return [];
}

function saveTodos(todo)
{
  fs.writeFileSync(filePath,JSON.stringify(todo,null,2),'utf8')
}
//Add a todo
program.command('AddTodo')
  .description('Add a new todo to the list')
  .argument('<task>', 'task to add')
  .action((task) => {
    const todos=getTodos();
    todos.push({task,done:false});
    saveTodos(todos)
    console.log(`Added todo ${task}`);
  });
//Delete a todo
program.command('DeleteTodo')
  .description('Delete a new todo to the list')
  .argument('<task>', 'task to delete')
  .action((task) => {
    let todos=getTodos();
    todos=todos.filter(todo=>todo.task!==task)
    saveTodos(todos)
    console.log(`Deleted todo ${task}`);
  });

//mark the todo as completed
program.command('markDone')
  .description('mark a todo to the list')
  .argument('<task>', 'task to mark')
  .action((task) => {
    const todos=getTodos();
    const todo = todos.find(todo=>todo.task===task)
    if(todo)
    {
      if(todo.done)
      {
        console.log(`Task is already completed`);
        
      }
      else
      {
        todo.done=true;
        saveTodos(todos)
        console.log(`Congratulations you have completed the todo ${task} successfully`);
      }
    }
    else
    {
      console.log(`Todo is not there ${task}`);
    }
  }); 

program.parse();