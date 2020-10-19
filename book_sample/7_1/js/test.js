console.log("test7-1 TODOアプリ");

const app = new Vue({
    el: '#app',
    data() {
        return {
            todos: [],
            text: ""
        };
    },
    methods: {
        inputText(e) {
            this.text = e.target.value;
        },
        addTodo() {
            if (!this.text) {
                return
            }
            let text = this.text;
            let id = Math.ceil(Math.random() * 1000);
            let todo = {
                id, text, isDone: false
            };
            this.todos.push(todo);
            this.resetText();
        },
        resetText() {
            console.log("resetText()");
            this.text = "";
        },
        deleteTodo(id) {
            console.log("deleteTodo()", id);
            let index = this.getIndexBy(id);
            this.todos.splice(index, 1);
        },
        toggleIsDone(id) {
            console.log("toggleIsDone()", id);
            let index = this.getIndexBy(id);
            this.todos[index].isDone = !this.todos[index].isDone;
        },
        getIndexBy(id) {
            console.log("getIndexBy()", id);
            let filteredTodo = this.todos.filter(ele => ele.id === id)[0];
            let index = this.todos.indexOf(filteredTodo); // 配列の何番目にあるかを返す
            return index;
        }
    },
    computed: {
        /*
        NG
        doneTodo() {
            console.log("doneTodo()");
            this.todos.filter((ele) => { return ele.isDone === true }); // ★return、()、{}を省略しない場合、※効かない
        },
        incompleteTodo() {
            console.log("inCompleteTodo()");
            this.todos.filter((ele) => { return ele.isDone === false });
        }
        */

        //ok
        doneTodo() {
            let res = this.todos.filter(ele => ele.isDone === true);
            console.log(res);
            return res;
        },
        incompleteTodo() {
            return this.todos.filter(ele => ele.isDone === false);
        }

    },
});

Vue.config.devtools = true;
