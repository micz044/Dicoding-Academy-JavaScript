const date = new Date();

const timeInJakarta = date.toLocaleString('id-ID',{
    timeZone : 'Asia/Jakarta',
});

const timeInTokyo = date.toLocaleString('Ja-JP',{
    timeZone:'Asia/Tokyo'
});

const timeInMakassar = date.toLocaleString('id-ID',{
   timeZone: 'Asia/Makassar',
});


console.log(timeInJakarta);
console.log(timeInMakassar);
console.log(timeInTokyo);