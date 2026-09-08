
const users = [];
class Shop{
    #id;
    #name;
    #address;
    #contactInfo;
    products = [];
    constructor(name, id, address, contactInfo){
        this.#id = id;
        this.#address = address;
        this.#name = name; 
        this.#contactInfo = contactInfo;
    }
    addProduct(product){
        this.products.push(product);
    }
    getAllProducts(){
        console.log(`Here are all the products of ${this.#name}'s shop:`);
        let i = 0;
        while(this.products[i] != undefined){
            console.log(this.products[i].name);
            console.log(this.products[i].price);
            console.log(this.products[i].qty);

            i++;
    }
}
}
class Product {
    #name;
    #id;
    #price;
    #qty;
    constructor(id, name, price,qty){
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#qty = qty;
    }
    set name(name){
        this.#name = name;
    }
    get name(){
        return this.#name;
    }
    set price(price){
        this.#price = price;
    }
    get price(){
        return this.#price;
    }
    set id(id){
        this.#id = id;
    }
    get id(){
        return this.#id;
    }
    set qty(qty){
        this.#qty = qty;
    }
    get qty(){
        return this.#qty;
    }
    
}

class Order{
    #id;
    #user_id;
    #cart = [];
    constructor(id, user_id){
         if(users.find((user) => {
           return user.user_id === user_id; 
        })){
            this.#user_id = user_id;
        }else{
            console.log("There isn't such a user, try again");
            return;
        }
        this.#id = id;
       
    }
    get user_id(){
        return this.#user_id;
    }
    get cart(){
        return this.#cart;
    }
    get id(){
        return this.#id;
    }
    set id(id){
        this.#id = id;
    }
    addProduct(user,product, qty){
       if(product.qty >= qty){
        this.#cart.push({
            product: product, 
            qty: qty
        });
         user.cart = this.#cart;
         console.log("product succesfully added");
        }else {
            return "no such product or out of stock";
        }
    }
    deleteProduct(user,product, qty){
        let count;
       for(let prod of this.#cart){
        if(prod.product.name === product.name && prod.qty >= qty){
            prod.qty -= qty;
            console.log(`${qty} amount of the product was deleted`);
            if(prod.qty == 0){
                count = 0;
            }
       }
       if(count === 0){

        this.cart.filter((prod) => {
            return prod.product != product;
        })
        console.log("The product was deleted entirely");

       }
         user.cart = this.#cart;
    }}
    getList(){
        let count = 1;
        this.#cart.forEach((prod) => {
            console.log(`Product ${count++}: ${prod.product.name} ${prod.qty}`);
        });
    }
    getSubtotal(){
        let sum = 0;
        for(let product_ of this.#cart){
            sum += product_.product.price * product_.qty;
        }
        return sum;
    }

}

class User{
    #user_id;
    #name;
    #gender;
    #address;
    #cart = [];
    #balance = 0;
    #paymentMethod;
    #isLogin = true;
    orderHistory = [];
    constructor(name,user_id, gender, address, paymentMethod, balance){
        this.#name = name;
        this.#user_id = user_id;
        this.#gender = gender;
        this.#address = address;
        this.#paymentMethod = paymentMethod;
        this.#balance = balance;
    }
    get cart (){
        return this.#cart;
    }
    set cart(cart){
        this.#cart = cart;
    }
    get name(){
        return this.#name;
    }
    set name(name){
        this.#name = name;
    }
    get user_id(){
        return this.#user_id;
    }
    set user_id(user_id){
        this.#user_id = user_id;
    }
    get gender(){
        return this.#gender;
    }
    set gender(gender){
        this.#gender = gender;
    }
    get address(){
        return this.#address;
    }
    set address(address){
        this.#address = address;
    }
    get paymentMethod(){
        return this.#paymentMethod;
    }
    set paymentMethod(paymentMethod){
        this.#paymentMethod = paymentMethod;
    }
    set balance(balance){
        this.#balance = balance;
    }
    get balance(){
        return this.#balance;
    }
    logOut(){
        this.#isLogin = false;
    }
    getHistory(){
    return this.orderHistory.map((order) => {
        return {
            id: order.order_id,
            subtotal: order.order_Subtotal,
        };
    });
}

}

class Payment{
    #order_id;
    constructor(order_id){
        this.#order_id = order_id;
    }
    pay(user, order){
        if(order.user_id !== user.user_id){
            return `user: ${user.name} does not have that order, try again`;
        }
        if(user.balance < order.getSubtotal()){
            return "Not enough funds";
        }
        user.balance -= order.getSubtotal();
        user.orderHistory.push({
            order_Subtotal: order.getSubtotal(),
            order_id:order.id
         });
        user.cart = [];
        console.log(user.cart);
        return "The Payment went suceccfully";
        }
    }

const boutique = new Shop("Boutique",1,"khanjyan 15/2","+37493140034");
const prod1 = new Product(1,"Macbook Pro",1600,3);
const prod2 = new Product(2,"Macbook Neo",650,2);
const prod3 = new Product(3,"Macbook Air",1250,1);

boutique.addProduct(prod1);
boutique.addProduct(prod2);
boutique.addProduct(prod3);
boutique.getAllProducts();

const user1 = new User("Sona", 1,"female","koryun 14","apple pay",1800);
users.push(user1);
const order1 = new Order(1,1);
order1.addProduct(user1,prod1,2);
order1.getList();
console.log(order1.getSubtotal());
order1.deleteProduct(user1,prod1,1);
order1.getList();

console.log(order1.getSubtotal());

const paying1 = new Payment(1);
console.log(paying1.pay(user1,order1));
order1.getList();
console.log(user1.cart);
console.log(user1.balance);
console.log(user1.getHistory());
