function foo(x) {
  if (x === null || x === undefined || typeof x.length !== 'number') {
    return 0; // Handle null, undefined, and non-string/array inputs
  }
  return x.length;
}
//Additional handling for other cases like checking if x is an array before accessing length
function foo2(x){
    if(!Array.isArray(x) && typeof x !== 'string'){
        return 0;
    }
    return x.length;
}