"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 10001, name: 'Mr. Nice' },
            { id: 10002, name: 'Narco' },
            { id: 10003, name: 'Bombasto' },
            { id: 10004, name: 'Celeritas' },
            { id: 10005, name: 'Magneta' },
            { id: 10006, name: 'RubberMan' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map