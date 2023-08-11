function bmi(weight, height) {
  
  BMI = weight / Math.pow(height, 2);
  
  if (BMI <= 18.5) { return "Underweight" }
  if (BMI <= 25.0) { return "Normal" }
  if (BMI <= 30.0) { return "Overweight" }
  if (BMI > 30)    { return "Obese" }


}