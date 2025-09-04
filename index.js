


//=============================================ISSUE 1: AVOID MAGIC NUMBER ================================================================================

var a = 123 // ❌ Lỗi: Tên biến a quá chung chung, 123 là magic number, không rõ đơn vị
var tmp = "http://abc.com" // ❌ Lỗi: tmp không mô tả rõ ý nghĩa
var arr=[1,2,3,4,5] // ❌ Lỗi: format kém, magic data không có giải thích

//============================================================CLEAN CODE================================================================================

// Định nghĩa URL mẫu và số mẫu để test
const SAMPLE_URL= "http://abc.com";
const SAMPLE_NUMBERS= [1, 2, 3, 4, 5];

// Hằng số thay cho magic number
const MAGIC_OFFSET = 42;
const THRESHOLD_VALUE = 100;
const DOUBLE_FACTOR = 2;
const WEIGHT_FACTOR = 5;
const WAIT_DURATION_MS = 1000;
const LOAD_DELAY_LEVEL1_MS = 100;
const LOAD_DELAY_LEVEL2_MS = 200;
const LOAD_DELAY_LEVEL3_MS = 300;

//============================================================END CLEAN CODE================================================================================













//=============================================ISSUE 2: Poor Code Readability due to Inconsistent Naming, Magic Values, and Ambiguous Identifiers ================================================================================


// hàm tên viết hoa lung tung, làm nhiều việc
function DoIt(x,y){return x+y+42} // ❌ Lỗi: Tên hàm mơ hồ, viết hoa không chuẩn, chứa magic number 42

// hàm viết tắt, không rõ ràng
function calc(d,t){ // ❌ Lỗi: d, t viết tắt khó hiểu
 if(d>100){return d*2+t*5}else{return d+t}} // ❌ Lỗi: magic number 100, 2, 5 không có tên

// hàm với biến stuff, meaningless
function prc(stuff){ // ❌ Lỗi: Tên hàm prc không rõ nghĩa, biến stuff mơ hồ
for(var i=0;i<stuff.length;i++){console.log(stuff[i])}} // ❌ Lỗi: format kém, dùng var thay vì let/const

// không consistent: hàm viết thường, có chỗ viết hoa
function Get(u){return 999} // ❌ Lỗi: Tên Get quá chung chung, 999 là magic number
function fetch(u){return "data"} // ❌ Lỗi: data là magic string
function DOWNLOAD(u){return true} // ❌ Lỗi: Tên hàm in hoa không consistent


//============================================================CLEAN CODE================================================================================

// Hàm cộng thêm offset rõ ràng
function addWithOffset(firstValue, secondValue){
    return firstValue + secondValue + MAGIC_OFFSET;
}

// Hàm tích điểm với hệ số rõ ràng
function calculateScore(dateValue,weightValue){
    if(dateValue > THRESHOLD_VALUE){
       return dateValue * DOUBLE_FACTOR + weightValue * WEIGHT_FACTOR;
    }
    return dateValue + weightValue;
}

// Hàm in phần tử của mảng
function printArrayElements(elementsArray){
    for(let index=0; index < elementsArray.length;index++){
        console.log(elementsArray[index]);
    }
}

// Hàm fetch dữ liệu từ URL (mock)
function fetchDataFromUrl(requestUrl){
    return 999; // mock data
}

// Hàm lấy dữ liệu text từ URL (mock)
function fetchTextFromUrl(requestUrl){
    return "data";
}

// Hàm kiểm tra URL có thể download không
function canDownloadFromUrl(requestUrl){
    return true;
}

//============================================================END CLEAN CODE================================================================================









//=============================================ISSUE 3: Poor Code Readability and Maintainability================================================================================

// biến global lung tung
val=0; // ❌ Lỗi: Khai báo biến global không an toàn
 globalThing=12345; // ❌ Lỗi: Biến global không khai báo var/let/const, magic number

// formatting lộn xộn
function doSomething( p ,q){ // ❌ Lỗi: spacing không đều
let   r=p+q;return r; } // ❌ Lỗi: thụt lề sai, code dính liền

// comment sai lệch: nói A làm B
// tính trung bình nhưng thực ra cộng hết // ❌ Lỗi: comment sai chức năng
function avg(x){
var sum=0;for(let i=0;i<x.length;i++){sum+=x[i]}return sum;} // ❌ Lỗi: tên avg gây hiểu nhầm (hàm trả tổng chứ không phải trung bình)

// nested callback hell
function load(cb){setTimeout(()=>{setTimeout(()=>{setTimeout(()=>{cb("ok")},100)},200)},300)} // ❌ Lỗi: callback hell, magic number 100/200/300


//============================================================CLEAN CODE================================================================================

// Biến toàn cục đặt tên rõ ràng
let globalCounter = 0;
let globalCacheSize = 12345;


// Hàm cộng 2 số rõ ràng
function sumTwoNumbers(firstNumber, secondNumber) {
const result = firstNumber + secondNumber;
return result;
}


// Hàm tính tổng mảng giá trị
function sumArrayValues(valuesArray) {
let total = 0;
for (let index = 0; index < valuesArray.length; index++) {
total += valuesArray[index];
}
return total;
}


// Hàm tính trung bình mảng
function averageArrayValues(valuesArray) {
if (valuesArray.length === 0) return 0;
const total = sumArrayValues(valuesArray);
return total / valuesArray.length;
}


// Hàm chờ có hậu tố ms
function waitForDuration_ms(durationMs) {
return new Promise(resolve => setTimeout(resolve, durationMs));
}


// Hàm load dữ liệu tránh callback hell
async function loadDataAsync() {
await waitForDuration_ms(
LOAD_DELAY_LEVEL1_MS + LOAD_DELAY_LEVEL2_MS + LOAD_DELAY_LEVEL3_MS
);
return "ok";
}

//============================================================END CLEAN CODE================================================================================





// logic viết thẳng, không tách hàm
function main(){
  var q=DoIt(5,6); // ❌ Lỗi: magic number, tên q quá ngắn
  prc([1,2,3]) // ❌ Lỗi: magic data, tên hàm mơ hồ
  console.log("done"+q+val) // ❌ Lỗi: nối chuỗi lộn xộn

  if(globalThing>100){console.log("big")} // ❌ Lỗi: magic number 100
  else if(globalThing==12345){console.log("magic!")} // ❌ Lỗi: magic number 12345
  else console.log("meh") // ❌ Lỗi: meh không rõ nghĩa

  let data = Get(tmp) // ❌ Lỗi: Get mơ hồ
  let d2 = fetch(tmp) // ❌ Lỗi: d2 viết tắt
  let d3 = DOWNLOAD(tmp) // ❌ Lỗi: tên in hoa không consistent
  console.log(data+d2+d3) // ❌ Lỗi: nối chuỗi bừa bãi

  wait(1000) // ❌ Lỗi: magic number 1000, không rõ ms/seconds
  .then(()=>{
    load(res=>{ // ❌ Lỗi: callback hell
      console.log("loaded:"+res)
    })
  })
}

main();
