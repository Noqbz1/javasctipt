function toCelsius(temp){  // temp1 รับค่าจาก alert(toCelsius(150)) ค่าคือ 150 
    let value = (temp - 32)* 5 / 9 // นำมาคำนวณแล้วเก็บค่าส่งใน value
    return value.toFixed(1) + " °C" ;  // ส่งข้อมูลออกไปแสดงที่ alert(toCelsius(150))
}
function display(elementId , value){ // รับค่ามากจาก display("toCelsius", toCelsius(150))
    document.getElementById(elementId).innerHTML = "<b>"+ value+ "</b>" /*นำไปแสดงใน html ด้วยชื่อ id คือ elementId(ในที่นี้คือ "toCelsius") 
                                                            และ value คือ toCelsius(150))*/
}
//alert(toCelsius(150)) // แสดงผลจาก ฟังชั่น toCelsius
display("toCelsius", toCelsius(150)) // เรียนใช้ฟังชั้น display คือ นำไปแสดงผลใน html โดย elementId  id="toCelsius" และ value คือค่าที่คำนวณได้

function toFahrenheit(temp){
    let value = 9/5*temp + 32 
    return value.toFixed(1) + " °F" ;
}
//alert(toFahrenheit(150))
display("toFahrenhei" , toFahrenheit(150))
