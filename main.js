function checkPrimeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

document.getElementById("btnPrimeNumber").addEventListener("click", function () {
  var n = document.getElementById("txtNumber").value;
  var result = "";
  for (var i = 0; i < n; i++) {
    if (checkPrimeNumber(i) == true) {
      result += i + " ";
    }
  }
  document.getElementById("primeNumber").innerHTML = result;
});
