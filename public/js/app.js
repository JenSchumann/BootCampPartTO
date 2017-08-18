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

  this.updateArticle = function(oneArticle){
    $http({
      method: 'PUT',
      url: '/articles/' + articles._id,
      data: {
        author: oneArticle.author,
        article: oneArticle.article
      }
    }).then(
      function(response){
        console.log("the update works")
        console.log("Jen trying to add her dope code and push to upstream without breaking BootCampPartTo");
        controller.getArticles();
      },
      function(err){

      }
    );
  }

  this.deleteArticle = function(oneArticle){
    // console.log('button working')
    $http({
      method: 'DELETE',
      url: '/articles/' + oneArticle._id
    }).then(
      function(response){
        controller.getArticles();
      },
      function(err){

      }
    );
  }

  this.getArticles();

}]);
