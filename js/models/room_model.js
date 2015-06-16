
'use strict';
APP.RoomModel = Backbone.Model.extend({
  
});

APP.RoomCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  model: APP.RoomModel
  /*url: "/../../data/Rooms.json",

    initialize: function(){
        this.fetch({
            success: this.fetchSuccess,
            error: this.fetchError
        });
    },

    fetchSuccess: function (collection, response) {
        console.log('Collection fetch success', response);
        console.log('Collection models: ', this.models);
    },

    fetchError: function (collection, response) {
        throw new Error("Books fetch error");
    }*/
});
