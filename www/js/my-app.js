// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})
$$('.task1').on('click', function () {
    myApp.alert('Task 1 Clicked !!');
});

/*
// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page'+ name.page);
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})*/

//angular
var app = angular.module("myShoppingList", []); 
    
        
        app.controller("myCtrl", function($scope) {
        /*inicializa os produtos */
        $scope.teste = ["agua"];
        $scope.saved = localStorage.getItem('produto');
        $scope.products = (localStorage.getItem('produto')!== null) ? JSON.parse($scope.saved):[];
        localStorage.setItem('produto',JSON.stringify($scope.products));

        //$scope.lista = JSON.parse($scope.saved);
        /*adiciona itens a listas de produtos*/
        $scope.addItem = function () {
        /*variavel que recebe o texto de erro*/
        $scope.errortext = "";
        /*verifica se a variavel addMe esta vazia*/
        if (!$scope.addMe) {return;}
        $scope.teste.push($scope.products);
        //console.log($scope.teste.indexOf());        
        if($scope.products.indexOf($scope.addMe) == -1){
            $scope.products.push($scope.addMe);
            $scope.addMe = '';
        }else{
            $scope.errortext = "The item is already in your shopping list."
        }        
            localStorage.setItem('produto',JSON.stringify($scope.products));
    }
    /*remove item da lista*/
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
        localStorage.setItem('produto', JSON.stringify($scope.products));

    }
});