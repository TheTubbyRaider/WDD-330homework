import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

// FIX: get the correct data source
const dataSource = new ProductData(); 

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}

// FIX: take product ID instead of event
async function addToCartHandler(productId) {

  // FIX: get product by ID
  const product = await dataSource.findProductById(productId);
  
  addProductToCart(product);

}

// add listener to Add to Cart button 
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);