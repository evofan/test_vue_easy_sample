console.log("test4-4 双方法バインディング");

const app = new Vue({
    el: '#app',
    data() {
        return {
            name: "name"
        };
    }
});

Vue.config.devtools = true;

// v-modelを使う事で双方向バインディングが実現出来る
// （単方向バインディング→JS側のデータをHTML内のテンプレートに反映）