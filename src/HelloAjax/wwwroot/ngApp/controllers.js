var HelloAjax;
(function (HelloAjax) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($http) {
                var _this = this;
                this.$http = $http;
                this.message = 'Hello from the home page!';
                $http.get("/api/movies")
                    .then(function (response) {
                    _this.movies = response.data;
                })
                    .catch(function (response) {
                    console.error("");
                });
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        var GenreController = (function () {
            function GenreController($http, $uibModal) {
                var _this = this;
                this.$http = $http;
                this.$uibModal = $uibModal;
                $http.get("/api/genres")
                    .then(function (response) {
                    _this.genres = response.data;
                });
            }
            GenreController.prototype.getMovies = function () {
                var _this = this;
                this.$uibModal.open({
                    templateUrl: "movieListModal.html",
                    controller: ModalController,
                    controllerAs: "modalController",
                    resolve: {
                        genreId: function () {
                            return _this.selectedGenre.id;
                        }
                    }
                });
                //this.$http.get(`/api/genres/${this.selectedGenre.id}`)
                //    .then((response) => {
                //        this.genreMovies = response.data;
                //        this.Movies = this.genreMovies.movies;
                //    });
            };
            return GenreController;
        }());
        Controllers.GenreController = GenreController;
        var ModalController = (function () {
            function ModalController(genreId, $http) {
                var _this = this;
                this.genreId = genreId;
                this.$http = $http;
                this.$http.get("/api/genres/" + genreId)
                    .then(function (response) {
                    _this.movies = response.data.movies;
                });
            }
            return ModalController;
        }());
        Controllers.ModalController = ModalController;
    })(Controllers = HelloAjax.Controllers || (HelloAjax.Controllers = {}));
})(HelloAjax || (HelloAjax = {}));
//# sourceMappingURL=controllers.js.map