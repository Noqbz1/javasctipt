
let round = prompt("คุณจะเล่นกี่รอบ")
var sum = 0
for (var i = 1 ; i <= round ; i++){
    var answer = prompt("คุณจะเลือกหัว หรือ ก้อย")
    var random_ans = ""
   if (Math.floor(Math.random() * 10 ) <= 4){
        // หัว
        random_ans = "หัว"
    }
    else {
        //ก้อย
        random_ans = "ก้อย"
    }
    if(answer == random_ans){
        sum = sum + 1
        console.log("คุณตอบถูก")
    }
    else{
        sum = sum + 0
        console.log("คุณตอบผิด")
    }
    document.getElementById("list").innerHTML += "รอบที่ " + i + "คุณเลือก : " + answer + "  " + " ผลลัพธ์คือ :" +  random_ans + "<br>"
    console.log(random_ans + " : " + answer)
    console.log(sum)
}
document.getElementById("score").innerHTML = "คุณได้คะแนน : " + sum + " คะแนน"