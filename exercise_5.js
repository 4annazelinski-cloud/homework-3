// const word = prompt('Count the vowels - input a word:').trim().toLowerCase();
let word = "translate";
let vowelCount = 0;

for (let i = 0; i < word.length; i ++) {
    const char = word[i];
    const isVowel = char === "a" || char === "e" || char === "i" || char === "o" || char === "u";
    
    if (isVowel) {
        vowelCount += 1;
    }
}
console.log(`"${word}" has ${vowelCount} vowels out of ${word.length} letters`);