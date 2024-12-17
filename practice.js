//check vowel exist or not
const ram = "Sanalemba";
const vowels = "aeiou"; 

for (let i = 0; i < ram.length; i++) {
    if (!vowels.includes(ram[i])) { 
        console.log(ram[i]);
    }
}

console.log(ram); 
