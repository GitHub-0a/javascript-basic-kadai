const taiJyuu = 65;   /*体重*/
const shinCyou = 1.7; /*身長*/
let bMi;              /*BMI*/
bMi = taiJyuu / (shinCyou * shinCyou);

console.log('体重:',taiJyuu,'kg'); /*体重出力*/
console.log('身長:',shinCyou,'m'); /*身長出力*/
console.log('BMI :',bMi);          /*BMI出力*/
