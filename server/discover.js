'use strict';

var app = require('./server');
var dataSource = app.dataSources.postgresql;

dataSource.discoverAndBuildModels('city', {
  all: true,
}, function(err, models) {
  console.log(models.City);

  // Now we have a list of models keyed by the model name
  // Find the first record from the inventory
  // models.City.findOne({}, function(err, city) {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log('\nCity: ', city);
  //   city.product(function(err, prod) {
  //     console.log('\nProduct: ', prod);
  //     console.log('\n ------------- ');
  //   });
  // });
});
