export default ['$scope', '$element', function($scope, $element) {

  $scope.name = "";
  $scope.connectionstring = "";
  $scope.type = "";

  $scope.clickButton = function(){
    let connection = {
      qName:$scope.name,
      qConnectionString:$scope.connectionstring,
      qType:$scope.type
    };
    console.log(connection);
    $scope.component.model.app.createConnection(connection).then(a => console.log(a));
  }
}]
