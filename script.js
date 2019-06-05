let todoList = {
    todos: [],

    addTodo: function (todoText) {

        this.todos.push({
            todoText: todoText, //O primeiro todo é a propriedade e o segundo é o parametro.
            completed: false,
        });
    },

    changeTodos: function (position, valueTodoText) {
        this.todos[position].todoText = valueTodoText;
    },

    deleteTodo: function (position) {
        this.todos.splice(position, 1);
    },

    toggleCompleted: function (position) {
        this.todos[position].completed = !this.todos[position].completed //inverte o bollean
    },

    toggleAll: function () {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        //Checa quantas tarefas estão checadas
        this.todos.forEach(function (todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        });

        this.todos.forEach(function (todo) {
            if (completedTodos === totalTodos) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        });
    }
};

//Os handlers servem para realizar DOM manipulation.
let handlers = {
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    },

    addTodo: function () {
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },

    changeTodo: function () {
        let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodos(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput = '';
        changeTodoTextInput = '';
        view.displayTodos();
    },

    deleteTodo: function (position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },

    toggleCompleted: function (position) {
        // let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        // todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        todoList.toggleCompleted(position);
        toggleCompletedPositionInput = '';
        view.displayTodos();
    }
};

let view = {
    displayTodos: function () {
        let todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        todoList.todos.forEach(function (todo, position) {

            let todoLi = document.createElement('li');

            todoLi.id = position;
            todoLi.className = 'list-group-item'
            todoLi.appendChild(this.createsToggleButton(todo));
            todoLi.appendChild(this.createsTodoTextSection(todo));
            // todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createsDeleteButton());
            todosUl.appendChild(todoLi);
        }, this);
    },

    createsToggleButton: function (todo) {
        let toggleButton = document.createElement('input');
        toggleButton.type = 'checkbox';

        if (todo.completed === true) {
            toggleButton.checked = true;
        } else {
            toggleButton.checked = false;
        }

        toggleButton.className = 'toggleButton d-inline'
        return toggleButton;
    },

    createsDeleteButton: function () {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.className = 'deleteButton btn btn-outline-danger d-inline';
        return deleteButton;
    },

    createsTodoTextSection: function (todo) {
        let todoTextSection = document.createElement('p');
        let todoTextWithCompletion = '';

        if (todo.completed === true) {
            todoTextWithCompletion = '(x) ' + todo.todoText
        } else {
            todoTextWithCompletion = '( ) ' + todo.todoText
        }

        todoTextSection.textContent = todoTextWithCompletion;
        todoTextSection.className = 'd-inline'
        return todoTextSection;
    },

    setUpEventListeners: function () {
        let todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function (event) {
            let elementClicked = event.target;

            //Checa se o elemento clicado é um botão delete.
            if (elementClicked.className.includes('deleteButton')) {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }

            //Checa se o elemento cliclado é o toggle
            if (elementClicked.className.includes('toggleButton')) {
                handlers.toggleCompleted(parseInt(elementClicked.parentNode.id));
            }
        });
    }
}

/**
 * setUpEventListeners precisa ser chamado para funcionar.
 */
view.setUpEventListeners();