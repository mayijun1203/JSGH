// (function () {
//     "use strict";

//     angular.module('ma', [])
//         .controller('mc', function ($scope) {
//             $scope.sh = function () {
//                 return "Hello"
//             };
//             $scope.name = '';
//             $scope.val = 0;
//             $scope.disp = function () {
//                 var totvalue = calc($scope.name);
//                 $scope.val = totvalue;
//             };
//             function calc(string) {
//                 var stringval = 0;
//                 for (var i = 0; i < string.length; i++) {
//                     stringval += string.charCodeAt(i);
//                 }
//                 return stringval;
//             };
//         });
// })();


// (function () {
//     "use strict";

//     angular.module('di', [])
//         .controller('dc',  dicontrol);
//     dicontrol.$inject=['$scope','$filter'];
//     function dicontrol($scope, $filter) {
//         $scope.name = 'haha';
//         $scope.upper = function () {
//             var upcase = $filter('uppercase');
//             $scope.name = upcase($scope.name);
//         };
//     };
// })();


// minify
!function(){"use strict";function e(e,n){e.name="haha",e.upper=function(){var a=n("uppercase");e.name=a(e.name)}}angular.module("di",[]).controller("dc",e),e.$inject=["$scope","$filter"]}();