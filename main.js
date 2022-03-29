/*
* Đầu vào:
- Số nguyên n
* Xử lí:
- Tạo hàm kiểm tra số nguyên tố
- Khai báo biến số nguyên
- Nếu số nguyên nhỏ hơn 2 thì yêu cầu nhập lại
- Khơi tạo biến kết quả
- Sử dụng vòng lặp for với điều kiện if
- Gọi hàm kiểm tra số nguyên tố, nếu giá trị bằng true thì cộng dồn vào biến kết quả
* Đầu ra:
- In ra màn hình các số nguyên tố từ 1 đến n
*/

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
  if (n < 2) {
    alert("Bạn hãy nhập số lớn hơn 2");
  } else {
    var result = "";
    for (var i = 0; i <= n; i++) {
      if (checkPrimeNumber(i) == true) {
        result += i + " ";
      }
    }
    document.getElementById("primeNumber").innerHTML = result;
  }
});
