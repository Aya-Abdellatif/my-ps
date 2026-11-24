/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    // time: O(n)
    // space: O(1)
    
    const idx = word.indexOf(ch);
    if (idx === -1) {
        return word;
    }

    const prefix = word.substring(0, idx + 1);
    const reversedPrefix = prefix.split('').reverse().join('');
    return reversedPrefix + word.substring(idx + 1);
    
    
    /*
    // time: O(n)
    // space: O(n)

    const stack = new Array();
    let cntr = 0;
    let f =false;

    for(let i = 0; i < word.length; i++){
        cntr++;
        if(word[i] === ch){
            stack.push(word[i]);
            f = true;
            break;
        }
        stack.push(word[i]);
    }
    if(!f){ return word}
    const reserved = [];
    while(stack.length){
        reserved.push(stack.pop());
    }

    return [reserved.join(""), word.slice(cntr)].join("");
    */
};