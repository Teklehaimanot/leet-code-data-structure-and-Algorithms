/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev = 0
    let num = x
  
    while(x > 0){
        let digit = x % 10
        rev = rev * 10 + digit
        x = Math.floor(x / 10)
    }
    
    if(rev === num) {
        return true
    }else return false
};