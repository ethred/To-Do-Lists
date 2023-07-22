import Functio from './input.js';

const datas = new Functio();
let todos = datas.todos();

class checked {
    checkTodo=(todoId) => {
      todos = todos.map((todo, index) => ({
        ...todo,
        completed: index === todoId ? !todo.completed : todo.completed,
      }));
      datas.setodos(todos);
      window.location.reload();
    }

    toDelete = () => {
      todos = todos.filter((todo) => todo.completed !== true);
      todos = todos.map((todo, index) => ({
        ...todo,
        index: index + 1,
      }));
      datas.setodos(todos);
      window.location.reload();
    }
}

export default checked;