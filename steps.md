#STEP 1
Create a meteor app

#STEP 2
Add some routes

	meteor add iron:router
	meteor add twbs:bootstrap
	
#STEP3
Add home page content

1. Add colpick CSS/JS to the public folder

2. Create a send color function

3. Intialize the colpick when the home template is rendered

#STEP4
Connect app to the MQTT Server

1. Add MQTT support to the app


		meteor add kandizzy:meteor-mqtt-fork
		meteor add meteorhacks:npm
2. Update the packages.json with the MQTT npm package and restart meteor
3. Initialize the connection to the MQTT server
4. Configure environment variables before running Meteor

		source config/env.sh
		meteor


	