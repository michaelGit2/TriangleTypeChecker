function triangle(){
var sides = []

sides.push(document.getElementById('side1').value);
sides.push(document.getElementById('side2').value);
sides.push(document.getElementById('side3').value);



/* console.log(sides); */
if (sides[0]===sides[1]  &&  sides[1]===sides[2] && sides[0]===sides[2]){
result.innerHTML=(" It is an Equilateral Triangle")
}

else if (sides[0]===sides[1]  &&  sides[0]!==sides[2] || sides[0]===sides[2]  &&  sides[0]!==sides[1] || sides[1]===sides[2]  &&  sides[1]!==sides[0]){
result.innerHTML=("It is an Isosceles Triangle")
}
else if(sides[0]>= (sides[1]+sides[2]) || sides[1]>=(sides[0]+sides[2]) || sides[2]>=(sides[0]+sides[1]) ){
 result.innerHTML =("Not a triangle")
}
// to check for nscalene

else if(sides[0]!==sides[1] && sides[1]!==sides[2] && sides[0]!==sides[2]){
result.innerHTML=("It is a Scalene Triangle")
}
else {
alert("NOT a triangle")
}
}
