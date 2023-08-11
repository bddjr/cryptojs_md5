const cryptojs_md5 = require('./crypto-js-4.1.1/md5.js');
const WordArray = require('./crypto-js-4.1.1/lib-typedarrays.js')

// @ts-ignore
window.cryptojs_md5 = ( massage, key )=>{
    if(massage instanceof ArrayBuffer)
        massage = WordArray.create( massage );
    return cryptojs_md5( massage, key );
}
