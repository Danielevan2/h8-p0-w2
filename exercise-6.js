// 1. Melakukan Looping Menggunakan While
var angka = 1 ;
while(angka < 20){
    angka ++ ;
    console.log(angka + ' - I love coding') ;
}

var angka2 = 21 ;
while(angka2 > 2){
    angka2 -- ;
    console.log(angka2 + ' - I will become fullstack developer ') ;
}

// 2. Melakukan Looping Menggunakan For
for(var i = 0 ; i <= 20 ; i++){
    if(i == 0){
        console.log('LOOPING PERTAMA') ;
    }else{
        console.log( i + ' - I love coding' ) ;
        }
}
for(var y = 21 ; y >= 1 ; y--){
    if(y == 21){
        console.log('LOOPING KEDUA');
    }else{console.log(y + ' - I will become fullstack developer' ) ;
        }
}

// 3. Angka Ganjil dan Genap
for(x = 1 ; x < 100 ; x++){
    if(x % 2 == 0){
    console.log('GENAP') ;
    } else{
    console.log('GANJIL') ;
    }
}
// kelipatan 2
for(r = 1 ; r < 100; r += 2){
if(r % 3 == 0){
    console.log(r + ' KELIPATAN 3') ;
}
}
//kelipatan 5
for(d = 1 ; d < 100 ; d += 5){
    if(d % 6 == 0){
        console.log(d + ' KELIPATAN 6') ;
    }
    }
// kelipatan 9
for(k = 1 ; k < 100 ; k += 9){
if(k % 10 == 0){
    console.log(k + ' KELIPATAN 10') ;
}
}
