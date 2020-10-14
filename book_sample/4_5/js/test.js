console.log("test4-5 バリデーション");

const app = new Vue({
    el: '#app',
    data() {
        return {
            name: "name",
            email: "email",
            tel: "00",
            text: "#ffffff"
        };
    },
    // 算出プロパティを設定
    computed: {
        isInvalidName() {
            return this.name.length < 4;
        },
        isInvalidEmail() {
            // aaa@bbb.cc以外の形式の場合falseを返す
            const regex = new RegExp(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)
            return !regex.test(this.email);
        },
        isInvalidTel() {
            const tel = this.tel;
            const isErr = tel.length < 8 || isNaN(Number(tel)); // 8文字未満又は数値でない場合はfalseを返す
            return isErr;
        }
    },
    methods: {
        setText(e) {
            this.text = e.target.value;
        }
    },
});

Vue.config.devtools = true;

// ■バリデーション＝フォームの入力内容に誤りがあった場合にエラーメッセージを表示する処理