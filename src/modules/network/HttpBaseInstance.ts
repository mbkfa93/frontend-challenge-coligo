/**
 * @description HttpRequest Object, that will be used with the network manager, as a part of the abstraction layer for the network package
 */


export class HttpBaseInstance {
    static readonly defaultConfig = {
        timeout: 5000,
        headers: {
            headers: {'X-Custom-Header': 'foobar'}
        },
    };

    private baseUrl: string;
    private _body: object;
    private _headers: object;
    private _timeout: number;

    constructor(
        {
            baseUrl = '',
            timeout = HttpBaseInstance.defaultConfig.timeout,
            body = {},
            headers = {}
        } = {}) {
        this.baseUrl = baseUrl;
        this._timeout = timeout;
        this._body = body;
        this._headers = {...HttpBaseInstance.defaultConfig.headers, ...headers};
    }
}