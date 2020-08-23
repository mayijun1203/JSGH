var x = "Hey u";



function a(x, y) {
    x = x || 1;
    y = y || 0;
    if (x == y) {
        return "same";
    } else {
        return "different";
    }
}
console.log(a('4', 4))
console.log(a())


function b(x, y) {
    if (x === y) {
        return "same";
    } else {
        return "different";
    }
}
console.log(b('4', 4))


var sum = 0
for (var i = 0; i < 10; i++) {
    sum += i;
}
console.log(sum)


var c = new Object();
c.name = 'haha'
c.title = new Object();
c.title.first = 'a';
c.title.second = 'b';
console.log(c)
console.log(c.title.second)
console.log(c['title'])

var d = {
    name: 'haha',
    'title title': {
        first: 'a',
        second: 'b'
    }
};
console.log(d)


function mm(mt) {
    var mf = function (x) {
        return mt * x;
    };
    return mf
}
var m3 = mm(3);
console.log(m3(2))

var e = 10;
var f = e;
f = 20;
console.log(e)

var g = { x: 10 };
var h = g;
h.x = 20;
console.log(g)


function cc(rd) {
    this.radius = rd;
}
cc.prototype.ar =
    function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
var mc = new cc(10);
console.log(mc);
console.log(mc.ar());



var lc = {
    radius: 10,
    ga: function () {
        return Math.PI * Math.pow(this.radius, 2);
    }
};
console.log(lc);
console.log(lc.ga());


var j = new Array;
j[0] = 'a';
j[1] = 1;
j[2] = function (x) { return x + 1; };
j[3] = { d: 'd' };
console.log(j);
console.log(j[2](j[1]));


var k = ['a', 1, function (x) { return x + 1; }, { d: 'd' }];
k[100] = 0
console.log(k);
for (var i = 0; i < k.length; i++) {
    console.log(k[i]);
};


var l = {
    a: 'a',
    b: 2,
    c: undefined
};
console.log(l)
for (var prop in l) {
    console.log(prop + ':' + l[prop]);
};


(function () {
    var m = 'a'
    console.log(m);
})();

(function () {
    var m = 'b'
    console.log(m);
})();


console.log(document.getElementById('logo-img'));

function sh() {
    this.textContent = 'done';
    var sn = document.getElementById("shname").value;
    var msg = "Hey " + sn + "!";
    var msg2 = "<h2>Hey " + sn + "!</h2>";
    document.getElementById("shcontent").textContent = msg;
    document.getElementById("shcontent2").innerHTML = msg2;
    if (sn === 'haha') {
        document.querySelector(".title").textContent = "so good";
    }
}


document.querySelector("#bc").addEventListener("click", sh);
document.querySelector("#bc2").onclick = sh;

document.querySelector("body")
    .addEventListener("mousemove",
        function (event) {
            if (event.shiftKey === true) {
                console.log('x: ' + event.clientX);
                console.log('y: ' + event.clientY);
            }
        });




document.addEventListener("DOMContentLoaded",
    function (event) {
        document.querySelector("#bc3")
            .addEventListener("click", function () {
                $ajaxUtils
                    .sendGetRequest("/data/name.json",
                        function (res) {
                            var msg = res.first + " " + res.last;
                            if (res.like) {
                                msg += " does like ";
                            }
                            else {
                                msg += " desn't like ";
                            }
                            msg += "and is ranked " + res.rank;
                            document.querySelector("#ct")
                                .innerHTML = "<h2>" + msg + "</h2>";
                        });

            });
    }
);