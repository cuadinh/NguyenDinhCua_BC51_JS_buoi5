// BAI 1 QUAN LY SINH VIEN
// 
//  DOI_TUONG_1 = 2.5;
//  DOI_TUONG_2 = 1.5;
//  DOI_TUONG_3 = 1;

//  KHU_VUC_A = 2;
//  KHU_VUC_B = 1;
//  KHU_VUC_C = 0.5;

// KHAI BAO BIEN

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

  //    console.log(diemKhuVuc);
  if (diemMon_1 === 0 || diemMon_2 === 0 || diemMon_3 === 0 || diemTongKet<diemChuan) {
    getEle("txtResult").innerHTML = "Kết quả: Bạn đã rớt";
  } else {
   getEle("txtResult").innerHTML = "Kết quả: Bạn đã đậu";

  }
};


//BAI 2: TÍNH TIỀN ĐIỆN
/**
 * Viết chương trình nhập vào thông tin tiêu thụ điện 
 * Tinh và xuất tiền trả theo quy tắc:
 * 50kw đầu : 500d/kw
 * 50kw kế : 650d/kw
 * 100kw kế : 850d/kw
 * 150kw kế : 1100d/kw
 * còn lại: 1300d/kw
 * 
 */

var KM_50 = 500;
var KM_100 = 650;
var KM_200 = 850;
var KM_350 = 1100;
var KM_CON_LAI = 1300;
var tongTienDien = 0;


getEle("btnElecBill").onclick = function(){
    var hoTen = getEle("inputName").value;
    var SoKm = Number(getEle("inputKW").value);
    if(SoKm>0 && SoKm <=50){
        tongTienDien = SoKm * KM_50;
    }else if ( SoKm >50 && SoKm <=100){
        tongTienDien = 50 * KM_50 + (SoKm - 50) * KM_100;

    }else if (SoKm >100 && SoKm <=200){
        tongTienDien = 50 * KM_50 + 50 * KM_100 + (SoKm - 100)*KM_200;
    }else if (SoKm >200 && SoKm <=350){
        tongTienDien = 50 * KM_50 + 50 * KM_100 + 100*KM_200 + (SoKm - 200) * KM_350;

    }else if (SoKm >350){
        tongTienDien = 50 * KM_50 + 50 * KM_100 + 100*KM_200 + 150 * KM_350 + (SoKm - 350)*KM_CON_LAI;
        console.log(tongTienDien);

    }

    getEle("txtElecBill").innerHTML = "Tên Khách Hàng: " + hoTen + " - " + "Tổng tiền điện: " + tongTienDien;

}

