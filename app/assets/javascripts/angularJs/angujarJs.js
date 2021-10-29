var myFirstApp = angular.module("myFirstApp",[]);
myFirstApp.controller("helloWorldsCtrl", function ($scope){
    $scope.init = function (){
        //alert("AngularJS");
        $scope.saludo = "Hello World!";
        $scope.nombre = "Javier";
    }
    //Se puede combinar Js con angular
    $scope.mensajeOculto = function (){
        document.getElementById("segundoMensaje").style = "display: normal";
    }
});

//De esta forma se pueden crear distintas carpetas de Js
//Mientras que 'controller' en angular, contenga el nombre del 'ng-controller' declarado en el index
//podrá llamarse en cualquier momento sin declararlo en un lugar aparte


