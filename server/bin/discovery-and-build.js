'use strict';

var path = require('path');
var fs = require('fs');
var app = require(path.resolve(__dirname, '../server'));
var outputPath = path.resolve(__dirname, '../../common/models');

var dataSource = app.dataSources.artlas;

function schemaCB(err, schema) {
  if (schema) {
    console.log('Auto discovery success: ' + schema.name);
    var outputName = outputPath + '/' + schema.name + '.json';
    fs.writeFile(outputName, JSON.stringify(schema, null, 2), function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('JSON saved to ' + outputName);
      }
    });
  }
  if (err) {
    console.error(err);
    return;
  }
  return;
};

dataSource.discoverSchema('address', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('catalog_article', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('city', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('committee', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('country', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('date', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('exhibited_work', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('exhibition', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('exhibition_catalog', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('exhibition_catalog_has_committee', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('exhibition_group', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('exhibition_group_type', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('exhibition_section', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('exhibition_section_has_committee', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('ext_geoloc_req', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('has_exhibited_in', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('is_partnair', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('person_type', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('personage', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('picture', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('session', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('space_type', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('state', {schema: 'artlas'}, schemaCB);
dataSource.discoverSchema('user', {schema: 'artlas'}, schemaCB);
