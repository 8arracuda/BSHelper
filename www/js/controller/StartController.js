sdApp.controller('StartController', function ($scope, $rootScope) {

    $scope.headlineString = "";
    $scope.messageString = "";

    $rootScope.newsStreamArray = Array();
    //$rootScope.newsStreamArray = [{
    //    name: new Date().toLocaleString() + "a" + "b" + "c",
    //    headline: "headline",
    //    message: "message"
    //}, {
    //    name: new Date().toLocaleString() + "a" + "b" + "c2",
    //    headline: "headline2",
    //    message: "message2"
    //}];

    $scope.manualUpdate = function () {
      $scope.update3();
    };

    $scope.renew = function() {
        var answer = confirm("are you sure?");
        if (answer) {
            $rootScope.newsStreamArray=Array();
            localStorage.setItem("BSNewsStreamArray", JSON.stringify(""));
            $scope.init();
            $scope.update3()
        }

    };

    $scope.init = function () {

        var x = document.getElementById("newsSelect");
        var option = document.createElement("option");
        for (var i = 0; i < $rootScope.newsStreamArray.length; i++) {
            var option = document.createElement("option");
            option.text = $rootScope.newsStreamArray[i].name;
            x.add(option);
        }

        loadToLocalStorage();

    };

    loadToLocalStorage = function () {

        $rootScope.newsStreamArray = JSON.parse(localStorage.getItem("BSNewsStreamArray"));

    };

    $scope.update3 = function () {

        var newsSelect = document.getElementById("newsSelect");
        var option = document.createElement("option");

        for (var i = 0; i < $rootScope.newsStreamArray.length; i++) {
            var option = document.createElement("option");
            option.text = $rootScope.newsStreamArray[i].name;
            newsSelect.add(option);
        }
    };

    $scope.read = function () {

        newsIndex = document.getElementById("newsSelect").selectedIndex;

        $scope.updateLatexSouce();
        $scope.updateHtmlSource();

    };

    $scope.updateHtmlSource = function () {

        selectedNewsIndex = document.getElementById("newsSelect").selectedIndex;

        htmlString = "<h2>" + $rootScope.newsStreamArray[selectedNewsIndex].headline + "</h2> <p>" + $rootScope.newsStreamArray[selectedNewsIndex].message + "</p>";

        document.getElementById("htmlSource").innerHTML = htmlString;

    };

    $scope.updateLatexSouce = function () {
        selectedNewsIndex = document.getElementById("newsSelect").selectedIndex;

        latexString = "/textbf{" + $rootScope.newsStreamArray[selectedNewsIndex].headline + "}" + $rootScope.newsStreamArray[selectedNewsIndex].message;

        document.getElementById("latexSource").innerHTML = latexString;

    };

    $scope.init();

});