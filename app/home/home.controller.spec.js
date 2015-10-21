describe('Home Controller', function() {

    beforeEach(module('newHome'));

    var sandbox,
        $controller,
        $injector,
        animalsService,
        _;

    beforeEach(inject(function(_$injector_) {
        sandbox = sinon.sandbox.create();
        $injector = _$injector_;
        $controller = $injector.get('$controller');
        animalsService = $injector.get('animalsService');
        _ = $injector.get('_');
    }));

    afterEach(function() {
        sandbox.restore();
    });

    it('should get all animals from animalsService', function() {
        sinon.spy(animalsService, 'getAll');
        var homeController = $controller('HomeController', {
            animalsService: animalsService,
            _: _
        });
        expect(animalsService.getAll.called).toBe(true);
    });

    it('should randomise animals when reading them', function() {
        var $q = $injector.get('$q');
        var $rootScope = $injector.get('$rootScope');
        sinon.stub(animalsService, 'getAll', function() {
            var deferred = $q.defer();
            deferred.resolve([]);
            return deferred.promise;
        });

        sinon.spy(_, 'shuffle');

        var homeController = $controller('HomeController', {
            animalsService: animalsService,
            _: _
        });

        $rootScope.$apply();
        expect(_.shuffle.called).toBe(true);
    });

});
