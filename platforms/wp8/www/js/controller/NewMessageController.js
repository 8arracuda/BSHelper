sdApp.controller('NewMessageController', function ($scope) {

    var structureArray = [{
        name: "Deutschland",
        sub: ["Köln", "Bonn"]
    }, {
        name: "England",
        sub: ["Manchester", "London"]
    }];

    var newsStreamArray = Array();

    var topicsArray = ["S-Bahn", "U-Bahn", "Bus", "O-Bus", "Tram"];

    $scope.init = function () {

        var x = document.getElementById("mainStructureSelect");
        var option = document.createElement("option");
        for (var i = 0; i < structureArray.length; i++) {
            var option = document.createElement("option");
            option.text = structureArray[i].name;
            x.add(option);
        }

    };

    $scope.update = function () {

        structureIndex = document.getElementById("mainStructureSelect").selectedIndex;
        var x = document.getElementById("subStructureSelect");
        var subStructure = structureArray[structureIndex].sub;

        //remove the old options
        while (x.length > 0) {
            x.remove(0);
        }

        for (var i = 0; i < subStructure.length; i++) {
            var option = document.createElement("option");
            option.text = subStructure[i];
            x.add(option);
        }

        var x = document.getElementById("newTopicSelect");

        //remove the old options
        while (x.length > 0) {
            x.remove(0);
        }

    };

    $scope.add = function () {

        $scope.showSuccessMessage = false;

        if ($scope.mainStructure == null || $scope.subStructure == null || $scope.selectedTopic == "") {
            alert("some thing is missing");
        } else {

            newsStreamArray.push({
                name: new Date().toLocaleString() + " " + $scope.mainStructure + " - " + $scope.subStructure + " - " + $scope.selectedTopic,
                headline: $scope.headlineString,
                message: $scope.messageString
            });

            $scope.showSuccessMessage = true;
        }

        $scope.messageString = "";

    };

    $scope.init();
});