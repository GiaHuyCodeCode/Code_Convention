

// LỖI 1
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

// biến bị viết tắt khó hiểu
let u = "usr"; // ❌ Lỗi: u quá ngắn, usr không rõ nghĩa
let pw = "123456"; // ❌ Lỗi: Hardcode password trong code

// không rõ đơn vị
function wait(time){return new Promise(r=>setTimeout(r,time))} // ❌ Lỗi: time không rõ là ms/seconds

// tên mơ hồ, không mô tả ý nghĩa
function handle(){console.log("handling...")} // ❌ Lỗi: handle quá chung chung, log không mô tả rõ hành động

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
