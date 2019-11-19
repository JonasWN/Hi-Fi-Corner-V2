document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search)
    const catagoryURL = params.get("category")
    const subCategory = params.get("subCatagory")
    const productTemplate = document.querySelector("#product__template")
    const productList = document.querySelector(".productslist");

    if (subCategory) {
        fetch(`https://hifi-corner.herokuapp.com/api/v1/products?category=${subCategory}`, {
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
                });
            })

    } else {

        fetch(`https://hifi-corner.herokuapp.com/api/v1/products?category=${catagoryURL}`, {
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
                });
            })
    }
});