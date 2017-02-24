// Created by Amanda Suydam 2-20-2017

'use strict';

var util = require('util');
module.exports = {
  hello : hello,
  update : update,
  putIn : putIn,
  goAway : goAway
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object

  functions below don
 */
function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
    // changed around from the original message
  var hello = util.format('Here is the non-existent database with tons of non-existent things. ' ,
      'They are invisible so look carefully');

  // this sends back a JSON response which is a single string
  res.json(hello);
}
// my function for put. starting oh so simple this time
function update(req, res) {
  var name = req.swagger.params.name.value;
  var update = util.format( name, ' updated!');

  res.json(update);
}

function putIn(req, res) {
  var name = req.swagger.params.name.value;
  var putIn = util.format( name,  ' added');

  res.json(putIn);
}

function goAway(req, res) {
  var deleted = util.format('Item deleted');

  res.json(deleted);
}