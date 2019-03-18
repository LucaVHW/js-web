//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function plus() {
  let num1, num2, res;
  num1=Number(document.formcalc.txtnum1.value);
  num2=Number(document.formcalc.txtnum2.value);
  res=num1+num2;
  document.formcalc.txtres.value=res;
}
function minus() {
  let num1, num2, res;
  num1=Number(document.formcalc.txtnum1.value);
  num2=Number(document.formcalc.txtnum2.value);
  res=num1-num2;
  document.formcalc.txtres.value=res;
}
function multiply() {
  let num1, num2, res;
  num1=Number(document.formcalc.txtnum1.value);
  num2=Number(document.formcalc.txtnum2.value);
  res=num1*num2;
  document.formcalc.txtres.value=res;
}
function divide() {
  let num1, num2, res;
  num1=Number(document.formcalc.txtnum1.value);
  num2=Number(document.formcalc.txtnum2.value);
  res=num1/num2;
  document.formcalc.txtres.value=res;
}
