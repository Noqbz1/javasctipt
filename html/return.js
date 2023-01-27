function Sayhello(username , userlastname ){ //username เป็น parameter เหมือนเป็น ตัวแปรตัวหนึ่งไว้เก็บค่า / Parameter = ตัวแปรที่เกิดมาพร้อมกับ function มีหน้าที่เอาไว้ใช้งานใน function นั้นๆ

    return "Hello " + username + " " + userlastname// return เป็นการโยนข้อมูล "Hello"ออกไปนอก function ส่งออกไปที่ alert  
                               // + username คือการรับข้อมูลจาก alert ที่ป้อนข้อมูลมาให้ function 
}
let userinput = prompt("in put your name") // เป็นป้อนข้อมูลลงใรตัวแปร userinput
alert(Sayhello(userinput , "Perfectz")) // alert รับข้อมูลจาก return ใน fucntion Sayhello แต่ userinput เป็นการป้อนข้อมูลกลับเข้าไปใน function  
                                        // userinput คือ argument / argument คือ ข้อมูลที่ส่งให้ function

/* ลำดับการทำงาน 
1. เมื่อเรียนใช้ function คือ คำสั่ง(alert(Sayhello((userinput)) จะทำงาน โดยการส่ง ค่า return ออกไป คือ "hello "
2. เมื่อส่งออกไปแล้ว จะเป็นคำว่า Hello 
3. แต่ในคำสั่ง (alert(Sayhello((userinput)) ตรงคำว่า userinput เป็นการนำข้อมูลกลับไปที่ function Sayhello ที่ตัวแปร username
4. แล้ว function Sayhello ทำงาน คือ  return "Hello " + username แปลว่า การส่งค่า "Hello" +กับ ตัวแปร username ออกไปนอก function ไปที่ บรรทัดที่ 6 
5. การแสดงผลคือ  alert ที่มีข้อความว่า  Hello ตามด้วยข้อมูล ใน userinput */