console.log("test5-2 配列でなくオブジェクトのリストレンダリング");

const app = new Vue({
    el: '#app',
    data() {
        return {
            obj: {
                name: "Taro",
                age: 30,
                like: "sushi"
            }
        };
    }
});

Vue.config.devtools = true;
