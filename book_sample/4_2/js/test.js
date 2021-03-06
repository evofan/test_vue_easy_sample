﻿console.log("test4-2");

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
