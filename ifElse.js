var nama = 'reny'
var peran = 'zero'

if(nama === '' ){
    console.log('Nama harus diisi!')
} else if(peran === ''){
    console.log('Halo ' + nama +', Pilih peranmu untuk memulai game!')
} else if(peran === 'Ksatria' || peran === 'ksatria'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
} else if(peran === 'Tabib' || peran === 'tabib'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.')
} else if(peran === 'Zero' || peran === 'zero'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo Penyihir Zero ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
} else {
  console.log('isi peran dengan (Ksatria / Tabib / Zero)')
}