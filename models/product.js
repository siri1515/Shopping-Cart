const products = [];

module.exports = class Product{
    constructor(title)
    {
        this.title = title;
    }

    add()
    {
        products.push(this);
    }

    //call this method directly on the class itself, not on an instanated object
    static fetchAll()
    {
        return products;
    }
}