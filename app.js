(function () {
    "use strict";

    angular.module('ma', [])
        .controller('mc', function ($scope) {
            $scope.name = '';

            $scope.sh = function () {
                return "Hello"
            };
            
            $scope.val = 0;

            $scope.msg=function(){
                return 
            };

            $scope.disp = function () {
                var totvalue = calc($scope.name);
                $scope.val = totvalue;
            };
            function calc(string) {
                var stringval = 0;
                for (var i = 0; i < string.length; i++) {
                    stringval += string.charCodeAt(i);
                }
                return stringval;
            };

            $scope.state='hungry';
            $scope.feed= function(){
                $scope.state='full';
            };
        });
})();


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
// !function(){"use strict";function e(e,n){e.name="haha",e.upper=function(){var a=n("uppercase");e.name=a(e.name)}}angular.module("di",[]).controller("dc",e),e.$inject=["$scope","$filter"]}();