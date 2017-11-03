angular.module('personal').service('homeService', function ($http) {
    const URL = 'http://45.55.132.212'
    this.getUser = () => {
        return $http.get(`${URL}/auth/me`).then(response => {
            console.log(response.data)
            return response.data
        })
    }
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