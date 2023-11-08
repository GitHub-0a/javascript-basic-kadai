// btnというidを持つHTML要素を取得し、定数に代入する
const modBtn = document.getElementById('btn');

//ボタンクリック時
modBtn.addEventListener('click', () => {

	// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
	setTimeout(() => {

      	// textというidを持つHTML要素を取得し、定数に代入する
      	const teXt = document.getElementById('text');
      	// 作成したtext要素のテキストを変更する
      	teXt.textContent = 'ボタンをクリックしました';

	}, 2000);

  });
