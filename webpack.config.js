// @ts-ignore
const path = require("path"); // nodejs内置模块
module.exports = {
    entry: "./md5.js", //主文件
    output:{
    	path: path.resolve('./dist'),
        // 打包后的输出文件名
        filename: "cryptojs_md5.js"		
	}
}
