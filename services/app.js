var app = angular.module('minmat', []);

// directive for custom icon background
app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(css/img/icons-cat/' + url +')',
            'background-size' : 'cover'
        });
    };
});