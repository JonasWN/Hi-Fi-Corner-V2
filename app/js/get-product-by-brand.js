document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const brandUrl = params.get("brand");
    const productTemplate = document.querySelector("#product__template")
    const productList = document.querySelector(".productslist");

    let productCounter = 0
    const shownItems = document.querySelector("#antal")


    fetch(`https://hifi-corner.herokuapp.com/api/v1/products?make=${brandUrl}&minPrice=100&maxPrice=8000`, {
            "method": "GET"
        })
        .then(answer => answer.json())
        .then(response => {
            response.forEach(product => {
                let productClone = productTemplate.content.cloneNode(true);
                productClone.querySelector(".productName").innerText = product.model
                productClone.querySelector("img").src = product.images
                productClone.querySelector(".productPriceTag").innerText = product.price + " $ "
                productClone.querySelector("a").href = `/product-template?sku=${product.sku}`
                productList.appendChild(productClone);
                productCounter++
                shownItems.innerText = productCounter
            });
        })
        .catch(error => {
            console.log("Something Went Wrong...")
            console.error(error)
        });

});