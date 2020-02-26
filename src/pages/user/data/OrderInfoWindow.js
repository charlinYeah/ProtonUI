import React from 'react';
import './OrderInfoWindow.css';
import 'whatwg-fetch';
import 'es6-promise';

class Shelf {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.percentage = 0;
  }
}

class Goods {
  constructor(barcodeIn, totalNum) {
    this.barcode = barcodeIn;
    this.totalQuant = totalNum;
    this.finishedQuant = 0;
  }
}

class Order {
  constructor(){
    this.coor = new Shelf();
    this.goodsList = [];
    this.goodsNum = 0;
    this.orderId = "";
    this.percentage = 0;
    this.maxGoodsNum = 30;
  }

  addGoods(barcodeIn, totalNum){
    let index;
    for(index=0;index<this.maxGoodsNum;index++)
    {
      if(this.goodsList[index] === undefined)
      {
        this.goodsList[index] = new Goods(barcodeIn, totalNum);
      }
    }
    if(index === this.maxGoodsNum)
      console.log("Not enough space in goodsList");
    this.goodsNum++;
  }

  deleteGoods(barcodeIn){
    let index;
    for(index=0;index<this.maxGoodsNum;index++)
    {
      if(this.goodsList[index].barcode === barcodeIn)
      {
        this.goodsList[index] = undefined;
      }
    }
  }

  increaseGoodsCount(barcodeIn)
  {
    let index;
    for(index=0;index<this.maxGoodsNum;index++)
    {
      if(this.goodsList[index].barcode === barcodeIn)
      {
        if(this.goodsList[index].finishedQuant < this.goodsList[index].totalQuant)
          this.goodsList[index].finishedQuant++;
        else
          console.log("Error! Redundant goods!\n");
      }
    }
  }

  decreaseGoodsCount(barcodeIn)
  {
    let index;
    for(index=0;index<this.maxGoodsNum;index++)
    {
      if(this.goodsList[index].barcode === barcodeIn)
      {
        if(this.goodsList[index].finishedQuant > 0)
          this.goodsList[index].finishedQuant--;
        else
          console.log("Error! The goods have already been removed!\n");
      }
    }
  }
}

class OrderInfoWindows extends React.Component{

  state = {
    orderList : [],
    isChanged : 0
  };

  componentDidMount (){
    this.orderNum = 0;
    this.orderMaxNum = 30;
    this.updateOrderList();
  }

  updateOrderList() {
    setTimeout(async function () {
      const orders = await fetch(
        'http://localhost:4000/dashboard/orderData', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Accept': 'application/json,text/plain,*/*'
          },
        }).then(res => res.json());
      console.log(orders);
      var orderListTemp = this.state.orderList;
      for (let index = 0; index < orders.length; index++) {
        let orderUpdated = 0;
        for(let orderIndex = 0; orderIndex < this.orderMaxNum; orderIndex++)
        {
          if(orderListTemp[orderIndex] === undefined)
            continue;
          console.log(orderIndex);
          if(orderListTemp[orderIndex].orderId === orders[index].id)
          {
            orderListTemp[orderIndex].goodsNum = orders[index].goodsNum;
            orderListTemp[orderIndex].percentage = orders[index].percentage;

            let goodsList = [];
            for (let goodsIndex = 0; goodsIndex < orders[index].goodsNum; goodsIndex++) {
              goodsList[goodsList.length] = new Goods(orders[index].goodsList[goodsIndex].array[0], orders[index].goodsList[goodsIndex].array[2]);
            }
            orderListTemp[orderIndex].goodsList = goodsList;
            orderUpdated = 1;
            break;
          }
        }
        if(orderUpdated === 0)
        {
          for(let orderIndex = 0; orderIndex < this.orderMaxNum; orderIndex++)
          {
            if(orderListTemp[orderIndex] === undefined)
            {
              orderListTemp[orderIndex] = new Order();
              orderListTemp[orderIndex].orderId = orders[index].id;
              orderListTemp[orderIndex].goodsNum = orders[index].goodsNum;
              orderListTemp[orderIndex].percentage = orders[index].percentage;

              let goodsList = [];
              for (let goodsIndex = 0; goodsIndex < orders[index].goodsNum; goodsIndex++) {
                goodsList[goodsList.length] = new Goods(orders[index].goodsList[goodsIndex].array[0], orders[index].goodsList[goodsIndex].array[2]);
              }
              orderListTemp[orderIndex].goodsList = goodsList;

              this.orderNum++;
              break;
            }
          }
        }
      }
      console.log(orderListTemp);
      this.setState({orderList : orderListTemp},()=>{console.log("Well Done!\n")});    //利用setState触发渲染
      this.updateOrderList();
    }.bind(this), 3000);
  }

  render () {
    return (
      <ul className="order-text">
        {this.state.orderList.map((item,index)=>{
          return(
            <li key = {item.orderId}>
              OrderId : {item.orderId} &nbsp;
              GoodsNum :{item.goodsNum} &nbsp;
              Percentage : {item.percentage} &nbsp;
              <div>
                {
                  item.goodsList.map((goodsInfo,goodsIndex)=>{
                    return(
                      <div>
                        Barcode : {goodsInfo.barcode} &nbsp;
                        TotalQuant : {goodsInfo.totalQuant} &nbsp;
                        FinishedQuant : {goodsInfo.finishedQuant} &nbsp;
                      </div>
                    )
                  })
                }
              </div>
              <div>
                --------------------------
              </div>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default OrderInfoWindows
