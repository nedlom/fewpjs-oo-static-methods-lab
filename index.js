class Formatter {
  //add static methods here

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  static sanitize(str) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  };

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const splitStr = str.split(" ");
    return splitStr.map(function(e, i) {
      if(i == 0 || !exceptions.includes(e)) {
        return this.capitalize(e);
      } else {
        return e;
      }
    }, this).join(" ")
  }
}



