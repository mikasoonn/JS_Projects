fetch('https://fakestoreapi.com/products')
.then((response) => response.json())
.then((products) => {
    console.log("Products which are under 50$:\n");
    products.filter((product) => product.price < 50).forEach((product) => console.log(product.title))

   const maxPrice = products.reduce((maximum,product) => {
        if(product.price > maximum){
            return product.price;
        }else{
            return maximum;
        }
    },0)
    console.log("\n");
    console.log("The maximum price is:");
    console.log(maxPrice);
    console.log("\n");
    console.log("The most expensive product:");
    console.log(products.find((product) => product.price === maxPrice));
    console.log("\n");
    console.log("Only products from the electronics category:");
    console.log(products.filter((product) => product.category === "electronics"));

    const sum = products.reduce((summary,product) => {
        return summary += product.price;
    },0)
    const qty = products.reduce((count, product) => count + 1,0);
    console.log(`The average price is: ${(sum/qty).toFixed(2)}`);

});