/* eslint-disable prettier/prettier */

<template>
  <div class="">
    <div class="hidden md:flex">
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 91.96428571428572,241.03571428571428 183.92857142857144,282.07142857142856 314,262 C 444.07142857142856,241.92857142857142 612.25,160.75 741,162 C 869.75,163.25 959.0714285714287,246.92857142857144 1069,267 C 1178.9285714285713,287.07142857142856 1309.4642857142858,243.53571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#E94799"
          class="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    </div>

    <div
      class="justify-center w-3/4 p-6 mx-auto bg-white shadow-lg  md:grid md:grid-cols-5 md:gap-2"
      v-for="(item, index) in items"
      :key="item.id"
    >
      <P class="hidden px-10 md:flex"> </P>
      <p class="hidden font-bold text-pink-500 md:flex justify-self-center">
        Product
      </p>
      <p class="hidden font-bold text-pink-500 md:flex justify-self-center">
        Quantity
      </p>
      <p class="hidden font-bold text-pink-500 md:flex justify-self-center">
        Price
      </p>
      <p class="hidden font-bold text-pink-500 md:flex justify-self-center"></p>

      <div class="self-center w-1/2 mx-auto justify-self-center">
        <img v-bind:src="item.img" alt="" />
      </div>
      <p class="self-center text-center justify-self-center">{{ item.name }}</p>
      <p class="self-center text-center align-middle justify-self-center">
        {{ item.qty }}
      </p>
      <p class="self-center text-center justify-self-center">
        {{ item.price }}
      </p>
      <div class="self-center justify-self-end">
        <i
          @click="remove(index)"
          class="text-xl text-pink-500 trash far fa-trash-alt md:text-3xl"
        ></i>
      </div>
    </div>

    <div class="justify-center mx-auto my-10">
      <p
        class="w-1/3 p-2 mx-auto text-center text-white bg-pink-500 rounded-lg  md:w-1/12"
      >
        Checkout
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  data: () => ({
    newItem: "",
    items: [
      {
        id: 1,
        img: "https://tradelinestores.s3.amazonaws.com/media/product_images/f183313a-9cf3-468f-8a74-ab4825835913.jpg",
        name: "iPhone 12 Pro Max, iPhone 12 Pro Max - Graphite, 128 GB",
        qty: 1,
        price: 26000,
      },
      {
        id: 2,
        img: "https://tradelinestores.s3.amazonaws.com/media/product_images/f183313a-9cf3-468f-8a74-ab4825835913.jpg",
        name: "iPhone 11 Pro Max, iPhone 12 Pro Max - Graphite, 128 GB",
        qty: 1,
        price: 23000,
      },
    ],
  }),
  methods: {
    remove(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>
