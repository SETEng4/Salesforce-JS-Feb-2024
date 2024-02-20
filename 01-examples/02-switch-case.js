/* 
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
*/

var subscription = 'Supreme'
switch (subscription) {
    case 'Supreme':
        console.log('[Supreme] License for family')
        // break; (fall-through)
    case 'Super':
        console.log('[Super] Private Playlist')
        // fall-through
    case 'Pro':
        console.log('[Pro] No Ads!')
        // fall-through
    case 'Free':
        console.log('[Free] Listen to music')
}