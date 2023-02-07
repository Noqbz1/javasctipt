# type coversion การแปลงชนิดข้อมูล
x =  20 
y = 3.14 
z = "50"
G = "100"

# บวกเลข 
result1 = x+y # สามารถทำงานได้ เพราะชนิดข้อมูลเป็น ตัวเลขเหมือนกัน
result2 = x+int(z) # ไม่สามารถทำงานได้ เพราะเป็น int กับ str เลยต้องแปลง str ให้เป็น int โดยการใส่ int ข้างหน้าตัวแปร = 20+50 จะเท่ากับ 70
result3 = str(x)+z # ทำการแปลง int ให้เป็ร str โดยการใส่ str ข้างหน้าตัวแปร = "20"+"50" = 2050
float(z) # เป็นการแปลง string ให้เป็น float(เลขทศนิยม) 
G = float(G) # เป็นการแปลงค่าตัวแปลเดิม ให้เปลี่ยนชนิดข้อมูล จาก srting ให้เป็น float(ทศนิยม)
G = G+50.5
print(type(x))
print(type(y))
print(type(z))

print(result1)
print(result2)
print(result3)
print(G)