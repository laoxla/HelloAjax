var HelloAjax;
(function (HelloAjax) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.MovieResource = $resource('/api/movies');
            }
            MovieService.prototype.listMovies = function () {
                return this.MovieResource.query();
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('HelloAjax').service('movieService', MovieService);
        var MyService = (function () {
            function MyService() {
            }
            return MyService;
        }());
        Services.MyService = MyService;
        angular.module('HelloAjax').service('myService', MyService);
    })(Services = HelloAjax.Services || (HelloAjax.Services = {}));
})(HelloAjax || (HelloAjax = {}));
//# sourceMappingURL=services.js.map