console.log("test6-3 クラスバインディング");

const app = new Vue({
    el: '#app',
    /*
    data() {
        return {
            isActive: true // trueの場合、HTML側で設定したclassが付与される
        };
    }
    */

    data() {
        return {
            classObj: {
                error: false,
                'is-active': false // errorとisActiveがtrueになると、"error is-active"というクラスが適用される
                // ※複数のクラスをまとめて指定できる
            }
        };
    }
});

Vue.config.devtools = true;

// ■クラスバインディング＝class属性にデータをバインディングする
// ・スタイル情報がインラインでなくCSS上に書けるので可読性が上がる
// ・ハンバーガーボタンやモーダルのようなUIを実現出来る
// <div v-bind:class="{'is-active': isActive}"></div>
// <div :class="{'is-active': isActive}"></div>※短縮形