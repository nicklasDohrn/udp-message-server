var PORT = 1000;
var HOST = '192.168.178.36';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);

});

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
  });

server.bind(PORT, HOST);