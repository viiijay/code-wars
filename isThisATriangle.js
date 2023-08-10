function isTriangle(a,b,c)
{
  
  if (a < 0 || b < 0 || c < 0) { return false; }
  
  biggie = Math.max(a, b, c); 
  
  sumOfSmallsides = a + b + c - biggie;
  
  if (biggie >= sumOfSmallsides) { return false; }
  
  return true; 
  
}