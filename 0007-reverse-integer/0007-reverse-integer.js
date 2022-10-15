/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0
    let flag = false;  
    if(x < 0){
        x = x * -1
        flag = true
    }
    while(x >= 1){
      let temp = x % 10
      rev = rev*10 + temp
       x = Math.floor(x/10)
    }
    
    if(rev > Math.pow(2,31)-1) return 0
    if(flag){
        return rev * -1
    }
    else return rev
};