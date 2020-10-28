console.log("test8-1 ビューワーアプリ");

// コンポーネントの書き方
const anyComponent = Vue.component("any-component", { // ★コンポーネントはケバブベースで命名するのが普通
    data() {
        return {
            title: "Hello, Component"
        }
    },
    template: '<div class="title-label">{{ title }}</div>' // ★Vueインスタンスの時は無かったので注意
});

// test.js:7 Uncaught ReferenceError: Cannot access 'anyComponent' before initialization
// なのでコンポーネントより後に書く
const app = new Vue({
    el: '#app',

    component: {
        'any-component': anyComponent
    }
});

Vue.config.devtools = true;

// ■コンポーネント...ある特定の機能を保有した再利用可能な「部品」
// ■コンポーネント指向開発..,コンポーネントを組み合わせてWebアプリケーションを構築する方法

// コンポーネントは親コンポーネントと子コンポーネントの関係を持つ場合もある

// 親ーーーーー props（親から子に渡されるデータ） ーーーーー→子
// 子ーーーーー emit（イベントの受け渡しやデータの伝達）ーーーーー→親

// 画像ビューワーのコンポーネント構成
// ・ルートコンポーネント（全てのコンポーネントを集約する部分）
// 　　L ・サムネールコンポーネント
// 　　L ・モーダルコンポーネント

// propsの書き方 ... 親コンポーネントが、子コンポーネントにデータを渡す
/*
props : {
    プロパティ名: {
        ルールの指定
    }
}
*/

/*
props: {
    name: {
        type: String, // Strign以外の型の場合警告が出る
        default: "Taro"
    }
}
*/

// emitの書き方 ... 子コンポーネントが親コンポーネントにイベントを通知する
/*
$emit(イベント名, [親コンポーネントに渡すデータ（あれば）]);
*/
