let score = prompt(" คะแนนของคุณ : ")
document.getElementById("test").innerHTML = score
if(score >= 80){
    document.getElementById("result").innerHTML = " Grade A "
}else if (score >= 70) {
    document.getElementById("result").innerHTML = " Grade B "
}else if (score >=60 ){
    document.getElementById("result").innerHTML = " Grade C "
}else if(score >=50 ){
    document.getElementById("result").innerHTML = " Grade D "
}else{
    document.getElementById("result").innerHTML = " Grade F "
}