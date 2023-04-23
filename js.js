function move_ball() {
  var canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
 


  var colors = ['red','yellow','pink','purple','grey','gold','blue','brown'];

  var ball = {
    color:'blue',
    size:10,
    ballX: canvas.width / 2,
    ballY: canvas.height / 2,
    ballSpeedX: 0.2,
    ballSpeedY: 0.2
  }

  function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(ball.ballX, ball.ballY, ball.size, 0, Math.PI*2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.font = "9px Arial";
    ctx.fillStyle = "#6ced09";
    ctx.fillText('DVD', ball.ballX-9, ball.ballY+3);
  }

  function updateBallPosition() {
    ball.ballX += ball.ballSpeedX;
    ball.ballY += ball.ballSpeedY;
    let color = colors[Math.floor(Math.random() * 7)];
    if (ball.ballX < ball.size || ball.ballX > canvas.width - ball.size) {
      ball.ballSpeedX = -ball.ballSpeedX;
      ball.color = color;
    }
    if (ball.ballY < ball.size || ball.ballY > canvas.height - ball.size) {
      ball.ballSpeedY = -ball.ballSpeedY;
      ball.color = color;
    }
  }

  setInterval(function() {
    drawBall();
    updateBallPosition();
  }, 1);
}

move_ball();