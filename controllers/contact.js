'use strict'

var Contact = require('../models/contact');
var fs = require('fs');
var path = require('path');

var controller = {

    saveContact: function(req, res) {
        var contact = new Contact();

        var params = req.body;
        contact.name = params.name;
        contact.lastName = params.lastName;
        contact.email = params.email;
        contact.subject = params.subject;
        contact.message = params.message;

        console.log(contact);

        contact.save((err, contactStored) => {
            if (err) return res.status(500).send({ message: 'Error al guardar el documento.', err });

            if (!contactStored) return res.status(404).send({ message: 'No se ha podido guardar el documento' });

            return res.status(200).send({ contact: contactStored });
        });
    }
};

module.exports = controller;