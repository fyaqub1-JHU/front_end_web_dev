describe('MenuService', function () {
    var MenuService, $httpBackend, ApiPath;
  
    // Correct menu item
    var correctItem = {
      short_name: "L4",
      name: "Kung Pao Chicken",
      description: "beef sauteed with carrots and celery, in a spicy Szechuan sauce"
    };

    beforeEach(module(function ($provide) {
        $provide.factory('loadingHttpInterceptor', function () {
          return {
            request: function (config) { return config; },
            response: function (response) { return response; }
          };
        });
      }));
  
    beforeEach(module('common'));
    beforeEach(inject(function (_MenuService_, _$httpBackend_, _ApiPath_) {
      MenuService = _MenuService_;
      $httpBackend = _$httpBackend_;
      ApiPath = _ApiPath_;
    }));
  
    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  
    // Test with correct menu item
    it('Confirm that the menu item L4 exists', function (done) {
      var actualItem;
  
      // Correct path to menu item
      $httpBackend.expectGET(ApiPath + '/menu_items/L/menu_items/3.json').respond(correctItem);
  
      MenuService.getItem('L4').then(function (response) {
        actualItem = response;
      });
  
      $httpBackend.flush();
  
      expect(actualItem.short_name).toBe("L4");
      expect(actualItem.name).toBe("Kung Pao Chicken");
      expect(actualItem.description).toBe("beef sauteed with carrots and celery, in a spicy Szechuan sauce");
      done();
    });
  
    // Test with incorrect menu item
    it('Return error if menu item does not exist', function () {
      var errorResponse;
  
      // Invalid short name
      $httpBackend.expectGET(ApiPath + '/menu_items/X/menu_items/98.json').respond(404, {});
  
      MenuService.getItem('X99').catch(function (error) {
        errorResponse = error.status;
      });
  
      $httpBackend.flush();
  
      expect(errorResponse).toBe(404);
    });
  });