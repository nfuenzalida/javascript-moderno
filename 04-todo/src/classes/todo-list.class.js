import { Todo } from './todo.class';

export class TodoList {

    constructor() {
        this.todo = [];
    }

    nuevoTodo(todo) {
        this.todo.push(todo);
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter( todo => todo.id != id )
    }

    marcarCompletado(id) {
        for( const todo of this.todos ) {
            if( todo.id == id ) {
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter( todo => !todo.completado )
    }

}