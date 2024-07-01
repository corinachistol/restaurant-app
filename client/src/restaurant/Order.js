class Order{

    constructor(items = []) {
        this.items = items;
    }

    addItem (item) {
        this.items.push(item);
        return new Order([...this.items]);
    }

}

export default Order;