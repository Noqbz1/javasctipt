let qrt = prompt("จำนวนสินค้า")
let sum = 0
for(var i = 1 ; i <= qrt ; i++)
{
    let item_price = prompt("ราคาสินค้าชิ้นที่"+ i)
    sum = sum + parseInt(item_price) // parse เป็นการเป็น ชนิดของตัวแปล
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่" + i +": " +item_price + "บาท" + "<br>" //การใส่ += คือการเพิ่มข้อมูลที่จะใส่ไปเรื่อยๆ 
}
document.getElementById("result").innerHTML = "ราคาสินค้าทั้งหมด :"  + sum + "บาท"
