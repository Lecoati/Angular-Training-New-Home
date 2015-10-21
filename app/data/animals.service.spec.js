describe('Animals Service', function() {

    beforeEach(module('newHome'));

    var sandbox,
        $injector,
        $httpBackend,
        API_ENDPOINT,
        ANIMAL_TYPES,
        animalsService;

    beforeEach(inject(function(_$injector_) {
        sandbox = sinon.sandbox.create();
        $injector = _$injector_;
        $httpBackend = $injector.get('$httpBackend');
        API_ENDPOINT = $injector.get('API_ENDPOINT');
        ANIMAL_TYPES = $injector.get('ANIMAL_TYPES');
        animalsService = $injector.get('animalsService');
    }));

    afterEach(function() {
        sandbox.restore();
    });

    describe('getAll', function() {

        it('should call API get', function() {
            $httpBackend
                .whenGET(API_ENDPOINT)
                .respond(200, []);

            animalsService.getAll();
            $httpBackend.flush();
            expect(true).toBe(true);
        });

        it('should load animals from the API', function() {
            var fakeAnimals = [{
                animalTypeId: 1,
                gender: 'M',
                name: 'foo'
            },
            {
                animalTypeId: 2,
                gender: 'F',
                name: 'bar'
            }];
            $httpBackend.whenGET(API_ENDPOINT).respond(200, fakeAnimals);
            animalsService.getAll().then(function(animals) {
                expect(animals.length).toEqual(2);
            });
            $httpBackend.flush();
        });

    });

    describe('addComment', function() {

        it('should create comments', function() {
            var fakeId = 1;
            var fakeComment = {
                author: 'john doe',
                text: 'foo bar'
            };
            var fakeResult = {
                id: 123,
                animalId: 1,
                author: 'john doe',
                text: 'foo bar'
            };

            var url = API_ENDPOINT + fakeId + '/comments';
            $httpBackend
                .whenPOST(url, fakeComment)
                .respond(201, fakeResult);

            animalsService.addComment(1, fakeComment)
                .then(function(comment) {
                    expect(comment).toEqual(fakeResult);
                });

            $httpBackend.flush();
        });

    });

    it('should create animal type url for every object', function() {
        var fakeAnimals = [{
            animalTypeId: 1,
            gender: 'M',
            name: 'foo'
        },
        {
            animalTypeId: 2,
            gender: 'F',
            name: 'bar'
        }];
        $httpBackend.whenGET(API_ENDPOINT).respond(fakeAnimals);
        animalsService.getAll().then(function(animals) {
           expect(animals[0].typeUrl).toBe('perros');
           expect(animals[1].typeUrl).toBe('gatos');
        });
        $httpBackend.flush();
    });

    it('should create a property to determine easily if an animal is male or female', function() {
        var fakeAnimals = [{
            animalTypeId: 1,
            gender: 'M',
            name: 'foo'
        },
        {
            animalTypeId: 2,
            gender: 'F',
            name: 'bar'
        }];
        $httpBackend.whenGET(API_ENDPOINT).respond(fakeAnimals);
        animalsService.getAll().then(function(animals) {
            expect(animals[0].isMale).toBe(true);
            expect(animals[1].isMale).toBe(false);
        });
        $httpBackend.flush();
    });

});
