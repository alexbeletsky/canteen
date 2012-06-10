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
        core: 'aura/mediator'
    }
});

// Starts main modules
requirejs(['core'], function (core) {
    core.start('chat', '#chat');
    core.start('hub');
});