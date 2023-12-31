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
  if (
    diemMon_1 === 0 ||
    diemMon_2 === 0 ||
    diemMon_3 === 0 ||
    diemTongKet < diemChuan
  ) {
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

getEle("btnElecBill").onclick = function () {
  var hoTen = getEle("inputName").value;
  var SoKm = Number(getEle("inputKW").value);
  if (SoKm > 0 && SoKm <= 50) {
    tongTienDien = SoKm * KM_50;
  } else if (SoKm > 50 && SoKm <= 100) {
    tongTienDien = 50 * KM_50 + (SoKm - 50) * KM_100;
  } else if (SoKm > 100 && SoKm <= 200) {
    tongTienDien = 50 * KM_50 + 50 * KM_100 + (SoKm - 100) * KM_200;
  } else if (SoKm > 200 && SoKm <= 350) {
    tongTienDien =
      50 * KM_50 + 50 * KM_100 + 100 * KM_200 + (SoKm - 200) * KM_350;
  } else if (SoKm > 350) {
    tongTienDien =
      50 * KM_50 +
      50 * KM_100 +
      100 * KM_200 +
      150 * KM_350 +
      (SoKm - 350) * KM_CON_LAI;
    console.log(tongTienDien);
  }

  getEle("txtElecBill").innerHTML =
    "Tên Khách Hàng: " + hoTen + " - " + "Tổng tiền điện: " + tongTienDien;
};
// Bài 3: TÍNH TIỀN THUẾ THU NHẬP CÁ NHÂN

// var bac_5 = 0.05;
// var bac_10 = 0.1;
// var bac_15 = 0.15;
// var bac_20 = 0.2;
// var bac_25 = 0.25;
// var bac_30 = 0.3;
// var bac_35 = 0.35;

// Thu nhap chiu thue = (tong thu nhap) - 4tr - (so nguoi phu thuoc) *1.6tr

function tinhThuNhapChiuThue(tongThuNhap, soNguoiPhuThuoc) {
  var TNCT = tongThuNhap - 4000000 - 1600000 * soNguoiPhuThuoc;
  return TNCT;
}

getEle("btnTax").onclick = function () {
  var tenCaNhan = getEle("inputName2").value;
  var tongThuNhap = getEle("inputSalary").value;
  var soNguoiPhuThuoc = getEle("inputUser").value;
  var tienThue = 0;
  var thuNhapChiuThue = tinhThuNhapChiuThue(tongThuNhap, soNguoiPhuThuoc);
  if (thuNhapChiuThue <= 60000000) {
    tienThue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    tienThue = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    tienThue =
      60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    tienThue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      120000000 * 0.15 +
      (thuNhapChiuThue - 210000000) * 0.2;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    tienThue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      120000000 * 0.15 +
      174000000 * 0.2 +
      (thuNhapChiuThue - 384000000) * 0.25;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    tienThue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      120000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      (thuNhapChiuThue - 624000000) * 0.3;
  } else if (thuNhapChiuThue > 960000000) {
    tienThue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      120000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      336000000 * 0.3 +
      (thuNhapChiuThue - 960000000) * 0.35;
  }
  getEle("txtTax").innerHTML =
    "Tên: " +
    tenCaNhan +
    " - " +
    "Tiền thuế thu nhập cá nhân: " +
    tienThue.toLocaleString() +
    " VND";
};

//BÀI 4: TÍNH TIỀN CÁP
function disableInput() {
  var loaiKH = getEle("selCustomer").value;
  if (loaiKH == "company") {
    getEle("inputConnect").style.display = "block";
  } else {
    getEle("inputConnect").style.display = "none";
  }
  return loaiKH;
}

var PHI_XU_LY_HD_DAN = 4.5;
var PHI_DV_CO_BAN_DAN = 20.5;
var THUE_KENH_CAO_CAP_DAN = 7.5;

var PHI_XU_LY_HD_CTY = 15;
var PHI_DV_CO_BAN_CTY = 75;
var THUE_KENH_CAO_CAP_CTY = 50;
var DAU_KET_NOI_THEM = 5;

var typeKH = "";
var tienCap = 0;
getEle("btnNet").onclick = function () {
  typeKH = disableInput();
  var inputID = getEle("inputID").value;
  var inputChanel = getEle("inputChanel").value;
  var inputConnect = getEle("inputConnect").value;
  if(typeKH == "" || inputID == "" || inputChanel ==""){
    getEle("txtNet").innerHTML = "Vui long loại đầy đủ loại KH, mã KH, Kênh " 

  }else{
    if ((typeKH == "user")) {
      tienCap = PHI_XU_LY_HD_DAN + PHI_DV_CO_BAN_DAN + THUE_KENH_CAO_CAP_DAN * inputChanel;
  
    } else if (typeKH == "company") {
      if (inputConnect <= 10) {
      tienCap = PHI_XU_LY_HD_CTY + PHI_DV_CO_BAN_CTY + THUE_KENH_CAO_CAP_CTY * inputChanel ;
      }else{
      tienCap = PHI_XU_LY_HD_CTY + PHI_DV_CO_BAN_CTY + THUE_KENH_CAO_CAP_CTY * inputChanel + DAU_KET_NOI_THEM * (inputConnect - 10);
      }
  
    }
    getEle("txtNet").innerHTML = "Mã Khách Hàng: " + inputID + " - " + "Tiền cáp: $" + tienCap
  }
};
