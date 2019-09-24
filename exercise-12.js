function konversiMenit(menit) {
   var jam = menit / 60 ;
   var menits = menit ;
   var menitss = '0' ;

   if(menit < 60){
   jam = 0 ;
   }else{
       menits = menit % 60 ;
   }

   if(menits < 10){
       menitss += menits ;
    }else{
        menitss = menits ;
    }

    var result = Math.round(jam) + ':' + menitss ;

    return String(result) ;
    
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00