document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search)
  const catagoryURL = params.get("category")
  const tag = params.get("tag")

  const productTemplate = document.querySelector("#product__template")
  const productList = document.querySelector(".productslist");

  // const getAllProducts = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://hifi-corner.herokuapp.com/api/v1/products"
  //     );
  //     const data = await response.json();
  //     data.forEach(product => {
  //       console.log(product)
  //     });
  //   } catch (error) {}
  // };

  // getAllProducts();
  if (tag === "all")
    fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
      "method": "GET"
    })
    .then(answer => answer.json())
    .then(response => {
      console.log(response)
      response.forEach(product => {
        let productClone = productTemplate.content.cloneNode(true);
        productClone.querySelector(".productName").innerText = product.model
        productClone.querySelector("img").src = product.images
        productClone.querySelector(".productPriceTag").innerText = product.price
        productClone.querySelector("a").href = `/product-template?sku=${product.sku}`
        productList.appendChild(productClone);
      });

    });





  // dropdown shop list for subcatagorys
  if (catagoryURL === "Amplifiers") {
    const catagoryDropdownItems = document.querySelectorAll(".dropDown-item");
    catagoryDropdownItems.forEach(element => {
      element.classList.toggle("dropDown-item-toggle");
    });
  }
});