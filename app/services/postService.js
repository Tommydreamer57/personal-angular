angular.module('personal').service('postService', function ($http) {
    const URL = 'http://45.55.132.212'
    this.getPost = postid => $http.get(`${URL}/api/post/${postid}`)
        .then(response => response.data[0])
    this.getComments = postid => $http.get(`http://45.55.132.212/api/comments/${postid}`)
        .then(response => response.data)
})