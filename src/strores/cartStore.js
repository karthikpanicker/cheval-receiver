import {decorate, observable, action} from "mobx/lib/mobx";
class CartStore {
    cartItem;
    loyaltyPoints;
    constructor() {
        this.loyaltyPoints = 1450;
    }

   addItem(item) {
       this.cartItem = {};
       this.cartItem.title = item.title;
       this.cartItem.price = item.price;
       this.cartItem.pricePoints = item.pricePoints;
       this.cartItem.icon = 'tick.svg';
       this.cartItem.type = item.type;
   }
    redeemPoints() {
        if(this.cartItem.type === 'souvenirs') {
            this.cartItem.messages = [`${this.cartItem.pricePoints} loyalty point has been redeemed`,
                `Your souvenir will be delivered to your room`];
        } else {
            this.cartItem.messages = [`${this.cartItem.pricePoints} loyalty point has been redeemed`];
        }

    }

    addToBill() {
        if(this.cartItem.type === 'souvenirs') {
            this.cartItem.messages = [`${this.cartItem.price} has been added to your bill`,
                `Your souvenir will be delivered to your room`];
        } else {
            this.cartItem.messages = [`${this.cartItem.price} has been added to your bill`];
        }

    }

}

decorate(CartStore, {
    loyaltyPoints: observable,
    addItem: action,
});
const cartStore = new CartStore();
export default cartStore;
