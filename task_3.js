
<!DOCTYPE html>
<html>
<head>
    <title>JS Task-3</title>
    <script>
        function multiply() {
            var num1 = parseFloat(document.getElementById('num1').value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var result = num1 * num2;
            document.getElementById('result').innerText = "The Result Is: " + result;
        }

        function divide() {
            var num1 = parseFloat(document.getElementById('num1').value);
            var num2 = parseFloat(document.getElementById('num2').value);
            if (num2 !== 0) {
                var result = num1 / num2;
                document.getElementById('result').innerText = "The Result Is: " + result;
            } else {
                document.getElementById('result').innerText = "Division by zero is not allowed.";
            }
        }
    </script>
</head>
<body>
    <h2>Multiplication and Division</h2>
    <form>
        1st Number: <input type="text" id="num1"><br><br>
        2nd Number: <input type="text" id="num2"><br><br>
        <button type="button" onclick="multiply()">Multiplying</button>
        <button type="button" onclick="divide()">Dividing</button>
    </form>
    <p id="result">The Result Is:</p>
</body>
</html>