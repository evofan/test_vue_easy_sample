console.log("test5-1 リストレンダリング");

const app = new Vue({
    el: '#app',
    data() {
        return {
            fruits: ["りんご", "ぶどう", "なし", "イチゴ"]
        };
    }
});

Vue.config.devtools = true;

// ■リストレンダリング＝「繰り返し（v-for）処理」によるレンダリング、配列に対して行う
// ■配列要素＝配列内の個々のデータ
// 主に外部データの処理に使用したり、ナビゲーションメニューの生成に使用する
//
// <p v-for="(var1 => element , var2 => index) in array"></p>
// val2は省略可、val1, val2共にv-for内のみで有効なローカル変数