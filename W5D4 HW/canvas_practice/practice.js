  var canvas = document.getElementById('mycanvas');
  var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fillStyle = 'red';
    ctx.fill();


  // const canvasEl = document.getElementById('mycanvas');
  // const ctx = canvasEl.getContext('2d');
  //
  // canvasEl.width = 500;
  // canvasEl.height = 500;
  //
  // ctx.fillStyle = 'red'; // sets color to fill in rectangle
  // ctx.fillRect(0, 0, 500, 500); // draws rect at pos 10, 10, with a width and height of 500
  //
  // // To draw circle
  // ctx.beginPath();
  // ctx.arc(75, 75, 50, 0, 2 * Math.PI);
  // ctx.strokeStyle = 'green';
  // ctx.stroke();
  //
  // // To fill circle
  // ctx.fillStyle = 'blue';
  // ctx.fill();
// });
