function connectToEngine(host, port) {
    // Create WebSocket connection.
    const sock = new WebSocket(`ws://${host}:${port}/memoire`);

    // Connection opened
    sock.addEventListener('open', function (event) {
        socket.send('Hello Server!');
    });

    // Listen for messages
    sock.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
    });
}

connectToEngine('localhost', 9090)