var Closure = (function () {

    var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];

    var btnHandler = function(n) {
        return function(e) {
            alert(prizes[n]);
        }
    };

    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
        // for each of our buttons, when the user clicks it...
        document.getElementById('btn-' + btnNum).onclick = btnHandler(btnNum);
    }




    var str = 'sdfsdfsytrewuirf',
        reversedStr = '';

    for (var i = str.length - 1; i > -1 ; i--) {
        reversedStr += str[i];
    };

    console.log('array: ' + str.split('').join('') + ' -> ' + str.split('').reverse().join(''));
    console.log(str + ' -> ' + reversedStr);

}());
