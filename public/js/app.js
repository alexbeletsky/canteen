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

        core: 'aura/mediator'
    }
});

// Starts main modules
requirejs(['core'], function (core) {
    core.publish('chat', "#chat");
});