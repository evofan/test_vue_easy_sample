console.log("test6-2 色を変化させるスライダー");

const app = new Vue({
    el: '#app',
    data() {
        return {
            range: 10,
            red: 0,
            green: 0,
            blue: 0
        };
    },
    computed: {
        bindStyle() {
            return `width: ${this.range}px; height: ${this.range}px; background: rgb(${this.red}, ${this.green}, ${this.blue});`;
        }
    },

});

Vue.config.devtools = true;

