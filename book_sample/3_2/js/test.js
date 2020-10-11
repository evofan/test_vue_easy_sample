console.log("test3-2");

const app = new Vue({
    el: '#app',
    data() {
        return {
            count: 0 // ★State ★Actionによって状態が変更される
        };
    },
    methods: {
        increment: function () { // ★Action
            this.count++;
        },
        decrement() { // ★Action
            this.count--;
        }
    }
});

Vue.config.devtools = true;

// ★View ... htmlの表示部分（app内の要素、ボタンとカウント表示）★Stateによって病が内容が決まる
