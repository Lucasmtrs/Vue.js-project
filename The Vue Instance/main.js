var app = new Vue({
    el: '#app',
    data: {
        product: 'socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        linkSocks: './socks.html',
        linkIndex: './index.html',
        inventory: 10,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        sizes: ["product heigth 18cm", "product width 8cm"],
       
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green-onWhite.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue-onWhite.jpg"
            }
        ],

        cart: 0,

    },

    methods: {
        // addToCart: function () {
        //     this.cart += 1
        // },

        // updateProduct: function (variantImage) {
        //     this.image = variantImage
        // }

        //Para usar uma forma reduzida das funções (ES6 shorthand):

        addToCart() {
            this.cart += 1
        },

        decrementCart() {
            this.cart -= 1
        },

        updateProduct(variantImage) {
            this.image = variantImage
        }

    },


})