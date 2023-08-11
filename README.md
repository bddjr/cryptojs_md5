# cryptojs_md5
用于网页端获取 MD5 摘要。

> 部分内容来自 https://github.com/brix/crypto-js 。  
> webCrypto 不支持 MD5 ，所以必须使用 CryptoJS 。  
> 比直接加载整个 CryptoJS 的体积更小，仅 7.84 KB 。  

***
## 使用

将 [dist/cryptojs_md5.js](dist/cryptojs_md5.js) 的js文件放到你的网站的根目录，然后使用以下方式加载它。  
> 必须在调用前加载成功！别怪我没提醒。  
```html
<script src="/cryptojs_md5.js"></script>
```

然后在JS中使用以下方式调用，以同步返回小写的字符串。  
```js
cryptojs_md5('要被加密的内容，此处也可以填写 ArrayBuffer 类型').toString()
// '8311060a4a3f58068fdc153c784afe28'
```

***
## 生成js文件（编译）

预先安装nodejs，然后运行这个命令以全局安装webpack。（已安装的请跳过这步）  
```
npm -g install webpack
```

然后在当前文件夹运行webpack以生成 `dist/cryptojs_md5.js`
```
webpack
```
