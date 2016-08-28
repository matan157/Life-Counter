var app = angular.module('lifeCounter', []);

app.controller('MainController', function($scope) {
    $scope.players = [];
    $scope.players.push(new Player());

    // Adds players
    $scope.addPlayer = function() {
        $scope.players.push(new Player());
    }

    // Removes players
    $scope.removePlayer = function(index) {
        $scope.players.splice(index, 1);
    }

    // Player object
    function Player() {
        this.life = 20;
        this.add = function(n) {
            this.life += n;
        };
        this.sub = function(n) {
            this.life -= n;
        };
        this.reset = function(n) {
            this.life = 20;
        };
    }
});
