angular.module('personal').component('commentBox', {
    templateUrl: '/app/components/comment-box/comment-box.html',
    controller: () => { },
    controllerAs: 'cb',
    bindings: {
        comments: "<",
        comment: "<"
    }
})