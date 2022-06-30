import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/components';

const todoList = new TodoList();
const tarea = new Todo('aprender javascript');

todoList.nuevoTodo(tarea);
console.log(todoList);

crearTodoHtml(tarea);