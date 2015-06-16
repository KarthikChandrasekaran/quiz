'use strict';
APP.RoomView = Backbone.View.extend({
  // functions to fire on events
  events: {
    'click .onoffswitch': 'controller',
    'click .button': 'changeTemperature'
  },

  // the constructor
  initialize: function (options) {
    // model is passed through
    this.room  = options.room;
    this.rooms = options.rooms;
  },

  // populate the html to the dom
  render: function () {
    this.$el.html(_.template($('#roomTemplate').html(), this.room.toJSON()));
    return this;
  },

  // Handle user event on the controls
  controller: function (event) {
    if (event.currentTarget.attributes.data.nodeValue === 'switch') {
      var applianceType = event.currentTarget.dataset.appType;
      var displayType = event.currentTarget.dataset.appDisplay;
      if(applianceType !== 'Curtains') {
        this.flipSwitch(event, applianceType, displayType);
      } else {
        this.animateCurtain(event, '');
      }
    }
  },

  /*
    Handle the flipping of the Switch Controller
    @param - event 
    @param - applianceType -- Type of the aapliance for which the controller is associated    
    @param - displayType -- Image based or String based display for the appliances
  */
  flipSwitch: function (event, applianceType, displayType) {
    var checkBox = event.currentTarget.children[0];

    if (checkBox.checked) {
        checkBox.checked = false;
        if (displayType == 'String') {
          $( '#room_' + applianceType + this.room.attributes.id).html( 'OFF' );
        } else {
          $( '#room_' + applianceType + this.room.attributes.id).removeClass( 'image_on' );
          $( '#room_' + applianceType + this.room.attributes.id).addClass( 'image_off' );
        }
    } else {
        checkBox.checked = true;
        if (displayType == 'String') {
          $( '#room_' + applianceType + this.room.attributes.id).html( 'ON' );
        } else {
          $( '#room_' + applianceType + this.room.attributes.id).removeClass( 'image_off' );
          $( '#room_' + applianceType + this.room.attributes.id).addClass( 'image_on' );
        }
    }
  },

  // Animate the Curtain - bring Down / Up the curtain
  animateCurtain: function (event) {
    var checkBox = event.currentTarget.children[0];
    if (checkBox.checked) {
        checkBox.checked = false;
        $('#curtain_' + this.room.attributes.id).animate({height: '1px'}, 1500 );
    } else {
        checkBox.checked = true;
        $('#curtain_' + this.room.attributes.id).animate({height: '100px'}, 1500 );
    }
  }
});
