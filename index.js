class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9\s'-]/g, "");
  }

  static titleize(str) {
    const wordsToIgnore = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return str.split(' ')
      .map((word, index) => {
        if (index === 0 || !wordsToIgnore.includes(word.toLowerCase())) {
          return Formatter.capitalize(word);
        }
        return word;
      })
      .join(' ');
  }
}