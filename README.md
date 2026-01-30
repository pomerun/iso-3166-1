# ISO 3166-1

[![npm version](https://img.shields.io/github/package-json/v/pomerun/iso-3166-1?logo=github)](https://github.com/pomerun/iso-3166-1/pkgs/npm/iso-3166-1)
[![MIT Licence](https://img.shields.io/github/license/pomerun/iso-3166-1)](https://github.com/pomerun/iso-3166-1/blob/master/LICENSE)

> 国家或地区 ISO 3166-1 代码

## 支持环境
- Node.js >= 21
- Chrome >= 117

在更低版本中使用需要自行根据框架处理降级或polyfill
## 使用
### Script
```html
<script src="build/index.iife.js"></script>
<script>
    const iso3166_1 = new ISO3166_1();

    iso3166_1.list; // 全部国家或地区列表
    iso3166_1.find("法国"); // 获取与 法国 相关的 ISO 3166-1 代码
</script>
```
### ES Module
> 如果使用 npm 等包管理器安装，也可在项目根目录中添加 `.npmrc` 文件，在其中加入一行 `@pomerun:registry=https://npm.pkg.github.com`，这样安装依赖时可省略指定 GitHub Package 的 --registry 参数

安装依赖：
```shell
npm i @pomerun/iso-3166-1 --registry=https://npm.pkg.github.com
```
引用依赖：
```javascript
import ISO3166_1 from "@pomerun/iso-3166-1";

const iso3166_1 = new ISO3166_1();

iso3166_1.list; // 全部国家或地区列表
iso3166_1.find("法国"); // 获取与 法国 相关的 ISO 3166-1 代码
```
### CommonJS
安装依赖：
```shell
npm i @pomerun/iso-3166-1 --registry=https://npm.pkg.github.com
```
引用依赖：
```javascript
const ISO3166_1 = require("@pomerun/iso-3166-1");

const iso3166_1 = new ISO3166_1();

iso3166_1.list; // 全部国家或地区列表
iso3166_1.find("法国"); // 获取与 法国 相关的 ISO 3166-1 代码
```
## 属性、方法
#### list
全部国家或地区列表
- 类型：`Country[]`
#### find
搜索国家或地区
- 类型：`function`
- 参数：

| 参数名  | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| name | `string` | 否 | - | 国家或地区名称、ISO 3166-1 代码 |

- 返回值：`Country[]`
#### findOne
精确搜索国家或地区
- 类型：`function`
- 参数：

| 参数名  | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| name | `string` | 否 | - | 国家或地区名称 |

- 返回值：`Country`
#### findByAlpha2
使用 ISO 3166-1 Alpha-2 代码精确搜索国家或地区
- 类型：`function`
- 参数：

| 参数名  | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| code | `string` | 否 | - | ISO 3166-1 Alpha-2 代码 |

- 返回值：`Country`
#### findByAlpha3
使用 ISO 3166-1 Alpha-3 代码精确搜索国家或地区
- 类型：`function`
- 参数：

| 参数名  | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| code | `string` | 否 | - | ISO 3166-1 Alpha-3 代码 |

- 返回值：`Country`
#### findByNumeric
使用 ISO 3166-1 Numeric 代码精确搜索国家或地区
- 类型：`function`
- 参数：

| 参数名  | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| code | `string` | 否 | - | ISO 3166-1 Numeric 代码 |

- 返回值：`Country`
