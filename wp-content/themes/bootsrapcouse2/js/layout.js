function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);


// cách 1: ko cần id , bên html truyền this vào (this = element)
// ưu điểm nếu có quá nhiều thằng sử dụng func này thì sẽ ko bị trùng 
// click thằng nào thì thằng đó chạy
function movear(e) {
  // var result = document.getElementById("result");
  // kiểm tra có class chưa 
  if (e.classList.contains("movedown")) {
    e.classList.remove("movedown");
  } else{
    e.classList.add("movedown");
  }
}
// cách 2: tìm kiếm bằng id 
// nhược điểm nếu có quá nhiều thằng sử dụng func này thì sẽ bị trùng 
// click 1 thằng thì tất cả những thằng có gọi onclick tới func này đều sẽ chạy cùng 1 lúc
// function movear() {
//   var result1 = document.getElementById("result1");
//   kiểm tra có class chưa 
//   if (result1.classList.contains("movedown")) {
//     result1.classList.remove("movedown");
//   } else{
//     result1.classList.add("movedown");
//   }
// }
