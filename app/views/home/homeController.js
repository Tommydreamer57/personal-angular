angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(sections => {
        // console.log(sections)
        $scope.sections = sections
    })
})
