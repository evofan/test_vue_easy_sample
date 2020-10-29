console.log("test8-2 ビューワーアプリ");

// 子：サムネールコンポーネントの設定
const imageThumbnailComponent = Vue.component('image-thumbnail', {
    props: {
        path: {
            type: String,
            default: ''
        }
    },
    template: `
        <div 
            class="img-box" 
            :style="{ backgroundImage: 'url(' +path+ ')' }" 
            @click="$emit('clickimage')"
        ></div>`
    // ★clickImageのみエラー、click_image等ではoks
});

// 子：モーダルコンポーネントの設定
const modal = Vue.component('modal', {
    props: {
        isShown: {
            type: Boolean,
            default: false
        },
        imagePath: {
            type: String,
            default: ''
        }
    },
    template: `
        <div
            v-if="isShown" 
            class="modal" 
            @click="$emit('close')"
        >
        <img
            class="modal-img" 
            :src="imagePath" 
            alt="selectedImage" 
        />
        `
});

const app = new Vue({
    el: '#app',

    components: {
        'image-thumbnail': imageThumbnailComponent, // サムネイル作成コンポーネントを登録
        modal
    },
    data() {
        return {

            // modal
            isShown: false,
            selectedImage: '',

            // image-thumbnail
            images: [
                {
                    path: "images/img1.jpg"
                },
                {
                    path: "images/img2.jpg"
                },
                {
                    path: "images/img3.jpg"
                },
                {
                    path: "images/img4.jpg"
                },
                {
                    path: "images/img5.jpg"
                },
                {
                    path: "images/img6.jpg"
                },
                {
                    path: "images/img7.jpg"
                },
                {
                    path: "images/img8.jpg"
                },
                {
                    path: "images/img9.jpg"
                }
            ]
        }
    },
    methods: {
        onSelectImage(path) {
            console.log("onSelectImage");
            this.setImage(path);
            this.openModal();
        },
        openModal() {
            console.log("openModal");
            this.isShown = true;
        },
        closeModal() {
            console.log("closeModal");
            this.isShown = false;
        },
        setImage(path) {
            console.log("setImage");
            this.selectedImage = path;
        }
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


/*
<transition>アニメーションを適用したい要素</transition>

アニメーションの動きはcssで指定
■Enter
v-enter ... enterの開始時に適用
v-enter-to ... enterの終了時に適用
v-enter-active ... enterのフェーズ中に適用
■Leave
v-leave ... leaveの開始時に適用
v-leave-to ... leaveの終了時に適用
v-leave-active ... leaveのフェーズ中に適用

例：v-でなくfade-になってるが任意の指定を可能なので
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

// ※SFCについての説明
// htmlとjsとcssを1つのファイルにする（.vueの拡張子）
// webpackを使うか、Vue CLIで作成する


*/