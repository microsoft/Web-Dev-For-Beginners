/*
a pangram is a sentence that contains every letter of the alphabet,
write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.
*/
function isPangram(sentence){
    sentence = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(sentence.indexOf(char)===-1){
            return false;
        }
    }
    return true;
}
console.log(isPangram('Sphinx of black quartz, judge my vow.'))