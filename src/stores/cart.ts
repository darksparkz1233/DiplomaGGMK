// import { randomUUID } from "crypto";
// import { defineStore } from "pinia";
// import { json } from "stream/consumers";

// interface Cart {
//     cid: String
//     products: Array<{id: number, qty: number}>
// }
// interface State {
//     cart: Cart | []
// }

// const useCartStore = defineStore('cart', {
//     state: () => ({ cart: [], } as State),
//     actions: {
//         loadCartInstance() {
//             const cartString = localStorage.getItem('cart')
//             if(!cartString) this.cart = []
//             else this.cart = JSON.parse(cartString)
//         },
//         addToCart(product: {id: number, qty: number}) {
//             const cartString = localStorage.getItem('cart')
//             if(!cartString) this.cart = {
//                 cid: uuid4(),
//                 products: [
//                     product
//                 ]
//             }
//         }
//     }
// })