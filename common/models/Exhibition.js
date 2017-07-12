'use strict';

module.exports = function(Exhibition) {
  function findExhibition(params, cb) {
    Exhibition.find({
      where: {and: params},
      include: ['exhibitionIdCityFkeyrel'],
    }, function(errors, exhibitions) {
      cb(null, exhibitions);
    });
  }

  Exhibition.search = function(title, city, contry, cb) {
    var params = [];

    if (title) {
      params.push({title: {regexp: new RegExp(title + '+', 'i')}});
    }

    if (contry) {
      params.push({formerCountry: {regexp: new RegExp(contry + '+', 'i')}});
    }

    if (city) {
      Exhibition.app.models.City.findOne({
        where: {name: city},
        include: ['cityIdStateFkeyrel'],
      }, function(errors, cityObj) {
        params.push({idCity: cityObj.id});
        findExhibition(params, cb);
      });
    } else {
      findExhibition(params, cb);
    }
  };

  Exhibition.remoteMethod(
    'search', {
      http: {path: '/search', verb: 'get'},
      accepts: [
        {arg: 'title', type: 'string', http: {source: 'query'}},
        {arg: 'city', type: 'string', http: {source: 'query'}},
        {arg: 'country', type: 'string', http: {source: 'query'}},
      ],
      returns: {arg: 'exhibition', type: 'object'},
    }
  );
};
