"use strict";

let cardsContainer = document.querySelector("#cards-container");

// const products = [
//   {
//     proName: "Relief Sun Aqua-fresh : Rice + B5 100ml",
//     image:
//       "https://d2c3d01lcpw2ui.cloudfront.net/gl/data/item/1723786814/7JWE7Lg7JWE7ZSE66CI7Ims.jpg",
//     price: 16.2,
//   },
//   {
//     proName: "Revive Eye Serum : Ginseng + Retinal 30ml",
//     image:
//       "https://d2c3d01lcpw2ui.cloudfront.net/gl/data/item/1656383787/7J247IK87JWE7J207YGs66a81743666660887aa85120fafa2.jpg",
//     price: 15.3,
//   },
//   {
//     proName: "Red Bean Refreshing Pore Mask 140ml",
//     image:
//       "https://d2c3d01lcpw2ui.cloudfront.net/gl/data/item/1667369578/pore174303780025883dc3286b80b.jpg",
//     price: 18,
//   },
//   {
//     proName: "Glow Serum : Propolis + Niacinamide 30ml",
//     image:
//       "https://d2c3d01lcpw2ui.cloudfront.net/gl/data/item/1603681412/6rSR7LGE7IS4658.jpg",
//     price: 15.3,
//   },
//   {
//     proName: "Ginseng Essence Water 150ml",
//     image:
//       "https://d2c3d01lcpw2ui.cloudfront.net/gl/data/item/1603684458/JSMS01TGfreegift174279861335191066c0e3383.jpg",
//     price: 16.2,
//   },
//   {
//     proName: "Dynasty Cream 50ml",
//     image:
//       "https://d2c3d01lcpw2ui.cloudfront.net/gl/data/item/1610336609/bojcream.jpg",
//     price: 21.6,
//   },
//   {
//     proName: "Calming Serum : Green tea + Panthenol 30ml",
//     image:
//       "https://d2c3d01lcpw2ui.cloudfront.net/gl/data/item/1661917795/64W57LCo7IS4658.jpg",
//     price: 15.3,
//   },
//   {
//     proName: "Apricot Blossom Peeling Gel 100ml",
//     image:
//       "https://d2c3d01lcpw2ui.cloudfront.net/gl/data/item/1620633966/6r2D64u07ZWE66eB7KCk.jpg",
//     price: 11.7,
//   },
// ];

fetch("./src/data/product.json")
  .then((response) => response.json())
  .then((data) => {
    cardsContainer.innerHTML = data.products
      .map(
        (product) => `
   <div
          class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="p-8 rounded-t-lg aspect-square object-cover"
              src=${product.image}
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5
                class="tracking-tigh text-sm text-center text-gray-900 dark:text-white"
              >
               ${product.proName}
              </h5>
            </a>
            <div class="flex items-center justify-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
              </div>
              <span
                class="bg-[#e6d9fc] text-[#4a2689] text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3"
                >5.0</span
              >
            </div>
            <div class="flex justify-center items-center">
              <span class="text-xl font-bold text-gray-900 dark:text-white"
                >$${product.price}</span
              >
              <!-- <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Add to cart</a
              > -->
            </div>
          </div>
        </div>
`
      )
      .join("");
  })
  .catch((error) => console.log(error));

let names = document.querySelector("#names");

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      // names.innerHTML = data
      //   .map(
      //     (user) => `<p class="text-3xl">${user.name}, email: ${user.email}</p>`
      //   )
      //   .join("");
      console.log(data);
    })
    .catch((error) => console.log(error));
}

fetchUsers();

function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.products);
    })
    .catch((error) => console.log(error));
}

fetchProducts();

let newIn = document.querySelector("#new-in");
let total = document.querySelector("#total");

async function fetchProductsDisplay() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    total.innerHTML = data.limit;
    newIn.innerHTML = data.products.slice(1, 14).map(product => `<div
          class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="p-8 rounded-t-lg aspect-square object-cover"
              src=${product.images[0]}
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5
                class="tracking-tigh text-sm text-center text-gray-900 dark:text-white"
              >
               ${product?.title}
              </h5>
            </a>
            <div class="flex items-center justify-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
              </div>
              <span
                class="bg-[#e6d9fc] text-[#4a2689] text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3"
                >5.0</span
              >
            </div>
            <div class="flex justify-center items-center">
              <span class="text-xl font-bold text-gray-900 dark:text-white"
                >$${product.price}</span
              >
           
            </div>
          </div>
        </div>`).join("")
  } catch (error) {
    console.log(error);
  }
}

fetchProductsDisplay();
