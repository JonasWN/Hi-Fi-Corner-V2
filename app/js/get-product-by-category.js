document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search)
    const catagoryURL = params.get("category")
    const subCategory = params.get("subCatagory")
    const productTemplate = document.querySelector("#product__template")
    const productList = document.querySelector(".productslist");

    let productCounter = 0
    const shownItems = document.querySelector("#antal")

    if (subCategory) {
        fetch(`https://hifi-corner.herokuapp.com/api/v1/products?category=${subCategory}&minPrice=100&maxPrice=8000`, {
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

    } else {

        fetch(`https://hifi-corner.herokuapp.com/api/v1/products?category=${catagoryURL}&minPrice=1000&maxPrice=4000`, {
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
    }
});