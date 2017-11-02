angular.module('personal').service('sectionService', function ($http) {
    const URL = 'http://45.55.132.212'
    this.getPosts = (section) => $http.get(`${URL}/api/posts/${section}`)
        .then(response => response.data)
})