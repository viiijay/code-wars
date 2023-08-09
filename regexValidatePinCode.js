function validatePIN (pin) {
    //return true or false
    
    pL = pin.length;
    
    if (pL === 4 || pL === 6) {
    
      return (/^[0-9]+$/).test(pin) ? true : false;
    }
    return false;
    
  }