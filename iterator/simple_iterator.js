const myIterator = {
next : function () {
return {value : 1 ,done : false}
},
[Symbol.iterator] : function () {
return this
}
}