const shouldBlock = (req) => req.headers['X-Bare-Url'].includes('porn');

server.on('request', (req, res) => {
    if (shouldBlock(req)) return res.end('imagine searching up porn. get blocked bozo');

    if (bareServer.shouldRoute(req)) bareServer.routeRequest(req, res);
    else app(req, res); // Assuming you're using the generic bare + express use case
});

server.on('upgrade', (req, socket, head) => {
    if (shouldBlock(req)) return socket.end();

    if (bareServer.shouldRoute(req)) bareServer.routeUpgrade(req, socket, head);
    else socket.end();
});

self.__uv$config = {
    prefix: '/service/',

    /* Bare server URL */ 
    bare: 'https://tomp.app',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
