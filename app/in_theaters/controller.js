(function(angular){
   'use strict';

//创建正在热映模块
var module=angular.module('moviecat.in_theaters', ['ngRoute'])

//配置模块的路由
module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/in_theaters', {
    templateUrl: 'in_theaters/view.html',
    controller: 'InTheaterController'
  });
}])

module.controller('InTheaterController', [
	'$scope',
	'$http',
	 function($scope,$http) {
    //控制器 分为俩步  1 设计暴露的数据 2设计暴露行为
    $scope.subjects =[];
    $scope.message ="";
   //测试$http 此处必须为绝对路径
    $http.get('/moviecat/app/data.json').then(function(res){
     //此处代码是在异步请求完成过后才执行（需要一段时间）
     // console.log(res);
     if(res.status==200){
     	$scope.subjects=res.data.subjects;
     }else{
     	$scope.message="获取数据错误，错误信息"+res.statusText
     }
    },function(err){
      $scope.message="获取数据错误，错误信息"+err.statusText;
      console.log("444");
    });
}
]);

})(angular)
