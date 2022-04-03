(function(){

    var relogt = function(){

var title1 = document.querySelector(".title8");
var title2 = document.querySelector(".title4");
var title4 = document.querySelector(".title2");
var title8 = document.querySelector(".title1");

var titlem1 = document.querySelector(".titlem32");
var titlem2 = document.querySelector(".titlem16");
var titlem4 = document.querySelector(".titlem8");
var titlem8 = document.querySelector(".titlem4");
var titlem16 = document.querySelector(".titlem2");
var titlem32 = document.querySelector(".titlem1");

let d = new Date();
let minutos = d.getMinutes();
let Horas = d.getHours();
let Horas2 = 0;
let tm = 0; 

let hora1 = [1,2,3,4,5,6,7,8,9,10,11,12];

if(Horas == 13){
    Horas2=1;
}

if(Horas == 14){
    Horas2=2;
}
if(Horas == 15){
    Horas2=3;
}

if(Horas == 16){
    Horas2=4;
}
if(Horas == 17){
    Horas2=5;
}

if(Horas == 18){
    Horas2=6;
}
if(Horas == 19){
    Horas2=7;
}

if(Horas == 20){
    Horas2=8;
}
if(Horas == 21){
    Horas2=9;
}

if(Horas == 22){
    Horas2=10;
}
if(Horas == 23){
    Horas2=11;
}

if(Horas == 24){
    Horas2=12;
}

    for( i=0; i < hora1.length ; i++){

        if(hora1[i] == Horas || hora1[i] == Horas2){
            tm = i+1; 
        }
    }

console.log(tm);
  
if(tm == 1){
    title1.style.backgroundColor="red"
}
if(tm == 2){
    title2.style.backgroundColor="red"
}
if(tm == 3){
    title2.style.backgroundColor="red"
    title1.style.backgroundColor="red"
}
if(tm == 4){
    title4.style.backgroundColor="red"
}
if(tm == 5){
    title4.style.backgroundColor="red"
    title1.style.backgroundColor="red"
}
if(tm == 6){
    title4.style.backgroundColor="red"
    title2.style.backgroundColor="red"
}
if(tm == 7){
    title4.style.backgroundColor="red"
    title2.style.backgroundColor="red"
    title1.style.backgroundColor="red"
}
if(tm == 8){
    title8.style.backgroundColor="red"
}
if(tm == 9){
    title8.style.backgroundColor="red"
    title1.style.backgroundColor="red"
}
if(tm == 10){
    title8.style.backgroundColor="red"
    title2.style.backgroundColor="red"
}
if(tm == 11){
    title8.style.backgroundColor="red"
    title2.style.backgroundColor="red"
    title1.style.backgroundColor="red"
}
if(tm == 12){
    title8.style.backgroundColor="red"
    title4.style.backgroundColor="red"
}

if(minutos == 1){
    titlem1.style.backgroundColor="red"
    titlem2.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 2){
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 3){
    titlem1.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem4.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 4){
    titlem4.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 5){
    titlem1.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    title2.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 6){
    titlem4.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 7){
    titlem4.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem8.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 8){
    titlem8.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
}

if(minutos == 9){
    titlem8.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    title2.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
}

if(minutos == 10){
    titlem8.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
}

if(minutos == 11){
    titlem8.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
}

if(minutos == 12){
    titlem8.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 13){
    titlem8.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    title2.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 14){
    titlem8.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 15){
    titlem8.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem16.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 16){
    titlem16.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 17){
    titlem16.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    title2.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 18){
    titlem16.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 19){
    titlem16.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem32.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 20){
    titlem16.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 21){
    titlem16.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    title2.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 22){
    titlem16.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 23){
    titlem16.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem32.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 24){
    titlem16.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
}

if(minutos == 25){
    titlem16.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    title2.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
}

if(minutos == 26){
    titlem16.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
}

if(minutos == 27){
    titlem16.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem32.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
}

if(minutos == 28){
    titlem16.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 29){
    titlem16.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    title2.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 30){
    titlem16.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 31){
    titlem16.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem32.style.backgroundColor="2e2e2e"
}

if(minutos == 32){
    titlem32.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 33){
    titlem32.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    title2.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 34){
    titlem32.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 35){
    titlem32.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem16.style.backgroundColor="2e2e2e"
    titlem4.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 36){
    titlem32.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 37){
    titlem32.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    title2.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 38){
    titlem32.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 39){
    titlem32.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem16.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 40){
    titlem32.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
}

if(minutos == 41){
    titlem32.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem4.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
}

if(minutos == 42){
    titlem32.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem4.style.backgroundColor="2e2e2e"
    titlem1.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
}

if(minutos == 43){
    titlem32.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem4.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
}

if(minutos == 44){
    titlem32.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
}

if(minutos == 45){
    titlem32.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    title2.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
}

if(minutos == 46){
    titlem32.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    titlem16.style.backgroundColor="2e2e2e"
}


if(minutos == 47){
    titlem32.style.backgroundColor="red"
    titlem8.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem16.style.backgroundColor="2e2e2e"
}

if(minutos == 48){
    titlem32.style.backgroundColor="red"
    titlem16.style.backgroundColor="red"
    titlem4.style.backgroundColor="2e2e2e"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 49){
    titlem32.style.backgroundColor="red"
    titlem16.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem4.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 50){
    titlem32.style.backgroundColor="red"
    titlem16.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem4.style.backgroundColor="2e2e2e"
    titlem1.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 51){
    titlem32.style.backgroundColor="red"
    titlem16.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem4.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 52){
    titlem32.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem16.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 53){
    titlem4.style.backgroundColor="red"
    titlem32.style.backgroundColor="red"
    titlem16.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    title2.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 54){
    titlem4.style.backgroundColor="red"
    titlem32.style.backgroundColor="red"
    titlem16.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    titlem8.style.backgroundColor="2e2e2e"
}

if(minutos == 55){
    titlem4.style.backgroundColor="red"
    titlem32.style.backgroundColor="red"
    titlem16.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem8.style.backgroundColor="2e2e2e"

}

if(minutos == 56){
    titlem8.style.backgroundColor="red"
    titlem32.style.backgroundColor="red"
    titlem16.style.backgroundColor="red"
    titlem4.style.backgroundColor="2e2e2e"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
}

if(minutos == 57){
    titlem8.style.backgroundColor="red"
    titlem32.style.backgroundColor="red"
    titlem16.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem4.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
}

if(minutos == 58){
    titlem8.style.backgroundColor="red"
    titlem32.style.backgroundColor="red"
    titlem16.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem4.style.backgroundColor="2e2e2e"
    titlem1.style.backgroundColor="2e2e2e"
}

if(minutos == 59){
    titlem8.style.backgroundColor="red"
    titlem32.style.backgroundColor="red"
    titlem16.style.backgroundColor="red"
    titlem2.style.backgroundColor="red"
    titlem1.style.backgroundColor="red"
    titlem4.style.backgroundColor="2e2e2e"
}

if(minutos == 60){
    titlem8.style.backgroundColor="red"
    titlem32.style.backgroundColor="red"
    titlem16.style.backgroundColor="red"
    titlem4.style.backgroundColor="red"
    titlem1.style.backgroundColor="2e2e2e"
    title2.style.backgroundColor="2e2e2e"
}

    };

relogt();
var intervalo = setInterval(relogt,1000);

}())
