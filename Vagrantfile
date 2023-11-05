Vagrant.configure("2") do |config|
  # Specify the Vagrant box
  config.vm.box = "ubuntu/bionic64"

  # Expose port 5001
  config.vm.network :forwarded_port, guest: 5001, host: 5001

  # Add any other Vagrant configuration options you need
end
