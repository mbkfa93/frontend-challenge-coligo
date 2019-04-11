/**
 * @description HttpRequest Object, that will be used with the network manager, as a part of the abstraction layer for the network package
 */
export class HttpRequest {
    static readonly requestMethod = {
        GET: "GET",
        POST: "POST"
    };

    private _url!: string;
    private _method!: string;
    private _body!: object;
    private _headers!: object;

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get method(): string {
        return this._method;
    }

    set method(value: string) {
        this._method = value;
    }

    get body(): object {
        return this._body;
    }

    set body(value: object) {
        this._body = value;
    }

    get headers(): object {
        return this._headers;
    }

    set headers(value: object) {
        this._headers = value;
    }


    constructor(url: string, {
        method = HttpRequest.requestMethod.GET,
        body = {},
        headers = {}
    } = {}) {
        this.url = url;
        this.method = method;
        this.body = body;
        this.headers = headers;
    }
}