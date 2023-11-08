// btnというidを持つHTML要素を取得し、定数に代入する
const modBtn = document.getElementById('btn');

modBtn.addEventListener('click', () => {
      // textというidを持つHTML要素を取得し、定数に代入する
      const teXt = document.getElementById('text');
      // 作成したtext要素のテキストを変更する
      teXt.textContent = 'ボタンをクリックしました';
  });
