var products = [
    { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
    { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
    { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
    { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
    { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' },
    { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
];

// Solve the below without using loops

// print the name & cost of all the products
products.forEach(function(product){
    console.log(product.name, product.cost)
})

// print only the stationary products
var stationaryProducts = products.filter(function(product){
    return product.category === 'stationary'
})

// create a new array of products (discountedProducts) with the cost applied with 10% discount
var discountedProducts = products.map(function(product){
    return {
        id : product.id,
        name : product.name,
        cost : product.cost * 0.9,
        units : product.units,
        category : product.category
    }
})

// find the overall products value (sum of (units * cost))
var totalProductValue = products.reduce(function(prevResult, product){
    return prevResult + (product.cost * product.units)
}, 0)

// find the costliest product
var costliestProduct = products.reduce(function(prevResult, product){
    return prevResult.cost > product.cost ? prevResult : product;
})

// find the cheapest product
var cheapestProduct = products.reduce(function(prevResult, product){
    return prevResult.cost < product.cost ? prevResult : product;
})

// group the products by category
var productsGroupedByCategory = products.reduce(function(prevResult, product){
    var key = product.category;
    if (typeof prevResult[key] === 'undefined'){
        prevResult[key] = []
    }
    prevResult[key].push(product)
    return prevResult;
}, {})
