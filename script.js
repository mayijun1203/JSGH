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
    name:'haha',
    'title title':{
        first:'a',
        second:'b'
    }
};
console.log(d)