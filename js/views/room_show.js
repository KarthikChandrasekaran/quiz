
'use strict';
APP.RoomShowView = Backbone.View.extend({
  // the constructor
  initialize: function (options) {
    this.room = options.room;
  },

  // populate the html to the dom
  render: function () {
    this.$el.html(_.template($('#showTemplate').html(), this.room.toJSON()));
    return this;
  }
});

