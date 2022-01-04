var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'socks',
        selectedVariant: 0,
        linkSocks: './socks.html',
        linkIndex: './index.html',
        inventory: 10,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        sizes: ["product heigth 18cm", "product width 8cm"],
       
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
                variantQuantity: 10,
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0,
            }
        ],

        cart: 0,
        onSale: true,

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

        // updateProduct(variantImage) {
        //     this.image = variantImage
        // }
        // O código foi refatorado, adicionei um index à div do mouseover, aqui eum chamo index, como abaixo:
        
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        },

    },

    computed: {
        title() {
            return this.brand + ' ' + this.product
        },

        image() {
            return this.variants[this.selectedVariant].variantImage
        },

        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },

        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' ' + 'are on sale!'
            }
            return this.brand + ' ' + this.product + ' ' + 'are not on sale'
        }

    }


})