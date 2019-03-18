//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

function reset() {
  location.reload();
};
function submit() {
  var villain = $("#villain").val()
  var power = $("#power").val()
  var motivation = $("#motivation").val()
  var plan = $("#plan").val()
  document.getElementById("yeet").remove();
  document.getElementById('hm').innerHTML = villain;
  document.getElementById('hm1').innerHTML = power;
  document.getElementById('hm2').innerHTML = motivation;
  document.getElementById('hm3').innerHTML = plan;
};
