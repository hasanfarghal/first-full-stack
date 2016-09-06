var express = require("express");
var routes = express.Router();
var ObjectToSale = require("../schema")

routes.route("/")
    .get(function (req, res) {
        ObjectToSale.find(function (err, personal) {
            if (err) {
                res.status(500).send(err)

            } else {
                res.send(personal)
            }
        })
    })
    .post(function (req, res) {
        console.log(req.body)
        var newObject = new ObjectToSale(req.body);
        newObject.save(function (err, savedObject) {
            if (err) {
                res.staus(500).send(err);
            } else {
                res.send(newObject);
            }
        })


    });
routes.route("/:id")
    .delete(function (req, res) {
        ObjectToSale.findByIdAndRemove(req.params.id, function (err, deletedObject) {
            if (err) {
                res.status(500).send(err)
            } else {
                var responseObj = {
                    success: true,
                    message: "Successfully deleted the todo",
                    todo: deletedObject
                }
                res.send(responseObj)
            }
        })
    })
    .put(function (req, res) {
        var update = req.body;
        ObjectToSale.findOneAndUpdate({
            _id: req.params.id
        }, update, {
            new: true
        }, function (err, newObj) {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send(newObj);
            }
        })
    });

//.get(function (req, res) {
//    var id = req.params.id
//    ObjectToSale.findById(id, function (err, obj) {
//        if (err) {
//            res.status(500).send(err)
//
//        } else {
//            res.send(obj)
//        }
//    })
//});

module.exports = routes;