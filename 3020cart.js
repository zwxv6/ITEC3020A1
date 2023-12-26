var parameter, price, color;
var count = 1;
var initial = 0;

function addobject(){
var colorobject = document.getElementById("Black");
var colorobject2 = document.getElementById("Silver");
var colorobject3 = document.getElementById("White");
if(colorobject.checked == true){
	this.color = "Black";
}else if(colorobject2.checked == true){
	this.color = "Silver";
}else if(colorobject3.checked == true){
	this.color = "White";
}
var object = document.getElementById("RTX3060 + i7-11800+512GSSD");
var object2 = document.getElementById("RTX3070 + i7-11800+512GSSD");
var object3 = document.getElementById("RTX3080 + i7-11800+512GSSD");
if(object.checked == true){
	this.parameter = "RTX3060 + i7-11800+512GSSD";
	this.price = "1499$";
}else if(object2.checked == true){
	this.parameter = "RTX3070 + i7-11800+512GSSD";
	this.price = "1899$";
}else if(object3.checked == true){
	this.parameter = "RTX3080 + i7-11800+512GSSD";
	this.price = "2299$";
}
this.initial = 1;
if(this.count ==1){
alert("Add Product to Cart Successfully!");
alert("Following items be added:" + "\n" +"Color: " +this.color + "\n" +"Parameter: " + this.parameter + "\n" +"Price: " + this.price);
}
}

function viewcart(){
if(this.initial == 0){
alert("Your Cart: " + "\n" + "Empty" );
return;
}
this.count = 2;
addobject();
alert(parameter);
alert(price);
alert(color);
vcolor = color;
vparameter = parameter;
vprice = price;
alert("Your Cart: " + "\n" + vcolor + "\n" + vparameter + "\n" + vprice);
}
