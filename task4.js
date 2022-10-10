const printVal = function (a, b) {
  let timer = setInterval(function() {
    if (a == b) {
      clearInterval(timer);
    }
    console.log(a)
    a++;
  }, 1000);
}