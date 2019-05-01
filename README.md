# translation README

VSCode 简洁翻译插件(使用有道智云)

## Features

-   使用有道智云 API
-   显示发音、词性、词义

## Requirements

需要在[有道智云](https://ai.youdao.com/gw.s)注册并获取相应翻译 api 的 appKey(应用 ID)与秘钥
整个过程**免费**

## Extension Settings

"translation.displayMethod": {
"type": "string",
"default": "statusBar",
"description": "'statusBar'表示在状态栏中显示，'messageWindow'表示在消息窗口中显示"
},
"translation.hideTimeout": {
"type": "integer",
"default": 3,
"description": "使用状态栏显示时，显示翻译的持续时间(秒)"
},
"translation.youdaoAppKey": {
"type": "string",
"description": "有道智云的翻译实例 appKey"
},
"translation.youdaoSecretKey": {
"type": "string",
"description": "有道智云的翻译实例秘钥"
}

-   `translation.displayMethod`: 展示翻译的方式 `statusBar`表示在状态栏中显示，`messageWindow`表示在消息窗口中显示
-   `translation.hideTimeout`: 使用状态栏显示时，显示翻译的持续时间(秒) (只有`statusBar`模式下方可设置)
-   `translation.youdaoAppKey`: 有道智云应用 ID
-   `translation.youdaoSecretKey`: 有道智云应用秘钥

## Known Issues

使用`messageWindow`时无法设置自动消失时间(VSCode 暂不支持)

## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.1

凑合着用吧...

**Enjoy!**
