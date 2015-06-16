'use strict';
window.APP = window.APP || {};
APP.SmartHomeRouter = Backbone.Router.extend({
  routes: {
    'rooms/index': 'index',
    'room/:id/view': 'show'
  },

  initialize: function (options) {
    this.rooms = options.rooms;
    this.index();
  },

  show: function (id) {
    var room = this.rooms.get(id);
    this.currentView = new APP.NoteShowView({
      room: room
    });
    $('#primary-content').html(this.currentView.render().el);
  },

  index: function () {
    this.currentView = new APP.RoomIndexView({
      rooms: this.rooms
    });
    $('#primary-content').html(this.currentView.render().el);
    // we would call to the index with
    // this.rooms.fetch()
    // to pull down the index json response to populate our collection initially
  }
});
