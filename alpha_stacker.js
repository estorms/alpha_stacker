/*Create a stackLetters function that should console.log rows of letters. It should take an array containing the letters of the alphabet and output them like this:

a
ab
abc
abcd
abcde
abcdef
etc */


var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 function stackLetters() {
    var output = ''; //note that you have to declare var before filling it, also need to give it an empty string as a place holder or won't work
    for (var i = 0; i < letters.length; i++) {
        output = output + letters[i];
        console.log(output);
    
    }
 }

stackLetters();

