/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let val = []
    
    for(let i = 0, j = 0; i < t.length; i++){
        if(s[j] === t[i]){
            val.push(t[i])
            j++
}
       
}
      if(val.join("") === s){
            return true
        }else return false
};