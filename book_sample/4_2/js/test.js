console.log("test4-2");

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
        isPass: function () {
            return this.count >= 6
        }
    }
});

Vue.config.devtools = true;

// 算出プロパティ
// v-ifのような条件式をHTML内に記述するのは好ましくない
// そこで算出プロパティを使ってJavaScript側で計算させる

// ★算出プロパティの代わりにmethodsでも同じ事が出来るが、computedの方は結果をキャッシュする（条件が変わってなければ再計算しない）ので速い

// ★v-ifの代わりにv-showでも同じ事が出来るが、↓の違いがあるので注意
// ・v-if, v-elseのような分岐は行えない
// ・要素の表示をCSS側(display:none)で行う
