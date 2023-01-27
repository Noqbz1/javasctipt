function toCelsius(temp){  // temp1 รับค่าจาก toCelsius(value))  
    let value = (temp - 32)* 5 / 9 // นำมาคำนวณแล้วเก็บค่าส่งใน value
    return value.toFixed(1) + " °C" ;  // ส่งข้อมูลออกไปแสดงที่ (toCelsius(value))
}
function display(elementId , value) 
{ 
    document.getElementById(elementId).innerHTML = value //นำไปแสดงใน html ด้วยชื่อ id คือ elementId และค่าที่นำไปแสดงคือ value
}                                                      
function toFahrenheit(temp){
    let value = 9/5*temp + 32 
    return value.toFixed(1) + " °F" ;
}
function toCelsiusprogram(value) // รับค่า value จาก html
{
    display("toCelsius" , toCelsius(value)) // ส่งข้อมูลให้ Function display 2ตัวแปรคือ  "toCelsius" เป็น ชื่อ id และ toCelsius(value) คือค่า ค่าที่ได้จาก function toCelsius กลับออกมา
}
function toFahrenheiprogram(value)
{
    display("toFahrenheit" , toFahrenheit(value))
}

