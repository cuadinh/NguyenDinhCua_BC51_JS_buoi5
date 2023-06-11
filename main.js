// BAI 1 QUAN LY SINH VIEN


var diemMon_1 = 0;
var diemMon_2 = 0;
var diemMon_3 = 0;
var diemTongKet = 0;

function getEle(id) {
  return document.getElementById(id);
}

getEle("btnResult").onclick = function () {
  diemChuan = Number(getEle("inputScore1").value);
  diemMon_1 = Number(getEle("inputScore2").value);
  diemMon_2 = Number(getEle("inputScore3").value);
  diemMon_3 = Number(getEle("inputScore4").value);
  var diemKhuVuc = Number(getEle("selLocation").value);
  var diemDoiTuong = Number(getEle("selUser").value);
  var diemChuan = Number(getEle("selUser").value);

  diemTongKet = diemMon_1 + diemMon_2 + diemMon_3 + diemKhuVuc + diemDoiTuong;

  if (diemMon_1 === 0 || diemMon_2 === 0 || diemMon_3 === 0 || diemTongKet<diemChuan) {
    getEle("txtResult").innerHTML = "Kết quả: Bạn đã rớt";
  } else {
   getEle("txtResult").innerHTML = "Kết quả: Bạn đã đậu";

  }
};
