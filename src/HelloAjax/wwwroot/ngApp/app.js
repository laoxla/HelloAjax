var HelloAjax;
(function (HelloAjax) {
    angular.module('HelloAjax', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // Define routes
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/home.html',
            controller: HelloAjax.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('about', {
            url: '/about',
            templateUrl: '/ngApp/about.html',
            controller: HelloAjax.Controllers.AboutController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/notFound.html'
        })
            .state("genre", {
            url: "/genre",
            templateUrl: "/ngApp/genre.html",
            controller: HelloAjax.Controllers.GenreController,
            controllerAs: "controller"
        });
        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');
        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });
})(HelloAjax || (HelloAjax = {}));
//# sourceMappingURL=app.js.map