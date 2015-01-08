sdApp.controller('StartController', function ($scope) {

$scope.headlineString = "";
$scope.messageString = "";

var structureArray = [{
    name: "Deutschland",
    sub: ["Köln", "Bonn"]
}, {
    name: "England",
    sub: ["Manchester", "London"]
}];

var newsStreamArray = [{
    name: new Date().toLocaleString() + "a" + "b" + "c",
    headline: "headline",
    message: "message"
},{
    name: new Date().toLocaleString() + "a" + "b" + "c2",
    headline: "headline2",
    message: "message2"
}];

$scope.init = function () {

    var x = document.getElementById("newsSelect");
    var option = document.createElement("option");
    for (var i = 0; i < newsStreamArray.length; i++) {
        var option = document.createElement("option");
        option.text = newsStreamArray[i].name;
        x.add(option);
    }

};

$scope.update3 = function () {

    var newsSelect = document.getElementById("newsSelect");
    var option = document.createElement("option");

    for (var i = 0; i < newsStreamArray.length; i++) {
        var option = document.createElement("option");
        option.text = newsStreamArray[i].name;
        newsSelect.add(option);
    }
};

$scope.read = function () {

    newsIndex = document.getElementById("newsSelect").selectedIndex;

    document.getElementById("messageOutputBox").value = newsStreamArray[newsIndex].message;

    $scope.updateLatexSouce();
    $scope.updateHtmlSource();

};

$scope.updateHtmlSource = function () {

    selectedNewsIndex = document.getElementById("newsSelect").selectedIndex;

    htmlString = "<h2>" + newsStreamArray[selectedNewsIndex].headline + "</h2> <p>" + newsStreamArray[selectedNewsIndex].message + "</p>";

    document.getElementById("htmlSource").innerHTML = htmlString;

};

$scope.updateLatexSouce = function () {
    selectedNewsIndex = document.getElementById("newsSelect").selectedIndex;

    latexString = "/textbf{" + newsStreamArray[selectedNewsIndex].headline + "}" + newsStreamArray[selectedNewsIndex].message;

    document.getElementById("latexSource").innerHTML = latexString;

};

$scope.init();

});