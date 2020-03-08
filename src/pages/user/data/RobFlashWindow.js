import React, { Component } from 'react';
import './RobFlashWindow.css';
import 'whatwg-fetch';

class Ball {
  constructor() {
    this.x = 0;
    this.y = 400;
    this.radius = 6;
    this.color = 'blue';
  }

  componentDidMount() {
    console.log('start new animation');
  }

  draw = ctx => {
    ctx.beginPath();
    ctx.arc(this.x + 20, this.y + 20, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  };
}

class BotRepo {
  constructor() {
    this.botList = {};
    this.agingTime = {};
    this.botNum = 0;
    this.colorList = ['blue', 'yellow', 'red', 'brown', 'green', 'pink'];
  }

  addRob(id) {
    const ball = new Ball();
    ball.color = this.colorList[(id % this.colorList.length) - 1];
    this.botList[id] = ball;
    this.botNum += 1;
    return ball;
  }

  deleteRob(id) {
    this.botList[id] = undefined;
    this.botNum -= 1;
  }

  increaseAgingTime() {
    let robId = 0;
    let robNum = 0;
    while (robNum < this.botNum) {
      if (this.botList[robId] !== undefined) {
        this.agingTime[robId] += 1;
        if (this.agingTime[robId] > 6 && this.botList[robId] !== undefined) this.deleteRob(robId);
        robNum += 1;
      }
      robId += 1;
    }
  }

  clearUpAgingTime(id) {
    this.agingTime[id] = 0;
  }

  getBotNum() {
    return this.botNum;
  }
}

class RobFlashWindow extends Component {
  componentDidMount() {
    const interval = 300 / 5;
    let startTime = null;
    const nextX = {};
    const nextY = {};
    const prevX = {};
    const prevY = {};

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(163,188,255)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const gBotList = new BotRepo();

    const draw = time => {
      if (!startTime) {
        startTime = time;
      }
      const delta = Math.min(1, (time - startTime) / interval);
      let robId = 0;
      let robNum = 0;
      ctx.fillStyle = 'rgb(163,188,255)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      while (robNum < gBotList.getBotNum()) {
        if (gBotList.botList[robId] !== undefined) {
          const curX = prevX[robId] + (nextX[robId] - prevX[robId]) * delta;
          const curY = 240 - (prevY[robId] + (nextY[robId] - prevY[robId]) * delta);
          gBotList.botList[robId].draw(ctx);
          console.log(gBotList.botList[robId].x);
          console.log(gBotList.botList[robId].y);
          gBotList.botList[robId].x = curX;
          gBotList.botList[robId].y = curY;
          robNum += 1;
        }
        robId += 1;
      }
    };

    setInterval(async function() {
      const bots = await fetch('http://localhost:4000/dashboard/robData', {
        method: 'GET',
        mode: 'cors',
        headers: {
          Accept: 'application/json,text/plain,*/*',
        },
      }).then(res => res.json());

      console.log('Receive robData!\n');
      let robId = 0;
      gBotList.increaseAgingTime();
      for (let index = 0; index < bots.length; index++) {
        robId = bots[index].id;
        gBotList.clearUpAgingTime(robId);
        if (gBotList.botList[robId] === undefined) {
          gBotList.addRob(robId);
          console.log('New rob!');
        }
        prevX[robId] = nextX[robId];
        prevY[robId] = nextY[robId];
        nextX[robId] = (bots[index].coor.array[0] || 0) / 1.65;
        nextY[robId] = (bots[index].coor.array[1] || 0) / 1.65;
        startTime = null;
      }
      window.requestAnimationFrame(draw);
    }, interval);
  }

  render() {
    return (
      <div className="subcontainer">
        <canvas id="canvas" width="800" height="500"></canvas>
      </div>
    );
  }
}

export default RobFlashWindow;
