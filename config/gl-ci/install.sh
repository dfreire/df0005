#!/bin/bash

set -xe
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list

# Update packages
apt-get update -yqqq

# Install Chrome browser
apt-get install -y google-chrome-stable

# Install Virtual Display emulator
apt-get install -y xvfb