const app = angular.module('BlogApp', []);

app.controller('BlogController', ['$http', function($http){
  const controller = this;
  this.articles = ['this works'];

  this.createdArticles = function(){
    $http({
      method: 'POST',
      url: '/articles',
      data: {
        author: this.author,
        article: this.article
      }
    }).then(function(response){
      controller.getArticles();
    },function(){

    });
  }

  this.getArticles = function(){
    $http({
      method: 'GET',
      url: '/articles'
    }).then(function(response){
      controller.articles = response.data;
    },function(err){

    });
  }

  this.getArticles();

}]);
