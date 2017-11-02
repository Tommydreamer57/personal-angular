'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal', ['ui.router']);
// ROUTER
angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:name',
        templateUrl: 'app/views/section/section.html',
        controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html',
        controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});
'use strict';

angular.module('personal').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // USER VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    }).state('section', {
        url: '/section/:section',
        templateUrl: 'app/views/section/section.html'
        // // controller: 'sectionController'
    }).state('post', {
        url: '/post/:postid',
        templateUrl: 'app/views/post/post.html'
        // // controller: 'postController'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'app/views/favorites/favorites.html'
        // // controller: 'favoritesController'
    })
    // ADMIN VIEWS
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/views/admin/admin.html'
        // // controller: 'adminController'
    }).state('create', {
        url: '/create',
        templateUrl: 'app/views/admin/create/create.html',
        // // controller: 'createController',
        parent: 'admin'
    }).state('edit', {
        url: '/edit',
        templateUrl: 'app/views/admin/edit/edit.html',
        // // controller: 'editController',
        parent: 'admin'
    }).state('users', {
        url: '/users',
        templateUrl: 'app/views/admin/users/users.html',
        // // controller: 'usersController',
        parent: 'admin'
    });
    $urlRouterProvider.otherwise('home');
});

// angular.module('personal').controller('homeController', function ($scope) {
//     $scope.test = 'home controller'
//     // homeService.getSections().then(sections => {
//     //     console.log(sections)
//     //     $scope.sections = sections
//     // })
// })
'use strict';

angular.module('personal').service('homeService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getSections = function () {
        return $http.get(URL + '/api/sections').then(function (response) {
            // console.log(response.data)
            return response.data.map(function (item, i) {
                return item.section;
            });
        });
    };
    this.getPosts = function (section) {
        return $http.get('');
    };
});
'use strict';

angular.module('personal').service('postService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPost = function (postid) {
        return $http.get(URL + '/api/post/' + postid).then(function (response) {
            return response.data[0];
        });
    };
    this.getComments = function (postid) {
        return $http.get('http://45.55.132.212/api/comments/' + postid).then(function (response) {
            return response.data;
        });
    };
});
'use strict';

angular.module('personal').service('sectionService', function ($http) {
    var URL = 'http://45.55.132.212';
    this.getPosts = function (section) {
        return $http.get(URL + '/api/posts/' + section).then(function (response) {
            return response.data;
        });
    };
});
"use strict";
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
"use strict";
"use strict";
'use strict';

angular.module('personal').controller('homeController', function ($scope, homeService) {
    // $scope.test = 'home controller'
    homeService.getSections().then(function (sections) {
        // console.log(sections)
        $scope.sections = sections;
    });
});
'use strict';

angular.module('personal').controller('postController', function ($scope, postService, $stateParams) {
    postService.getPost($stateParams.postid).then(function (post) {
        console.log(post);
        $scope.post = post;
    });
    postService.getComments($stateParams.postid).then(function (comments) {
        console.log(comments);
        $scope.comments = comments;
    });
});
'use strict';

angular.module('personal').controller('sectionController', function ($scope, sectionService, $stateParams) {
    $scope.section = $stateParams.name;
    sectionService.getPosts($stateParams.name).then(function (posts) {
        $scope.posts = posts;
    });
});
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=maps/all.js.map
