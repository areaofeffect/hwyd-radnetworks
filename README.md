# hwyd-radnetworks
"How Was Your Day" is an experimental social network that enables you to communicate via color and light.

##Installing Meteor
	curl https://install.meteor.com/ | sh
* [Documentation](https://www.meteor.com/install)


##SSH in to your RPi
Connect to the `howwasyourday` network with the password provided

	ssh pi@{colorberry}.local

	
* redcolorberry
* orangecolorberry
* yellowcolorberry
* greencolorberry
* bluecolorberry
* indigocolorberry
* violetcolorberry



##Installing MQTT on the RPi

	  wget http://repo.mosquitto.org/debian/mosquitto-repo.gpg.key
	  sudo apt-key add mosquitto-repo.gpg.key
	  cd /etc/apt/sources.list.d/
	  sudo wget http://repo.mosquitto.org/debian/mosquitto-wheezy.list
	  sudo apt-get update
	  sudo apt-cache search mosquitto
	  sudo apt-get install mosquitto python-mosquitto mosquitto-clients

###Test via command line
	  mosquitto_sub -d -t hello/world
	  mosquitto_pub -d -t hello/world -m "Hello World"
	  
	  mosquitto_sub -h YOUR_HOST_IP_ADDRESS -d -t hello/world

###Open port 1883
	  sudo iptables -A INPUT -p tcp -m tcp --dport 1883 -j ACCEPT

###Use MQTT in a python script
	sudo apt-get install python-pip
	sudo pip install paho-mqtt

* [Documenation](https://pypi.python.org/pypi/paho-mqtt)

##Test the LED strips
1. Install the drivers (The neopixel LED driver software is preinstalled on the colorberries.)

		sudo apt-get update
		sudo apt-get install build-essential python-dev git scons swig
		git clone https://github.com/jgarff/rpi_ws281x.git
		cd rpi_ws281x
		scons
		cd python
		sudo python setup.py install

		
2. Connect the LED strip to the custom hardware
3. Run the strand test

		cd examples
		sudo python strandtest.py
	
##Control the LED strips from the app
We will write python script using paho-mqtt installed earlier and the neopixel library. 