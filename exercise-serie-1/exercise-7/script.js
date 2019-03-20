//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function shuffle() {
    var a = ["1.jpg", "2.jpg", "3.jpg"];
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    document.getElementById('yeet').innerHTML = '<img src="'+a[0]+'" alt=""><img src="'+a[1]+'" alt=""><img src="'+a[2]+'" alt="">';
}
