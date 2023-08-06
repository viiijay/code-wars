function XO(str) {
    //code here
  
  str = str.toLowerCase()
  if (str.includes('x')  === false && str.includes('o') === false) {
    
    return true;
  } 
  
  str_arr = str.split('')
  xArr = str_arr.filter(char => char === 'x')
  oArr = str_arr.filter(char => char === 'o')
  
  return xArr.length === oArr.length;
  

}