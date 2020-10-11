console.log("test1-2");

const app = new Vue({
    el: '#app',
    data() {
        return {
            text: "hello, Vue.js" // Vueの原則として、dataプロパティは関数で宣言する（直接オブジェクトとしても書けるが基本しない）
        };
    }
});

Vue.config.devtools = true;

// ■データバインディング
// データのバインディング＝データバインディング＝データの変更をテンプレート側で自動で判別する

// ■レンダリング
// データを一定の法則でブラウザに出力する事

// ■差分レンダリング
// ページ全体でなく、変更のあった一部分だけを更新する事＝全体を更新するより負荷が軽い

// ■仮想DOM
// リアルDOM(Document Object Model＝HTMLの要素をオブジェクトとして構成したもの)と対応し、
// バインディングに応じて差分を検出し、リアルDOMに反映させる

// ■Chrome Devtoosの使い方
// 既知なので省略

// ■Vueパネル
// VueDevToolsはChromeの拡張機能を入れると使えるようになる。
