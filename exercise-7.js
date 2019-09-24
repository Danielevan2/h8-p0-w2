// 1. Menyusun Barisan Bintang
var rows1 = 5 ;

for(var i = 0 ; i < rows1 ; i++){
    console.log('*') ;
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5 ;

for(var y = 0 ; y < rows2 ; y++){
    var hasil = '' ;
    for(var x = 0 ; x < rows2 ; x++){
        hasil += '*' ;
    }
    console.log(hasil) ;
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5 ;

for(var r = 0 ; r < rows3 ; r++){
    hasil = '' ;
    for(var d = 0 ; d < r+1 ; d++){
     hasil += '*' ;
    }
    console.log(hasil) ;
}

