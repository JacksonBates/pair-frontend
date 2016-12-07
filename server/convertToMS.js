module.exports = (string) => {
  // Check if the input is of type string
  if(typeof string == 'string'){
    var regex = /\d{1,2}:\d{2}/;    
    // Check if there is a match and if the input is equal to this match 
    if(string.match(regex) && string.match(regex)[0] == string){  
      var arr = string.split(':');
      var time = (+arr[0] * 3600000) + (+arr[1] * 60000);
      return time;
    }else{
      // If the input doesn't match the regex, return 'Invalid Date'
      return "Invalid Date";
    }
  }else{
    // If the input is not a string, return 'Invalid Date'
    return "Invalid Date";
  }
}