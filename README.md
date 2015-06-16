<html>
  <head>
  </head>
  <body>
    <div style="text-align: center"><b>Smart Home Controller</b></div><br/><br/>

    <div>
      A javascript based Home automation system which allows the user to configure and control all appliance. Built using Javascript, Backbone.js, jQuery, Underscore and Bootstrap provides an elegant and one place control. 
    </div>
    <br/><br/>
    <div>
      <div>
        <b>How to run the app</b> <br/>
        <div>The app is bootstrapped using <a href="index.html">index html</a>. Just open index.html in any browser (Tested in Chrome, Safari and Firefox)</div>
        <div>Have been tested on Chrome, Firefox and Safari. The page is responsive and tested in major phones / tablets using simulator.</div>
      </div>
      <br/><br/>
      <div>
        <b>How the app works</b> <br/>
        <div>
           Since we do not have any server running, the data is loaded from a json (Refer index.html for the json). Ideally this data will be loaded in the model 'room_model.js'. The code is added but commented out.
          <br/><br/>
          
        </div>
        <br/>
        <b>Configuration:</b>
        The json data (response) has a list of Rooms that are registered for your home. Each room has a name and list of appliances.

        Appliance has - 
        <ul>
          <li>Name</li>
          <li>
            Control Type -  <br/>
            <ol>
              <li>Boolean - Displays a switch type control so the user can switch ON or OFF the appliance</li>
              <li>Range - Displays a range knob wih which the user can increase or decrease the value in some defined step. The Range works with 3 data - Min, Max and Step</li>
            </ol>
          </li>
          <li>
            State of the appliance - <br/>
              Possible values are <b> ON / OFF </b>
          </li>
          <li>
            Values - <br/>
            The value can be represented either as a String or Image Icon
        </ul>
        The data works in such a way that you can add any number of Rooms / Appliance so that it gets picked up in the UI.

        <pre>
        <b>Sample </b>
        [
          {
            "room": "Living Room",
            "id": "1",
            "appliances": [
              {
                "name": "Light",
                "state": "ON",
                "controlType": "Boolean",
                "values": {
                  "display": "Image"
                }
              },
              {
                "name": "Fan",
                "controlType": "Range",
                "val": 2,
                "values": {
                  "Min": 0,
                  "Max": 3,
                  "Step": 1
                }
              },
              {
                "name": "Thermostat",
                "controlType": "Range",
                "val": 68,
                "values": {
                  "Min": 55,
                  "Max": 100,
                  "Step": 1
                }
              },
              {
                "name": "Curtains",
                "state": "OFF",
                "controlType": "Boolean",
                "values": {
                  "display": "String"
                }
              }
            ]
          },
          {
            "room": "Kitchen",
            "id": "2",
            "appliances": [
              {
                "name": "Light",
                "state": "ON",
                "controlType": "Boolean",
                "values": {
                  "display": "String"
                }
              },
              {
                "name": "Diswasher",
                "state": "OFF",
                "controlType": "Boolean",
                "values": {
                  "display": "String"
                }
              },
              {
                "name": "Thermostat",
                "controlType": "Range",
                "val": 74,
                "values": {
                  "Min": 55,
                  "Max": 100,
                  "Step": 1
                }
              }
            ]
          }
        ]
        </pre>
      </div>
    </div>
  </body>
</html>
