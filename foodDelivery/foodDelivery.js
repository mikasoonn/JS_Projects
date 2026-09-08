
class User {
  static sequalNumber = 1;
  #id = User.sequalNumber++;
  constructor(id, name, email, phone, address, type) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.type = type;
  }

  set id(id){
    this.#id = id;
  }
  get id(){
    return this.#id;
  }
}



class Restaurant {
  #id;
  constructor(id, name, address) {
    this.#id = id;
    this.name = name;
    this.address = address;
    this.menu = [];
  }

  addDish(dish) {
    this.menu.push(dish);
  }

  removeDish(dishId) {
    this.menu = this.menu.filter(
      dish => dish.id !== dishId
    );
  }
  set id(id){
    this.#id = id;
  }
  get id(){
    return this.#id;
  }

}



class Dish {
  #id;
  constructor(id, name, price, type) {
    this.#id = id;
    this.name = name;
    this.price = price;
    this.type = type;
  }
 

}



class Order {
  #id;
  constructor(id, user, restaurant) {
    this.#id = id;
    this.user = user;
    this.restaurant = restaurant;

    this.items = [];
    this.status = "created";
  }

  addItem(dish, quantity) {
    this.items.push({
      dish,
      quantity
    });
  }
  generateInvoice() {
  console.log(
    `Generating invoice for order ${this.id}`
  );
}

  cancel() {
    if (this.status === "delivered") {
      throw new Error(
        "Delivered order cannot be cancelled"
      );
    }

    this.status = "cancelled";
  }
}



class PaymentService {
  constructor(){
    if(new.target === PaymentService){
      throw new Error("Abstract class");
    }
  }
  pay(amount){
    throw new Error("Abstract Method");
  }
}

class PayByCash extends PaymentService{
  pay(amount){
    console.log(`Charging cash: ${amount}`); 
  }
}

class PayByPaypal extends PaymentService{
  pay(amount){
    console.log(`Charging Paypal: ${amount}`); 
  }
}

class PayByCrypto extends PaymentService{
  pay(amount){
    console.log(`Charging Crypto: ${amount}`); 
  }
}

class RefundService {
  constructor(){
    if(new.target === RefundService){
      throw new Error("Abstract class");
    }
  }
  refund(amount){
    throw new Error("Abstract Method");
  }
}

class RefundByCash extends RefundService{
  refund(amount){
    console.log(`Refunding card: ${amount}`); 
  }
}

class RefundByPaypal extends RefundService{
  refund(amount){
    console.log(`Refunding Paypal: ${amount}`); 
  }
}

class RefundByCrypto extends RefundService{
  refund(amount){
    console.log(`Refunding Crypto: ${amount}`); 
  }
}


class DeliveryService {
  constructor(){
    if(new.target === DeliveryService){
      throw new Error("Abstract Class");
    }
  }
  deliver(order, type) {
   throw new Error("Abstract method");
  }
}

class DeliverCourier extends DeliveryService{
  deliver(order){
    console.log(
        `Courier delivers order ${order.id} to ${order.user.address}`
    );
  }
}

class DeliverPickup extends DeliveryService{
  deliver(order){
    console.log(
        `User will pick up order ${order.id}`
    );
  }
}

class DeliverDrone extends DeliveryService{
  deliver(order){
    console.log(
        `Drone delivers order ${order.id} to ${order.user.address}`
    );
  }
}




class NotificationService {
  constructor(){
    if(new.target == NotificationService){
      throw new Error ("Abstract class");
    }
  }
  notify(user, message) {
    throw new Error ("Abstract method");
    
  }
}

class sendEmail extends NotificationService{
    notify(user,message){
        return `Sending Email to ${user.email}: ${message}`;
    }
}

class sendSms extends NotificationService{
    notify(user,message){
    return `SMS to ${user.phone}: ${message}`
    }
}

class pushNotification extends NotificationService{
  notify(user,message){
    return `Push notification to user ${user.id}: ${message}`;
  }
}

//7 hat class regular, vip, new_user
class DiscountService {
    constructor(){
        if(new.target === DiscountService){
            throw new Error("Abstract class");
        }
    }
    calculateDiscount(object){
        throw new Error("Abstract class");
    }
    
}

class DiscountRegular extends DiscountService{
    calculateDiscount(total){
        return 0;
    }
}

class DiscountVIP extends DiscountService{
    calculateDiscount(total){
        return total * 0.1;
    }
}

class DiscountEmployee extends DiscountService{
    calculateDiscount(total){
        return total * 0.3;
    }
}

class DiscountNew extends DiscountService{
    calculateDiscount(total){
        return total * 0.2;
    }
}

class Price {
  constructor(){
    if(new.target == Price){
      throw new Error("Abstract class");
    }
  }
  calculatePrice(object){
        throw new Error("Abstract method");
    }

}
class PizzaPrice extends Price{
    calculatePrice(object){
        return object.price * 0.9; 
    }

}

class BurgerPrice extends Price{
    calculatePrice(object){
        return object.price * 0.95;
    }
}

class DessertPrice extends Price{
    calculatePrice(object){
        return object.price * 0.85;
    }
}

class Database {
  saveUser(userId) {
    console.log(
      `Saving user:${userId} to MySQL...`
    );
  }

  saveRestaurant(restaurantId) {
    console.log(
      `Saving restaurant:${restaurantId} to MySQL...`
    );
  }

  saveOrder(orderId) {
    console.log(
      `Saving order:${orderId} to MySQL...`
    );
  }

  saveDish(dish) {
    console.log(
      `Saving dish: ${dish.name} to MySQL...`
    );
  }
}




class OrderService {
  constructor(
    database,
    paymentService,
    deliveryService,
    notificationService,
    discountService,
    pizzaPrice,
    burgerPrice,
    dessertPrice
  ) {
    this.database = database;
    this.paymentService = paymentService;
    this.deliveryService = deliveryService;
    this.notificationService = notificationService;
    this.discountService = discountService;

    this.pizzaPrice = pizzaPrice;
    this.burgerPrice = burgerPrice;
    this.dessertPrice = dessertPrice;
  }

  calculateTotal(order) {
    let total = 0;

    for (const item of order.items) {
      let price;

      if (item.dish.type === "pizza") {
        price = this.pizzaPrice.calculatePrice(item.dish);
      }

      if (item.dish.type === "burger") {
        price = this.burgerPrice.calculatePrice(item.dish);
      }

      if (item.dish.type === "dessert") {
        price = this.dessertPrice.calculatePrice(item.dish);
      }

      total += price * item.quantity;
    }

    return total;
  }

  calculateFinalPrice(total, discount) {
    return total - discount;
  }

  createOrder(id,user, restaurant, items) {
    const order = new Order(
      id,
      user,
      restaurant
    );

    for (const item of items) {
      order.addItem(
        item.dish,
        item.quantity
      );
    }

    // Calculate total
    const total = this.calculateTotal(order);

    // Calculate discount
    const discount =
      this.discountService.calculateDiscount(total);

    // Final price
    const finalPrice = this.calculateFinalPrice(total,discount);

    // Payment
    this.paymentService.pay(finalPrice);

    // Delivery
    this.deliveryService.deliver(order);

    // Notification
    console.log(
      this.notificationService.notify(
        user,
        `Order ${order.id} was created`
      )
    );

    // Database
    this.database.saveOrder(order.id);

    console.log(
      `Order created. Final price: ${finalPrice}`
    );

    return order;
  }
}



const database = new Database();

const user1 = new User(1,"John","john@gmail.com","099123456","Yerevan","vip");

const user2 = new User(2,"Angela","angela@gmail.com", "099456789","Hrazdan","new");

database.saveUser(user1.id);
database.saveUser(user2.id);

const restaurant = new Restaurant(1,"Pizza House","Yerevan");

database.saveRestaurant(restaurant.id);

const pizza = new Dish(1,"Pepperoni Pizza",3500,"pizza");

const burger = new Dish(2,"CheeseBurger",1700,"burger");

const dessert = new Dish(3,"Snickers cake",500,"dessert");

database.saveDish(pizza);
database.saveDish(burger);
database.saveDish(dessert);

restaurant.addDish(pizza);
restaurant.addDish(burger);
restaurant.addDish(dessert);

const payment1 = new PayByPaypal();
const payment2 = new PayByCash();

const delivery1 = new DeliverPickup();
const delivery2 = new DeliverCourier();

const notification1 = new sendEmail();
const notification2 = new sendSms();

const discount1 = new DiscountVIP();
const discount2 = new DiscountNew();


const pizzaPrice = new PizzaPrice();
const burgerPrice = new BurgerPrice();
const dessertPrice = new DessertPrice();

const orderService1 = new OrderService(database,payment1,delivery1,notification1,discount1,pizzaPrice,burgerPrice,dessertPrice);
const orderService2 = new OrderService(database,payment2,delivery2,notification2,discount2,pizzaPrice,burgerPrice,dessertPrice);

console.log("\n");
console.log("Order 1:");
const orderforJohn = orderService1.createOrder(1,user1,restaurant,
  [
    {
      dish: pizza,
      quantity: 2
    },
    {
      dish: burger,
      quantity: 1
    },
    {
      dish: dessert,
      quantity: 1
    }
  ]
);
console.log("\n");
console.log("Order 2:")
const orderforAngela = orderService2.createOrder(2,user2,restaurant,
  [
    {
      dish: pizza,
      quantity: 1
    },
    {
      dish: burger,
      quantity: 2
    },
    {
      dish: dessert,
      quantity: 3
    }
  ]
);

