<!DOCTYPE html>
<html>
<head>
<title>Train Animation</title>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.train {
  width: 200px;
  height: 100px;
  background-image: url("https://i.imgur.com/O0b0Q1C.png");
  background-size: cover;
  position: relative;
  animation: trainAnimation 5s linear infinite;
}

.smoke {
  position: absolute;
  top: 50px;
  left: 150px;
  width: 50px;
  height: 20px;
  background-color: #ccc;
  opacity: 0.5;
  border-radius: 50%;
  animation: smokeAnimation 2s linear infinite;
}

@keyframes trainAnimation {
  0% {
    left: 0;
  }
  100% {
    left: 90%;
  }
}

@keyframes smokeAnimation {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}

.buttons {
  display: flex;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
</head>
<body>
<div class="container">
  <h1 style="color: darkgreen;">Task-7</h1>
  <div class="train"></div>
  <div class="smoke"></div>
  <div class="buttons">
    <button id="start">Start</button>
    <button id="stop">Stop</button>
  </div>
</div>

<script>
  const train = document.querySelector('.train');
  const smoke = document.querySelector('.smoke');
  const startBtn = document.getElementById('start');
  const stopBtn = document.getElementById('stop');

  startBtn.addEventListener('click', () => {
    train.style.animationPlayState = 'running';
    smoke.style.animationPlayState = 'running';
  });

  stopBtn.addEventListener('click', () => {
    train.style.animationPlayState = 'paused';
    smoke.style.animationPlayState = 'paused';
  });
</script>
</body>
</html>