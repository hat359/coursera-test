(function(){
    'use strict';
    angular.module('myapp',[])
    .controller('myctr',function($scope){
        
        $scope.upd=function(){
             let str=$scope.c;
             
              const ar=str.split(',');
             
               


        

        $scope.cal= function(){
        
         var count = ar.length;

         if(count<=3){
          $scope.x="Enjoy!";


         }
         else{
          $scope.x="Too much!";

         }


        }

    }

         
    
    
    
    
    
    });
    
    
    })();
