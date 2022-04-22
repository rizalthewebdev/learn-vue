import { createApp } from "vue";

createApp({
   data() {
      return {
         product: "Socks",
         description:
            "A sock is a piece of clothing worn on the feet and often covering the ankle or some part of the calf. ",
         image: "./assets/images/socks_green.jpg",
         url: "https://en.wikipedia.org/wiki/Sock",
         inventory: 100,
         details: ["50% cotton", "30% wool", "20% polyester"],
         sizes: ["S", "M", "L", "XL"],
         cart: 0,
         variants: [
            {
               id: 1,
               color: "green",
               image: "./assets/images/socks_green.jpg",
            },
            {
               id: 2,
               color: "blue",
               image: "./assets/images/socks_blue.jpg",
            },
         ],
      };
   },
   methods: {
      addToCart() {
         this.cart += 1;
      },
      updateImage(img){
         this.image = img
      },
      removeFromCart() {
         this.cart -= 1
      }
   },
}).mount("#app");
