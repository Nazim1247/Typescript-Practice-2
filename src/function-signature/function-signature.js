var userInfo;
var userInfo1;
var userInfo2;
userInfo = function () {
    console.log('nazim uddin');
};
userInfo1 = function (name) {
    console.log(name);
};
userInfo2 = function (name, age) {
    return "".concat(name, " ").concat(age);
};
userInfo();
userInfo1('nazim');
console.log(userInfo2('nazim', 25));
