let todoApp = {

    todos: [], // store task in this array, to use todos array inside below functions use this.todos

    count: 1, // you can use it to get unique id for each task, feel free to use your own unique identifier implementation. You can simply use this.count value as id for any task and increment it and use its incremented value for some other task

    addTask(task){

	// use this.todos to access above declared array inside functions

	// this method adds task
        let temp = [];
        temp.push(this.count++);
        temp.push(task);
        temp.push(false);
        this.todos.push(temp);
        console.log(`Task${this.count - 1} is added`);
    },

    deleteTask(id) {

	//this method deletes task
    if(this.todos.length == 0) {
        console.log('No tasks available. Please add task first!');
        return 0;
    }else {
        for(let i = 0; i < this.todos.length; i++) {
            if(this.todos[i][0] == id) this.todos.splice(i, 1);
            console.log(`Task${this.count - 1} deleted`)
        }
    }

    },

    updateTaskText(id, text) {

	// this method updates task’s text
    if(this.todos.length == 0) {
        console.log('No tasks available. Please add task first!');
        return 0;
    }else {
        for(let i = 0; i < this.todos.length; i++) {
            if(this.todos[i][0] == id) {
                this.todos[i][1] = text;
                console.log(`Task${this.todos[i][0]} updated`);
            }
            this.getAllTasks();
        }
    
    }

    },

    updateTaskAsDone(id) {

	//this method updates task as done
    if(this.todos.length == 0) {
        console.log('No tasks available. Please add task first!');
        return 0;
    } else {
        for(let i = 0; i < this.todos.length; i++) {
            if(this.todos[i][0] == id) {
                this.todos[i][2] = true;
                console.log(`Task${this.todos[i][0]}  marked as done!`);
            }
        }
    }

    },

    getAllTasks() {

	//this method prints all tasks
    if(this.todos.length == 0) {
        console.log('No task added');
        return 0;
    } else {
            for(let i = 0; i < this.todos.length; i++) {
                console.log(`Id : ${this.todos[i][0]} text : ${this.todos[i][1]} isDone : ${this.todos[i][2]}`);
            }
    }

    }

}

todoApp.getAllTasks();
    // No tasks added!

todoApp.deleteTask(1);
    // No tasks available. Please add task first!

todoApp.updateTaskAsDone(1);
    // No tasks available. Please add task first!

todoApp.updateTaskText(1, "text 1");
    // No tasks available. Please add task first!

todoApp.addTask("This is task 1");
    // Task1 added

todoApp.getAllTasks();
    // Id: 1 text: This is task 1 isDone: false

todoApp.updateTaskAsDone(1)
    // Task1  marked as done!

todoApp.getAllTasks();
    // Id: 1 text: This is task 1 isDone: true

todoApp.updateTaskText(1, "task 1 text updated");
    // Task1 updated
    // Id: 1 text: task 1 text updated isDone: true

todoApp.getAllTasks();
    // Id: 1 text: task 1 text updated isDone: true

todoApp.deleteTask(1);
    // Task1 deleted

todoApp.getAllTasks();
    // No tasks added!