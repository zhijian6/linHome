/**
 * Created by nqmy on 2015/7/8.
 */
var colorList = ["#ff4400"];
function setColorList(list){
    colorList = list;
}
function typeIn(str){
    var cont = 0,len = colorList.length, strLen = str.length ;
    var mapId = setInterval(function(){
        if(cont < strLen){
            $(".js_typeIn").append('<span style="color: '+colorList[(cont+Math.floor(Math.random()*cont))%len]+'">'+str[cont]+'</span>');
            if(str[cont] == "\n"){
                $(".js_typeIn").append('<br/>');
            }
            $(".typeInMark").toggleClass("none");
        }else{
            if(cont%3 == 0) $(".typeInMark").toggleClass("none");
        }
        cont++;
        if(cont >= 100000000){
            cont = strLen;
        }
    },200);
}
setColorList([
    "#ff4400","#0CC2F3","#836828","#F3A231","#79FF90","#000000"
]);
typeIn("上联：一个项目两台电脑三餐盒饭只为四千工资搞得五脏俱伤六神无主仍然七点起床八点开会处理九个BUG十分辛苦。\n " +
"下联：十年编程九年加班八面无光忙得七窍生烟到头六亲不认五体投地依旧四处奔波三更半夜只为两个臭钱一生孤苦。\n " +
"横批：IT人生");
