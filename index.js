class Formatter {
  static capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  static sanitize(word){
    return word.replace(/[^A-Za-z0-9-\s']+/g, '');
  }
  static titleize(word){
    const allWords = []
    const immutantWords = ['the','a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    // console.log(word)
    for (let aword of word.split(' ')){
      // console.log(aword)
      if(immutantWords.includes(aword) && word[0]!== aword){
        // console.log(`${aword} exists in immutables`)
        allWords.push(aword)
      }
      else{
        // console.log(`${aword} does not exist in immutables`)
        // console.log(`${this.sanitize(aword)} is my sanitized word`)
        const capsWord = this.capitalize(aword)
        // console.log(capsWord)
        allWords.push(capsWord) 
      }
    }
    console.log(allWords)
    return allWords.join(' ')
  }
}