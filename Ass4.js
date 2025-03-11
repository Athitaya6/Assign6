<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>รับค่าผ่าน Prompt</title>
</head>
<body>
    <h2>ข้อมูลของฉัน:</h2>
    <ol id="list"></ol>
    <button onclick="addItems()">เพิ่มข้อมูล</button>

    <script>
        let items = [];

        function addItems() {
            let input = prompt("ป้อนค่าที่ต้องการเพิ่ม (กด Cancel เพื่อหยุดหรือสำเร็จ)");
            while (input !== null) { 
                items.push(input);
                input = prompt("กรุณากรอกข้อมูลที่ต้องการเพิ่ม (กด Cancel เพื่อหยุดหรือสำเร็จ)");
            }
            displayItems();
        }

        function displayItems() {
            let list = document.getElementById("list");
            list.innerHTML = "";
            items.forEach(item => {
                let li = document.createElement("li");
                li.textContent = item;
                list.appendChild(li);
            });
        }
    </script>
</body>
</html>
