//MDN web docsから引用した四捨五入関数
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round
function round(number, precision) {
    var shift = function (number, precision, reverseShift) {
        if (reverseShift) {
            precision = -precision;
        }
        var numArray = ("" + number).split("e");
        return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
    };
    return shift(Math.round(shift(number, precision, false)), precision, true);
}

//ランダムで背景を表示させるプログラム
var random_bg = function () {
    //1~100までの乱数を発生
    var rrand = round(((Math.random() * 99) + 1), 1);
    //console.log(round(rrand, 1));

    //排出率0.9%の画像
    if (99.1 <= rrand) {
        //url以下を使用したい画像へのパスにしてください
        $('#wrapper').css('background-image', 'url(img/xxxxx.png)');
    } else if (95.5 <= rrand && rrand < 99.1) {
        //排出率が4.5%の画像
        //url以下を使用したい画像へのパスにしてください
        $('#wrapper').css('background-image', 'url(img/yyyyy.png)');
    } else if (55.5 <= rrand && rrand < 95.5) {
        //排出率が40%の画像
        //url以下を使用したい画像へのパスにしてください
        $('#wrapper').css('background-image', 'url(img/zzzzz.png)');
    } else {
        //それ以外の画像
        //url以下を使用したい画像へのパスにしてください
        $('#wrapper').css('background-image', 'url(img/nnnnn.png)');
    }
};
