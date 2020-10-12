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

// Vueの条件付きレンダリング...ある条件を満たす時だけレンダリングする
