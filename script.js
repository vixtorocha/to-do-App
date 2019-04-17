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
    },

    toggleAll: function () {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        //checa quantos estão marcados como completo
        for (let i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        //se todos estiverem marcados, desmarca. Se houver um desmarcado, marca tudo.
        if (completedTodos === totalTodos) {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }

        this.displayTodos();
    }
};

//Preciso ter acesso ao display todos
let displayTodosButton = document.getElementById('Display-Button');

//Rodar o display todos quando o botão for precionado
displayTodosButton.addEventListener('click', function () {
    todoList.displayTodos();
})

//agora a mesma coisa com o botão toggle all
let toggleAllButton = document.getElementById('toggleAllButton');

toggleAllButton.addEventListener('click', function () {
    todoList.toggleAll();
})