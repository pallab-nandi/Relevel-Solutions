let todoApp = {

    todos: [], // store task in this array, to use todos array inside below functions use this.todos

    count: 1, // you can use it to get unique id for each task, feel free to use your own unique identifier implementation. You can simply use this.count value as id for any task and increment it and use its incremented value for some other task

    TodoTask(id, task, isDone) {
        this.id = id;
        this.task = task;
        this.isDone = isDone;
    },

    addTask(task){

	// use this.todos to access above declared array inside functions

	// this method adds task

    let taskObj = new this.TodoTask(this.count, task, false);
    
    this.todos.push(taskObj);
    console.log(`Task${this.count} added`);

    this.count++;

    },


    deleteTask(id) {

	//this method deletes task
    if(this.todos.length == 0) console.log('No tasks available. Please add task first!');
    else {
        let i;
        const n = this.todos.length;
        for(i = 0; i < n; i++) {
            if(this.todos[i].id == id) {
                console.log(`Task${this.todos[i].id} deleted`);
                this.todos.splice(i, 1);
                break;
            }
        }
        if(i == n) console.log(`There is no such task id available`);
    }

    },


    updateTaskText(id, text) {

	// this method updates task’s text
    if(this.todos.length == 0) console.log('No tasks available. Please add task first!');
    else {
        let i;
        const n = this.todos.length;
        for(i = 0; i < n; i++) {
            if(this.todos[i].id == id) {
                this.todos[i].task = text;
                console.log(`Task${this.todos[i].id} updated`);
                this.getAllTasks();
                break;
            }
        }
        if(i == n) console.log(`There is no such task id available`);
    }

    },


    updateTaskAsDone(id) {

	//this method updates task as done
    if(this.todos.length == 0) console.log('No tasks available. Please add task first!');
    else {
        let i;
        const n = this.todos.length;
        for(i = 0; i < n; i++) {
            if(this.todos[i].id == id) {
                this.todos[i].isDone = true;
                console.log(`Task${this.todos[i].id}  marked as done!`);
                break;
            }
        }
        if(i == n) console.log(`There is no such task id available`);
    }

    },


    getAllTasks() {

	//this method prints all tasks
    if(this.todos.length == 0) console.log(`No tasks added!`)
    else {
        for(let i = 0; i < this.todos.length; i++) {
            console.log(`Id : ${this.todos[i].id} text : ${this.todos[i].task} isDone : ${this.todos[i].isDone}`);
        }
    }

    }

}


todoApp.getAllTasks();
    //No tasks added!

todoApp.deleteTask(1);
    //No tasks available. Please add task first!

todoApp.updateTaskAsDone(1);
    //No tasks available. Please add task first!

todoApp.updateTaskText(1, 'text 1');
    //No tasks available. Please add task first!

todoApp.addTask('This is task1');
    //Task1 added

todoApp.getAllTasks();
    //Id: 1 text: This is task 1 isDone: false

todoApp.updateTaskAsDone(1);
    //Task1  marked as done!

todoApp.getAllTasks();
    //Id: 1 text: This is task 1 isDone: true

todoApp.updateTaskText(1, 'tast 1 text updated');
    //Task1 updated
    //Id: 1 text: task 1 text updated isDone: true

todoApp.getAllTasks();
    //Id: 1 text: task 1 text updated isDone: true

todoApp.deleteTask(1);
    //Task1 deleted

todoApp.getAllTasks();
    //No tasks added!