"use strict";

let container = document.querySelector("#container");
let mainImage = document.querySelector("#mainImage");
let subImageContainer = document.querySelector("#subImageContainer");
let productTitle = document.querySelector("#productTitle");
let sku = document.querySelector("#sku");
let price = document.querySelector("#price");
let desc = document.querySelector("#description");
let loading = document.querySelector("#loading");
const API_URL = "https://api.escuelajs.co/api/v1/products/"

const fetchProductDetail = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  if (!productId) return;

  try {
    loading.style.display = "block";
    const res = await fetch(`${API_URL}${productId}`);
    const data = await res.json();
    mainImage.src =
      data.images[0] ||
      "https://miro.medium.com/v2/resize:fit:600/0*jGmQzOLaEobiNklD";
    productTitle.textContent = data.title || "Untitled Product";
    sku.textContent = data.sku || "unknown";
    price.textContent = data.price || "Unknown";
    desc.textContent = data.description || "";
  } catch (error) {
    console.log(error);
  } finally {
    loading.style.display = "none";
  }
};

fetchProductDetail();
