let todoList = {
    todos: [],

    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log('The to-dos list is empty.');
        } else {
            // Se não tiver vazia, mostrar as todos.
            console.log('My todos:');
            for (i = 0; i < this.todos.length; i++) {

                if (this.todos[i].completed === true) {
                    console.log('(X)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
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