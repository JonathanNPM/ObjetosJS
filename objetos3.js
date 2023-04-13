console.log(charCount("Hello"));
console.log(charCount("AaBbC"));
console.log("Letra mais frequente: " + MostFreqChar("abbbcc"));

function charCount(str) {
    const obj = {};
    for(const i of str.toLowerCase()) {
        obj[i] = !obj[i] ? 1 : obj[i] + 1;
    }
    return obj;
}

function MostFreqChar(str) {
    const obj = charCount(str);
    let mostFreq;
    for(const i in obj) {
        mostFreq = !mostFreq ? i : mostFreq;
        if(obj[i] > obj[mostFreq]) mostFreq = i;
    }
    return mostFreq;
}