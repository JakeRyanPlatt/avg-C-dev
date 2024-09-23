#!/bin/bash

#get the basic dependencies set up
sudo apt update
sudo apt upgrade -y
sudo apt install curl vim build-essential gnome-tweaks git -y

#install volta (volta.sh)
curl https://get.volta.sh | bash

#install node using volta from the absolute path
$HOME/.volta/bin/volta install node

echo "All Done! You should run this command to finish: source ~/.bashrc"


