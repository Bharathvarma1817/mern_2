<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Train Animation</title>
    <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
        }

        

        .train {
            position: absolute;
            top: 50px;
            left: 0;
        }

        

        .controls button {
            margin: 0 5px;
            padding: 5px 10px;
        }

        
    </style>
</head>
<body>
    <div class="container" style="position: relative;
    width: 100%;
    height: 200px;">
        <img src="train.png" alt="Train" class="train" id="train">
    </div>
    <div class="title" style="color: blue;
    font-weight: bold;
    margin-top: 100px;">
        Click the following buttons to handle animation
    </div>
    <div class="controls" style=" margin-top: 20px;">
        <button onclick="startAnimation()">Start</button>
        <button onclick="stopAnimation()">Stop</button>
    </div>

    <script>
        var train = document.getElementById('train');
        var animationId;
        var position = 0;

        function startAnimation() {
            clrInterval(animationId);
            animationId = setInterval(frame, 10);
        }

        function stopAnimation() {
            clrInterval(animationId);
        }

        function frame() {
            if (position >= window.innerWidth) {
                position = -train.width;
            } else {
                position++;
                train.style.left = position + 'px';
            }
        }
    </script>
</body>
</html>
