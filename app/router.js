angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        // USER VIEWS
        .state('home', {
            url: '/home',
            templateUrl: 'app/views/home/home.html',
            controller: 'homeController'
        })
        .state('section', {
            url: '/section/:section',
            templateUrl: 'app/views/section/section.html',
            // // controller: 'sectionController'
        })
        .state('post', {
            url: '/post/:postid',
            templateUrl: 'app/views/post/post.html',
            // // controller: 'postController'
        })
        .state('favorites', {
            url: '/favorites',
            templateUrl: 'app/views/favorites/favorites.html',
            // // controller: 'favoritesController'
        })
        // ADMIN VIEWS
        .state('admin', {
            url: '/admin',
            templateUrl: 'app/views/admin/admin.html',
            // // controller: 'adminController'
        })
        .state('create', {
            url: '/create',
            templateUrl: 'app/views/admin/create/create.html',
            // // controller: 'createController',
            parent: 'admin'
        })
        .state('edit', {
            url: '/edit',
            templateUrl: 'app/views/admin/edit/edit.html',
            // // controller: 'editController',
            parent: 'admin'
        })
        .state('users', {
            url: '/users',
            templateUrl: 'app/views/admin/users/users.html',
            // // controller: 'usersController',
            parent: 'admin'
        })
    $urlRouterProvider
        .otherwise('home')
})

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
