
function textTipeValue()
{
  //全てのinqutを取得
  const allowancebooks = document.querySelectorAll(".allowancebooks input");

  //値を1つずつチェックする。
  allowancebooks.forEach(function(keys) {
    //数値に変換
  const allowancebooks_number = parseInt(keys);
  //中身の値のチェック
  alert(allowancebooks_number);
  });

  };


//テキストを読み込んだときに呼ばれる関数
function textOnlode()
{
  //テキストを打ちこむためにキーが入力されたら起動する
  document.addEventListener("keyup",textTipeValue);
}

window.addEventListener("load" ,textOnlode);
