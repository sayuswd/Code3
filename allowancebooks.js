//値を抜き出して計算する関数
function get_input_value(name)
{
  //値を０に設定する。
  let value = 0;
  //医療費のinqutを取得
  const input = document.querySelector(name);
  //数値に変換
  value = parseInt(input.value);
  return value;
}

function textTipeValue() {


  //food_expensesの値を取得
  let food_input_value = get_input_value(".food_expenses input");


//medical_expensesの値を取得
  let medical_input_value = get_input_value(".medical_expenses input");


  //library_expensesの値を取得
  let library_input_value = get_input_value(".library_expenses input");


  //entertainment_expenses_oの値を取得
  let entertainment_o_input_value = get_input_value(".entertainment_expenses_o input");


  //entertainment_expenses_pの値を取得
  let entertainment_p_input_value = get_input_value(".entertainment_expenses_p input");


  //traveling_expensesの値を取得
  let traveling_input_value = get_input_value(".traveling_expenses input");


  //utilities_expensesの値を取得
  let utilities_input_value = get_input_value(".utilities_expenses input");


  //miscellaneous_expensesの値を取得
  let miscellaneous_input_value = get_input_value(".miscellaneous_expenses input");


  //giftの値を取得
  let gift_input_value = get_input_value(".gift input");


  //rewardの値を取得
  let reward_input_value = get_input_value(".reward input");


  //連想配列で値を纏める
  const expenses_list = [{
      name: "食費",
      id: "food",
      price: food_input_value
    },
    {
      name: "医療費",
      id: "medical",
      price: medical_input_value
    },
    {
      name: "図書費",
      id: "library",
      price: library_input_value
    },
    {
      name: "交際費（対外）",
      id: "entertainment_o",
      price: entertainment_o_input_value
    },
    {
      name: "交際費（私的）",
      id: "entertainment_p",
      price: entertainment_p_input_value
    },
    {
      name: "旅費交通費",
      id: "traveling",
      price: traveling_input_value
    },
    {
      name: "水道光熱費",
      id: "utilities_expenses",
      price: utilities_input_value
    },
    {
      name: "雑費",
      id: "miscellaneous_expenses",
      price: miscellaneous_input_value
    },
    {
      name: "贈答費",
      id: "gift",
      price: gift_input_value
    },
    {
      name: "ご褒美",
      id: "reward",
      price: reward_input_value
    },
  ];



  var sum = 0;
  const expensesElement = document.querySelector('.expenses p');

  expenses_list.forEach(function (value) {

    const count = value.price;

    //中身の値が数値かどうか確認する

    if (Number.isNaN(count) == false) {
      //数値でかつ値が0より上の場合値を足す
      if (count > 0) {
        sum += count;
        expensesElement.innerHTML = sum + "円";
      } else if (count == true) {
        return;
      }
    }
  });

};


//テキストを読み込んだときに呼ばれる関数
function textOnlode() {
  //テキストを打ちこむためにキーが入力されたら起動する
  document.addEventListener("keyup", textTipeValue);
}

window.addEventListener("load", textOnlode);