const romans8567 = "For those who live according to the flesh set their minds on the things of the flesh, but those who live according to the spirit set their minds on the things of the spirit. For to seth the mind on the flesh is death, but to set the mind on the spirit is life and peace. For the mind that is set on the flesh is hostile to God, fir it does not submi8t to God's law, indeed, it cannot. Those who are in the flesh cannot please God."

const verseArray = romans8567.split(',');


function findMatches(wordToMatch, cities) {
    return verseArray.filter(word => {
        //here we need to figure ouf if the city or state matches the search

        const regex = new RegExp(wordToMatch, 'gi');

        return word.match(regex) || word.match(regex);
    });
}




function displayMatches() {
    const matchArray = findMatches(this.value, verseArray);
    const html = matchArray.map(word => {
        const regex = new RegExp(this.value, 'gi');
        const matchedWord = word.replace(regex, `<span class="hl">${this.value}</span>`);
        
        return `<p> ${matchedWord} </p>`; //we're returning our matched word highlighted here
    }).join('');
    matching.innerHTML = html;
}