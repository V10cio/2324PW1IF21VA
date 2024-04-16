fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data =>  {
    console.log(data);
    console.log(data.total);
    console.log(data.products);

    document.getElementById("Total").innerHTML = data.total;
    
    const productList = data.products;

    for (const product of productList) {
        const priceAfterDiscount = product.price * (1 - product.discountPercentage / 100);
        const formattedPrice = priceAfterDiscount.toFixed(2);
        const stockStatus = product.stock > 0 ? "In Stock" : "Out of Stock";

        list.innerHTML += `<div class = "col-lg-6">
            <div class = "row"
                <img src="${product.thumbnail}" class="rounded d-block w-100">
                </div>
                <div class = "col-lg-6 p-2" >
                    <h2>${product.title}</h2>
                    <br />Price: $${formattedPrice}
                    <br />Discount: ${product.discountPercentage}
                    <br />Stock: ${product.stock}
                </div>        
            </div>           
        </div>`;
    }
})
.catch(error => console.error('Error fetching data:', error));