angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid)
        .then(post => {
            console.log(post)
            $scope.post = post
        })
    postService.getComments($stateParams.postid)
        .then(comments => {
            console.log(comments)
            $scope.comments = comments
        })
})