define("lib/utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sayHello = void 0;
    function sayHello(name) {
        return "Hello, " + name;
    }
    exports.sayHello = sayHello;
});
define("index", ["require", "exports", "lib/utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var body = document.getElementsByTagName('body')[0];
    var parapraph = document.createElement('h1');
    var hello = utils_1.sayHello('World');
    body.appendChild(parapraph);
    parapraph.innerHTML = hello;
    console.log(hello);
});
