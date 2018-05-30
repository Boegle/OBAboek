(function () {
'use strict';

console.log('dit is een module');

function test(){
    console.log('test');
}

let app = {
    init: function () {
        test();
    }
};

app.init();

}());
