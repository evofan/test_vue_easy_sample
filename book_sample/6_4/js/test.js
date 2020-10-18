console.log("test6-4 ハンバーガーボタン");

const app = new Vue({
    el: '#app',
    data() {
        return {
            isActive: false
        };
    },
    methods: {
        toggleButton() {
            this.isActive = !this.isActive;
        }
    }
});

Vue.config.devtools = true;




