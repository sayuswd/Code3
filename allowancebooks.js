function textTipeValue() {


  //food_expensesの値を取得
  //値を０に設定する。
  let food_input_value = 0;

  //食費のinqutを取得
  const food_input = document.querySelector(".food_expenses input");

  //数値に変換
  food_input_value = parseInt(food_input.value);

  //中身の値のチェック
  if (Number.isNaN(food_input_value) == false) {

    //値を取り出す。

    food_input_value;

  };


  //medical_expensesの値を取得
  //値を０に設定する。
  let medical_input_value = 0;

  //医療費のinqutを取得
  const medical_input = document.querySelector(".medical_expenses input");

  //数値に変換
  medical_input_value = parseInt(medical_input.value);

  //中身の値のチェック
  if (Number.isNaN(medical_input_value) == false) {

    //値を取り出す。

    medical_input_value;

  };


  //library_expensesの値を取得
  //値を０に設定する。
  let library_input_value = 0;

  //図書費のinqutを取得
  const library_input = document.querySelector(".library_expenses input");

  //数値に変換
  library_input_value = parseInt(library_input.value);

  //中身の値のチェック
  if (Number.isNaN(library_input_value) == false) {

    //値を取り出す。

    library_input_value;

  };


  //entertainment_expenses_oの値を取得
  //値を０に設定する。
  let entertainment_o_input_value = 0;

  //交際費（対外）のinqutを取得
  const entertainment_o_input = document.querySelector(".entertainment_expenses_o input");

  //数値に変換
  entertainment_o_input_value = parseInt(entertainment_o_input.value);

  //中身の値のチェック
  if (Number.isNaN(entertainment_o_input_value) == false) {

    //値を取り出す。
    entertainment_o_input_value;

  };


  //entertainment_expenses_pの値を取得
  //値を０に設定する。
  let entertainment_p_input_value = 0;

  //交際費（私的）のinqutを取得
  const entertainment_p_input = document.querySelector(".entertainment_expenses_p input");

  //数値に変換
  entertainment_p_input_value = parseInt(entertainment_p_input.value);

  //中身の値のチェック
  if (Number.isNaN(entertainment_p_input_value) == false) {

    //値を取り出す。

    entertainment_p_input_value;

  };


  //traveling_expensesの値を取得
  //値を０に設定する。
  let traveling_input_value = 0;

  //旅費交通費のinqutを取得
  const traveling_input = document.querySelector(".traveling_expenses input");

  //数値に変換
  traveling_input_value = parseInt(traveling_input.value);

  //中身の値のチェック
  if (Number.isNaN(traveling_input_value) == false) {

    //値を取り出す。

    traveling_input_value;

  };


  //utilities_expensesの値を取得
  //値を０に設定する。
  let utilities_input_value = 0;

  //水道光熱費のinqutを取得
  const utilities_input = document.querySelector(".utilities_expenses input");

  //数値に変換
  utilities_input_value = parseInt(utilities_input.value);

  //中身の値のチェック
  if (Number.isNaN(utilities_input_value) == false) {

    //値を取り出す。

    utilities_input_value;

    //数値ではない場合returnを返す
  };


  //miscellaneous_expensesの値を取得
  //値を０に設定する。
  let miscellaneous_input_value = 0;

  //雑費のinqutを取得
  const miscellaneous_input = document.querySelector(".miscellaneous_expenses input");

  //数値に変換
  miscellaneous_input_value = parseInt(miscellaneous_input.value);

  //中身の値のチェック
  if (Number.isNaN(miscellaneous_input_value) == false) {

    //値を取り出す。
    miscellaneous_input_value;

  };


  //giftの値を取得
  //値を０に設定する。
  let gift_input_value = 0;

  //贈答費のinqutを取得
  const gift_input = document.querySelector(".gift input");

  //数値に変換
  gift_input_value = parseInt(gift_input.value);

  //中身の値のチェック
  if (Number.isNaN(gift_input_value) == false) {

    //値を取り出す。
    gift_input_value;

  };



  //rewardの値を取得
  //値を０に設定する。
  let reward_input_value = 0;

  //ご褒美のinqutを取得
  const reward_input = document.querySelector(".reward input");

  //数値に変換
  reward_input_value = parseInt(reward_input.value);

  //中身の値のチェック
  if (Number.isNaN(reward_input_value) == false) {

    //値を取り出す。
    reward_input_value;

  };

  //連想配列で値を纏める
  let expenses_list = [{
      name: "食費",
      price: food_input_value
    },
    {
      name: "医療費",
      price: medical_input_value
    },
    {
      name: "図書費",
      price: library_input_value
    },
    {
      name: "交際費（対外）",
      price: entertainment_o_input_value
    },
    {
      name: "交際費（私的）",
      price: entertainment_p_input_value
    },
    {
      name: "旅費交通費",
      price: traveling_input_value
    },
    {
      name: "水道光熱費",
      price: utilities_input_value
    },
    {
      name: "雑費",
      price: miscellaneous_input_value
    },
    {
      name: "贈答費",
      price: gift_input_value
    },
    {
      name: "ご褒美",
      price: reward_input_value
    },
  ];

  expenses_list.forEach(function (value) {

    const count = value.price;

    if (count > 0) {
      alert(count);
    } else {
      return;
    }

  });

};


//テキストを読み込んだときに呼ばれる関数
function textOnlode() {
  //テキストを打ちこむためにキーが入力されたら起動する
  document.addEventListener("keyup", textTipeValue);
}

window.addEventListener("load", textOnlode);