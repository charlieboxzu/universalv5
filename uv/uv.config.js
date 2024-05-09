
self.__uv$config = {
    prefix: '/service/',

    /* Bare server URL */ 
    bare: 'https://bare-hvsxb7l2ca-uc.a.run.app/bare/',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
