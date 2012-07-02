/*global require, requirejs*/
// Require.js allows us to configure shortcut alias
require.config({
    shim: {
        'underscore': {
            exports: '_'
        },

        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },

    paths: {
        backbone: 'libs/backbone',
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        io: '/socket.io/socket.io',
        amplify: 'libs/amplify'
    }
});

// Starts main modules
requirejs(['src/routing'], function (routing) {
    routing.startRouting();
});