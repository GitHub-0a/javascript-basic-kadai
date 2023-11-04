let num;      /* 変数定義 */
let numWork;  /* 変数定義 */
let numWork2; /* 変数定義 */

num = 30;  /* ←任意に数値を代入すること */

numWork = num % 3; /* 3の倍数確認 */
numWork2 = num % 5; /* 5の倍数確認 */

if (numWork === 0 && numWork2 === 0) {  /* 3の倍数 & 5の倍数*/
    console.log('3と5の倍数です');
}
else if (numWork === 0) {               /* 3の倍数*/
     console.log('3の倍数です');
}
else if (numWork2 === 0) {              /* 5の倍数*/
    console.log('5の倍数です');
}
else {
     console.log('num =',num);
}