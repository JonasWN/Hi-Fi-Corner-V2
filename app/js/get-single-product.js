document.addEventListener("DOMContentLoaded", () => {

    const catagoryList = document.querySelector(".product-image-container");
    let url = new URLSearchParams(document.location.search);
    const productSku = (url.get("sku"));

    const namePrice = document.querySelector(".name-price");
    const asidetitle = document.querySelector(".aside-title");
    const name = document.querySelector(".right-article-section__h1");

    fetch(`https://hifi-corner.herokuapp.com/api/v1/products/${productSku}`, {
            "method": "GET"
        })
        .then(answer => answer.json())
        .then(response => { // get all the array objects
            console.log(response)

            catagoryList.innerHTML = `
            <img src=${response.images} alt="image of product">
            `
            namePrice.innerHTML = ` <p>See other ${response.description} products</p>
            <p> ${response.price}</p>`

            asidetitle.innerHTML = ` <span class="gold">Home</span> /<span class="gold"> ${response.category} Amplifiers</span> /${response.model}`
            name.innerHTML = response.model
        }).catch(error => {
            console.log("Something Went Wrong...")
            console.error(error)
        })
});