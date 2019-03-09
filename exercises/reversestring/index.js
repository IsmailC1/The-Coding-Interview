// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


   function reverse(str){
    let reversed = '';
    
    for(let character of str) {
        reversed = character + reversed;
        debugger;
    }
 
    return reversed;
 }
 
reverse('asff')

module.exports = reverse; 


//1) function reverse(str) {
//      const arr = str.split('');
//      arr.reverse();    
//      return arr.join('');
// }
 

//2) function reverse(str){
//     let reversed = '';
//     console.log(str);
//     for(let character of str) {
//         reversed = character + reversed;
//     }
//     console.log(reversed); 
 
//     return reversed;
//  }

// function reverse(str){
//     debugger;
//    return str.split('').reduce((reversed, character) => {
//       return character + reversed;
//    }, '');
// }
 