sdApp.config(function ($routeProvider) {

    $routeProvider.
        //when('/overview', {
        //    templateUrl: 'overview.html',
        //    controller: 'OverviewCtrl'
        //}).
        when('/start', {
            templateUrl: 'start.html',
            controller: 'StartController'
        }).
        when('/newMessage', {
            templateUrl: 'newMessage.html',
            controller: 'NewMessageController'
        }).
        otherwise({
            redirectTo: '/start'
        });
});
