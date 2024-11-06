
self.__uv$config = {
    prefix: '/uv/service/ghost/',

    /* Bare server URL */ 
    bare: 'https://muddy-rice-ba72.acsessremote.workers.dev/',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/space.js',
    client: '/uv/comet.js',
    bundle: '/uv/atom.js',
    config: '/uv/liftoff.js',
    sw: '/uv/constellation.js',
};
