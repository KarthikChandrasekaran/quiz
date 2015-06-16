
"use strict";
APP.RoomIndexView = Backbone.View.extend({
  // the constructor
  initialize: function (options) {
    // model is passed through
    this.rooms = options.rooms;
    this.rooms.bind('reset', this.addAll, this);
  },

  // populate the html to the dom
  render: function () {
    this.$el.html($('#indexTemplate').html());
    this.addAll();
    return this;
  },

  addAll: function () {
    // clear out the container each time you render index
    this.$el.find('#room').children().remove();
    _.each(this.rooms.models, $.proxy(this, 'addOne'));
  },

  addOne: function (room) {
    var view = new APP.RoomView({
      rooms: this.rooms, 
      room: room
    });
    this.$el.find('#roomList').append(view.render().el);
  }
});

