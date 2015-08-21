//定義函數 CircleArea
//功能為輸出以傳入值為半徑的圓面積
var Radius=3;
var area
function CircleArea(Radius)
{
  var PI = 3.1415926  //定義 PI 為圓周率常數
  area= PI * Radius * Radius  //圓面積計算
  return area;
}
console.log(area);