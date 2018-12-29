/**
 * JSON 转换
 */

export default class JsonUtil {
    static jsonToString(obj) {
        return JSON.stringify(obj);
    }
    static stringToJson(obj)
    {
        return JSON.parse(obj);
    }
}