console.log("test5-4 ナビゲーションメニューのリストレンダリング");

const app = new Vue({
    el: '#app',
    data() {
        return {
            menus: [
                { id: 1, label: "TOP", path: "index.html" },
                { id: 2, label: "ABOUT", path: "about.html" },
                { id: 3, label: "SCHEDULE", path: "schedule.html" },
                { id: 4, label: "CONTACT", path: "contact.html" }
            ]
        };
    }
});

Vue.config.devtools = true;
