console.log("test6-1 スタイルバインディング");

const app = new Vue({
    el: '#app',

    // （1）文字列指定でのスタイルバインディング
    data() {
        return {
            width: 100,
            height: 100,
            color: "#333"
        };
    },
    computed: {
        bindStyle() {
            return `width: ${this.width}px; height: ${thid.height}px; color: ${this.color}; `;
        }
    },

    // （2）オブジェクト指向でのスタイルバインディング
    // ＝直接v-bind:styleで指定、その場合★スタイルの指定はキャメルケースで指定する
    /*
    data() {
        return {
            width: 100,
            height: 100,
            bgColor: "#fcfcfa"
        };
    },
    ※HTML内で
    <div : style = "{width: width +'px', height: hieght + 'px', backgroundColor: bgColor }"></div>
    */
});

Vue.config.devtools = true;

// ■スタイルバインディング=スタイルを動的に切り替える
// v-bind:style="何らかのスタイル"　→　:style="何らかのスタイル"
