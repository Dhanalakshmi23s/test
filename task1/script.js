//step 1:
var request = new XMLHttpRequest();
// console.log(request);

//step 2:
request.open("GET","https://restcountries.com/v3.1/all");
// console.log(request.open("GET","https://restcountries.com/v3.1/all"));

//step 3:
request.send()

//step 4:
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data);

//task
for (var i in result){
    if(result[i].name.common=="United Kingdom"){
        console.log("region: "+result[i].region+" subregion: "+result[i].subregion)
    }
}
for (var obj of result){
    if(obj.name.common=="United Kingdom"){
        console.log("region: "+obj.region+" subregion: "+obj.subregion)
    
}
}
for (var i in result){
    console.log("region: "+result[i].region+" subregion: "+result[i].subregion)
}
for (var obj of result){
    console.log("region: "+obj.region+" subregion: "+obj.subregion)
}
}
