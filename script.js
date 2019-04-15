let todoList = {
    todos: [],

    displayTodos: function () {
        console.log('My todos:', this.todos);
    },

    addTodos: function (todoText) {

        this.todos.push({
            todoText: todoText, //O primeiro todo é a propriedade e o segundo é o parametro.
            completed: false,
        });

        this.displayTodos();
    },

    changeTodos: function (position, valueTodoText) {
        this.todos[position].todoText = valueTodoText;
        this.displayTodos();
    },

    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    toggleCompleted: function (position) {
        this.todos[position].completed = !this.todos[position].completed //inverte o bollean
        this.displayTodos();
    }
};