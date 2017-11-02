angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name
    sectionService.getPosts($stateParams.name)
        .then(posts => {
            $scope.posts = posts
        })
})