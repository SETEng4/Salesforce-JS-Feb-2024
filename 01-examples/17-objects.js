// creating a new object
var obj = {}

// creating a new object with attributes initialised
var product = { id : 100, name : 'Pen', cost : 10, category : 'stationary'}

// accessing the attributes using '.' notation
console.log(product.id)

// acceing the attributes using '[]' notation
console.log(product['id'])

// creating a new attribute in an object (use '[]' notation)
product['units'] = 10

// method = an attribute whose value is a function
var obj = {};

obj['whoAmI'] = function(){
    console.log('I am an object!')
}

// OR

var obj = {
    whoAmI : function(){
        console.log('I am an object!');
    }
}

// using 'this' to access the attributes in the method function
var obj = {
    name : 'Magesh',
    whoAmI : function(){
        console.log('I am ', this.name);
    }
}
obj.whoAmI()
obj.name = 'Dennis'
obj.whoAmI()

// Iterating through the attributes of an object
// for...in
var product = { id : 100, name : 'Pen', cost : 10, category : 'stationary'}
for(var key in product){
    console.log(key)
}

// print the name & value of all the attributes in the product object
for(var key in product){
    console.log(key, product[key])
}

// using 'Object' methods
//=> returns an array of attribute names
Object.keys(product) 

// print all the attributes and their values
Object
    .keys(product)
    .forEach(function(key){
        console.log(key, product[key])
    })

//=> returns an array of attribute values
Object.values(product) 

// print the attributes whose value is a number
Object
    .keys(product)
    .filter(function(key){
        return typeof(product[key]) === 'number'
    })