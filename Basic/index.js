"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (res) {
    var _a = res.data, id = _a.id, title = _a.title, completed = _a.completed;
    logFunction(id, title, completed);
});
var logFunction = function (id, title, completed) {
    console.log("The is " + id + ".\n  The title is " + title + "\n  The status is " + completed);
};
