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
      url: '/articles/' + oneArticle._id,
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

  this.editArticle = function(oneArticle){
      //test after span & ng click in html has been added
        console.log(oneArticle);
        $http({
          method: 'PUT',
          url: '/articles/' + oneArticle._id,
          data: {
            author: this.updateAuthor,
            article: this.updateArticle
          }
        }).then(
          //telling what to do when it has gathered data.. simplest is to add new & refresh all data
          function(response){
            console.log('this is Jens dope update');
            //adds new article created to the page automatically
              controller.getArticles();

          },
          function(error){

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
