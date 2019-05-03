# translation README

VSCode 简洁翻译插件

## Features

-   可有多种翻译 API 可选
-   使用有道智云 API 显示发音、词性、词义
-   使用谷歌翻译 显示词义

## Requirements

需要在[有道智云](https://ai.youdao.com/gw.s)注册并获取相应翻译 api 的 appKey(应用 ID)与秘钥
整个过程**免费**

**更新**
默认使用谷歌翻译 无需注册等繁琐操作 但是词义、解释等较少

## Extension Settings

-   `translation.API`: 使用的翻译 API 默认为谷歌`google` 可切换为有道`youdao`
-   `translation.displayMethod`: 展示翻译的方式 `statusBar`表示在状态栏中显示，`messageWindow`表示在消息窗口中显示
-   `translation.hideTimeout`: 使用状态栏显示时，显示翻译的持续时间(秒) (只有`statusBar`模式下方可设置)
-   `translation.youdaoAppKey`: 有道智云应用 ID
-   `translation.youdaoSecretKey`: 有道智云应用秘钥

## Known Issues

使用`messageWindow`时无法设置自动消失时间(VSCode 暂不支持)

## Release Notes

### 0.0.1

凑合着用吧...

### 0.1.0

新增谷歌翻译 API 并默认使用
**Enjoy!**
