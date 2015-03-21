function minmatController($scope) {


	$scope.safeApply = function(fn) {
        var phase = this.$root.$$phase;
        if (phase == '$apply' || phase == '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    global = new Global();
    global.scopes.minmat = angular.element($('body')).scope();

	$scope.categories = Categories;
	$scope.ingredients = Ingredients;
}