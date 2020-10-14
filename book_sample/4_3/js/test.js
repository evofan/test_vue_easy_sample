console.log("test4-3 v-else-if");

const app = new Vue({
    el: '#app',
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increment: function () {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    },
    computed: {
        isRankA: function () {
            return this.count >= 6
        },
        isRankB: function () {
            return this.count >= 0
        }
    }
});

Vue.config.devtools = true;

// サンプルのHTML内に式を書く方法→関数呼び出し