const mongoose = require('mongoose');
//const assign = require('object-assign');
//const wrap = require('co-express');
//const only = require('only');
//const Device = mongoose.model('Device');
//var globals = require('globals');

exports.getDevices = function(req, res) {
    res.send({ name: "jakas nazwa" });
};

exports.getDevice = function(req, res) {
    var id = req.params.id;
    res.send({ name: "jakas nazwa id:" + id });
};

exports.addDevice = function(req, res) {
    console.log("Params object: ", req);
    var name = req.body.name;
    res.send({ result: 'ok', zmiana: 1, name: name });
};