// window.addEventListener("load", function(){
//   document.querySelector(".card").style.display="none"
// })
//
// document.querySelector("button").addEventListener("click", function(){
//   document.querySelector(".card").style.display = "block"
// })
//
// document.querySelector(".close").addEventListener("click", function(){
//   document.querySelector(".card").style.display="none"
// })
//
// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')
//
// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

//var monie =""



// var buttons = document.querySelectorAll("button.addcart").length;
// var productPrice = document.querySelectorAll("p.product");
//
// for (var i = 0; i < buttons; i++){
//   document.querySelectorAll("button.addcart")[i].addEventListener("click", function(){
//     var num = this.innerHTML;
//     console.log(num)
//   })
//
// }

var buttons = document.querySelectorAll("button.addcart").length
var nodes = document.querySelectorAll("button.addcart")
var paras = document.querySelectorAll(".product")
console.log(paras)

for (var i =0; i < buttons; i++){
  nodes[i].addEventListener("click", function(i){
    console.log("You clicked " + i)
    productPrice = paras[i].innerText
    document.querySelector(".icon").innerHTML = productPrice
  }.bind(null, i));
}


var typeWriterElement = document.getElementById('typewriter');

// The TextArray:
var textArray = [
  "Hey, I'm Kevin Otieno.",
  "I like learning and mastering concepts.",
  "I Love to Develop.", "Python is my preferred language."];

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');


// function to generate the backspace effect
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
		// generate a random Number to emulate backspace hitting.
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack);
	} else if (typeof cb == 'function') {
		setTimeout(cb,1000);
	}
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		// generate a random Number to emulate Typing on the Keyboard.
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () {
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},1000);
	}
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},1000);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},1000);


//document.querySelector(".icon").innerText = "Kes " + moni
