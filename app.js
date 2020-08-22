// (function () {
//     "use strict";

//     angular.module('ma', [])
//         .controller('mc', function ($scope) {
//             $scope.name = '';

//             $scope.sh = function () {
//                 return "Hello"
//             };

//             $scope.val = 0;

//             $scope.msg=function(){
//                 return 
//             };

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

//             $scope.state='hungry';
//             $scope.feed= function(){
//                 $scope.state='full';
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
// !function(){"use strict";function e(e,n){e.name="haha",e.upper=function(){var a=n("uppercase");e.name=a(e.name)}}angular.module("di",[]).controller("dc",e),e.$inject=["$scope","$filter"]}();





(function () {
    "use strict";

    angular.module('di', [])
        .controller('dc', dicontrol)
        .filter('rp', rplc);

    dicontrol.$inject = ['$scope', 'rpFilter', '$timeout'];
    function dicontrol($scope, rpFilter, $timeout) {
        $scope.name = '';

        $scope.sh = function () {
            return rpFilter("Hello");
        };

        $scope.val = 0;

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

        $scope.state = 'hungry';
        $scope.feed = function () {
            $scope.state = 'full';
        };

        $scope.cnter = 0;
        $scope.cnt = function () {
            setTimeout(function () {
                $scope.cnter++;
                $scope.$digest();
            }, 2000);
        };

        $scope.cnter2 = 0;
        $scope.cnt2 = function () {
            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.cnter2++;
                });
            }, 2000);
        };

        $scope.cnter3 = 0;
        $scope.cnt3 = function () {
            $timeout(function () {
                $scope.cnter3++;
            }, 2000);
        };

        $scope.splist1=filteredsplist1;
        $scope.splist2=shoppinglist2;

        $scope.addtosplist=function(){
            var newitem={
                'name':$scope.splist2name,
                'quant':$scope.splist2quant
            };
            $scope.splist2.push(newitem);
        };
    };
})();






function rplc() {
    return function (input) {
        input = input || "";
        input = input.replace('Hello', 'Hi');
        return input;
    };
};

var shoppinglist1=['a','b','c','d'];


var shoppinglist2=[
    {
        'name':'e',
        'quant':2
    },
    {
        'name':'f',
        'quant':5
    },    
    {
        'name':'g',
        'quant':1
    },    
    {
        'name':'h',
        'quant':3
    }
];



function filtera(value){
    return value!=='a';
};

var filteredsplist1=shoppinglist1.filter(filtera);


var parent={
    value:'a',
    obj:{
        objvalue:'b'
    },
    walk:function(){
        console.log('walking');
    }
};

var child = Object.create(parent);
child.obj.objvalue='c'
console.log(child.value);
console.log(child.obj.objvalue);
console.log(child.walk);
console.log(parent.obj.objvalue);


