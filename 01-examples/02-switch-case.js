var x = 100,
    y = 200;
// userChoice = 'modulus';
var userChoice = prompt("Enter the operation :")
switch (userChoice) {
    case 'add':
        console.log('selected choice : add, result = ', x + y);
        break;
    case 'subtract':
        console.log('selected choice : subtract, result = ', x - y);
        break;
    case 'multiply':
        console.log('selected choice : multiply, result = ', x * y);
        break;
    case 'divide':
        console.log('selected choice : divide, result = ', x / y);
        break;
    default:
        console.log('invalid choice!');
}