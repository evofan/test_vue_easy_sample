console.log("test5-3 複数のオブジェクトを格納した配列からのリストレンダリング");

const app = new Vue({
    el: '#app',
    data() {
        return {
            items: [
                { id: 1, label: "子" },
                { id: 2, label: "丑" },
                { id: 3, label: "寅" },
            ]
        };
    }
});

Vue.config.devtools = true;

// オブジェクトを配列内の要素に持った配列例
// [ {object}, {object}, {object} ]
// 実際の例
/*
items: [
    { id: 1, label: "子" },
    { id: 2, label: "丑" },
    { id: 3, label: "寅" },
]
*/