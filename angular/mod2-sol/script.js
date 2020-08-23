(function(){
'use strict';


angular.module('myapp',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
var tb=this;
tb.tobuy= ShoppingListCheckOffService.getItems();
 tb.remove =function(index){
    
    ShoppingListCheckOffService.remove(index);
     
}

tb.errormessege=function(){
    ShoppingListCheckOffService.errormessege();
}




}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
var ab=this;
ab.bought=ShoppingListCheckOffService.addit();


}





function ShoppingListCheckOffService(){

var service=this;

var bought=[];
var tobuy=[
{name:"cookies",
quantity:2
},
{name:"bread",
quantity:4
},
{name:"chips",
quantity:3
},
{name:"cheese",
quantity:4
},
{name:"coffee",
quantity:2
}

];

service.getItems = function(){
return tobuy;


}

service.remove =function(itindex){
   var temp=tobuy[itindex];
  

tobuy.splice(itindex,1);


var item ={
name:temp.name,
quantity:temp.quantity

}

bought.push(item);


}






service.addit = function(){
   
    return bought;
    
    };



};



})();
