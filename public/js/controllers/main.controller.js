(function() {
  angular.module('BitcoinClub')
        .controller('MainController', MainController);

MainController.$inject = ['$scope', 'SignupService'];

function MainController($scope, SignupService){
  $scope.createMember = createMember;

  function createMember(newMember){
    SignupService.create(newMember);
    $scope.newMember = '';
  }

}


}());
