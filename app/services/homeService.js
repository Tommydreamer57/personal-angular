angular.module('personal').service('homeService', function ($http) {
    const URL = 'http://45.55.132.212'
    this.getSections = () => {
        return $http.get(`${URL}/api/sections`).then(response => {
            // console.log(response.data)
            return response.data.map((item, i) => {
                return item.section
            })
        })
    }
    this.getPosts = section => {
        return $http.get('')
    }
})