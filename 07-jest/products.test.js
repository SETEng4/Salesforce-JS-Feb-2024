function createProducts(){
    var products = {
        list : [],
        addNew : function(newProductName, unitCost, units){
            var newProduct = {
                id: this.list.length + 1,
                name: newProductName,
                units: units,
                unitCost: unitCost,
                itemValue: units * unitCost
            }
            this.list.push(newProduct)
            return newProduct;
        },
        total : function(){
            return this.list.reduce(function(prevResult, product){
                return prevResult + product.itemValue
            },0);
        }
    };
    return products;
}

// tests
var products;

beforeEach(function(){
    products = createProducts();
})

test("products initialized with an empty list", function(){
    // var products = createProducts();
    expect(products.list.length).toBe(0);
});

test("adding a new product returns the newly created product", function(){
    // arrange
    // var products = createProducts();

    var newProduct = products.addNew('pen', 10, 10);
    expect(newProduct).toBeDefined();
});

test("adding a new product updates the list", function(){
    // arrange
    // var products = createProducts();

    var newProduct = products.addNew('pen', 10, 10);

    expect(products.list.length).toBe(1);
});

test("products total are calculated right", function(){
    // var products = createProducts();

    products.addNew('pen', 10, 10);
    products.addNew('pencil', 10, 10);

    expect(products.total()).toBe(200);
})

