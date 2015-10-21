describe('Animal card directive', function() {

    beforeEach(module('newHome'));

    var sandbox,
        $injector,
        $controller,
        $compile,
        animalsService,
        animalCardController;

    beforeEach(inject(function(_$injector_) {
        sandbox = sinon.sandbox.create();
        $injector = _$injector_;
        $controller = $injector.get('$controller');
        $compile = $injector.get('$compile');
        animalsService = $injector.get('animalsService');
    }));

    afterEach(function() {
        sandbox.restore();
    });

    describe('Directive controller', function() {

        describe('addLike', function() {

            it('should use animalsService when adding a like', function() {
                sandbox.spy(animalsService, 'addLike');
                animalCardController = $controller('AnimalCardController', {
                    animalsService: animalsService
                });
                animalCardController.animal = {};

                animalCardController.addLike();

                expect(animalsService.addLike.called).toBe(true);
            });

            it('should add a like to a given animal', function() {
                var $q = $injector.get('$q');
                var $rootScope = $injector.get('$rootScope');

                sandbox.stub(animalsService, 'addLike', function() {
                    var deferred = $q.defer();
                    deferred.resolve();
                    return deferred.promise;
                });

                animalCardController = $controller('AnimalCardController', {
                    animalsService: animalsService
                });
                animalCardController.animal = {
                    likes: 0
                };

                animalCardController.addLike();

                $rootScope.$apply();
                expect(animalCardController.animal.likes).toBe(1);
            });

        });

    });

});
