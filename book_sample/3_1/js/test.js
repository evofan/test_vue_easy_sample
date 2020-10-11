console.log("test3-1");

const app = new Vue({
    el: '#app',
    data() {
        return {
            text: "hello, Vue.js" // Vueの原則として、dataプロパティは関数で宣言する（直接オブジェクトとしても書けるが基本しない）
        };
    },
    methods: { // メソッドプロパティを定義、この中にメソッドを書く
        changeHoge: function () {
            // 処理
        },
        changeHoge2() { // 省略形

        },
        handleClick() {
            this.text = "ボタンが押された！";
        }
    }
});

Vue.config.devtools = true;

// ■イベントハンドリング
// ボタンを押された時等のイベント処理
// 代表例
// ・onblur...フォーカスが外れた時
// ・onfocus...フォーカスが当たった時
// ・onsubmit...フォームを送信する時
// ・onchange...要素のデータに変更があった時
// ・onselect...セレクトボックス等で、値が変更された時
// ・onload...要素が読み込まれた時
// ・onclick...要素をクリックした時
// ・onkeyUp...押していたキーを離した時
// ・onkeyDown...キーを押した時（押下）
// ・onkeyPress...キーを押している時

// JSとVuwのイベントハンドリング比較
// onclick=method().....v-on:cliack=....@click=（省略形）
// onblur=method().....v-on:blur=.....@blur=
// onfocus=method().....v-on:focus=.....@focus=
// onsubmit=methd().....v-on:submit.....@submit

// メソッド＝オブジェクトに紐づけられた関数
// 例：
/*
const data = {
    name: "Taro",
    age: 18,
    addAge: function () { // ★メソッド、Vue.jsで何らかの処理を書くにはメソッドにする
        this.age = increment(this.age, 10);
    }
}

function increment(age, num) { // ★関数
    return age + num;
}
*/


