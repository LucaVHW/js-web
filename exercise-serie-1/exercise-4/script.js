//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function myFunction(){
			var d = new Date();
			var year = new Date(document.getElementById('dob').value);
			var age = d.getFullYear() - year.getFullYear();
			document.getElementById('age').value = age;
		}
