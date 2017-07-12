'use strict';

module.exports = function(Exhibition) {
  Exhibition.getByCity = function(city, cb) {
    Exhibition.app.models.City.findOne({
      where: {name: city},
    }, function(errors, cityObj) {
      Exhibition.find({
        where: {idCity: cityObj.id},
        include: [{
          relation: 'exhibitionIdCityFkeyrel',
        }],
      }, function(errors, exhibitions) {
        cb(null, exhibitions);
      });
    });
  };

  Exhibition.remoteMethod(
    'getByCity', {
      http: {path: '/getByCity', verb: 'get'},
      accepts: {arg: 'city', type: 'string', http: {source: 'query'}},
      returns: {arg: 'exhibition', type: 'object'},
    }
  );
};
