# Install sources and grab from other repo
sudo sh -c "echo 'deb-src http://mirrordirector.raspbian.org/raspbian/ wheezy main contrib non-free rpi' >> /etc/apt/sources.list"
sudo apt-get update
sudo apt-get --no-install-recommends install -y build-essential git devscripts autotools-dev fakeroot dpkg-dev debhelper autotools-dev dh-make quilt ccache libsamplerate0-dev libpulse-dev libaudio-dev lame libjack-jackd2-dev libasound2-dev libtwolame-dev libmp4v2-dev libshout3-dev libmp3lame-dev

# Grab darkice from source
mkdir src && cd src/
apt-get source darkice -y
cd darkice-1.0/
cd debian/
rm -rf rules
wget https://stmllr.net/files/linux/rules
chmod +x rules

# Build darkice from source
debchange -v 1.0-999~mp3+1
dpkg-buildpackage -rfakeroot -uc -b
sudo dpkg -i ../darkice_1.0-999~mp3+1_armhf.deb
sudo cp /usr/share/doc/darkice/examples/darkice.cfg /etc/

# List audio device and install and configure icecast
arecord -l
sudo aptitude install icecast2
