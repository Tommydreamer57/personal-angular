angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getUser().then(user => {
        $scope.user = user
    })
    homeService.getSections().then(sections => {
        // console.log(sections)
        $scope.sections = sections
    })
})
