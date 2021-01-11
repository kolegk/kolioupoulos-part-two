let rain = prompt("How many inches of rain fell?")
let star = "*"
console.log(star.repeat(rain))
let land = 50
if(rain >= 20){
    land *= .9
    
}
if(rain <= 10){
    land *= .8
}
// console.log(land)

let brand
let fert = prompt("Did you use fertilizer?")
if (fert === "yes"){
    brand = prompt("Did you use premium or regular fertilizer?")
}else{
    console.log("the yield should be "+land+" bushles per acre")
}
if (brand === "regular"){
    console.log("the yield should be "+(land*1.1).toFixed(2)+" bushles per acre")
}
if (brand === "premium"){
    console.log("the yield schould be "+(land*1.15).toFixed(2)+" bushles per acre")
}