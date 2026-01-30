import data from "./data";

import type { Country } from "./@types";
export type * from "./@types";

export default class ISO3166_1 {
    readonly #list: Country[];

    constructor() {
        this.#list = data.split(",").map(item => ({
            alpha2: item.slice(0, 2),
            alpha3: item.slice(2, 5),
            numeric: item.slice(5, 8),
            name: item.slice(8)
        }));
    }

    /**
     * 获取全部国家或地区列表
     */
    public get list() {
        return this.#list;
    }

    /**
     * 搜索国家或地区
     * @param name 国家或地区名称、ISO 3166-1 代码
     */
    public find(name: string) {
        name = name.toUpperCase();
        return this.#list.filter(item => (
            item.name.includes(name) ||
            item.alpha2.includes(name) ||
            item.alpha3.includes(name) ||
            item.numeric.includes(name)
        ));
    }

    /**
     * 精确搜索国家或地区
     * @param name 国家或地区名称
     */
    public findOne(name: string) {
        return this.#list.find(item => item.name === name);
    }

    /**
     * 使用 ISO 3166-1 Alpha-2 代码精确搜索国家或地区
     * @param code ISO 3166-1 Alpha-2 代码
     */
    public findByAlpha2(code: string) {
        code = code.toUpperCase();
        return this.#list.find(item => item.alpha2 === code);
    }

    /**
     * 使用 ISO 3166-1 Alpha-3 代码精确搜索国家或地区
     * @param code ISO 3166-1 Alpha-3 代码
     */
    public findByAlpha3(code: string) {
        code = code.toUpperCase();
        return this.#list.find(item => item.alpha3 === code);
    }

    /**
     * 使用 ISO 3166-1 Numeric 代码精确搜索国家或地区
     * @param code ISO 3166-1 Numeric 代码
     */
    public findByNumeric(code: string) {
        return this.#list.find(item => item.numeric === code);
    }
}
