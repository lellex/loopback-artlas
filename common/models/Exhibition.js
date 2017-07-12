'use strict';

module.exports = function(Exhibition) {
//   Exhibition.getname = function(shopId, cb) {
//     Exhibition.findById(shopId, function(err, instance) {
//       var response = 'Name of coffee shop is ' + instance.name;
//       cb(null, response);
//       console.log(response);
//     });
//   };

  Exhibition.getByCity = function(city, cb) {
    Exhibition.find({
      include: [{
        relation: 'exhibitionIdCityFkeyrel',
      }],
      where: {exhibitionIdCityFkeyrel: {name: city}},
    }, function(errors, exhibitions) {
      cb(null, exhibitions);
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
