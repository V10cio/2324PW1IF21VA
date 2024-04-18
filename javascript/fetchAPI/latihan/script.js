fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    console.log(data)
    console.log(data.products)

    document.getElementById("title").innerHTML = data.total

    for (const [i, d] of data.products.entries()) {
        document.getElementById("Product"). innerHTML += `
        <div class ="col-lg-6">
            <div class="row">
                <div class="col-lg-6 p-2">
                    <img src=${d.thumbnail} class="rounded d-block w-100"></img>
                </div>
                <div class="col-lg-6 p-2">
                    <h2> ${d.title} </h1>
                    <p> Description : ${d.description} </P>
                    <p> Price : ${d.price} </P>
                    <p> Disc : ${d.discountPercentage} </P>
                    <p> Stock : ${d.stock} </P>
                </div>
            </div>
        </div>`
    }
})