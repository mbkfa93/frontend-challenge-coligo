/**
 * @description HttpRequest Object, that will be used with the network manager, as a part of the abstraction layer for the network package
 */


export class HttpBaseInstance {
    /**
     *@description The headers were set to text/plain, based on the answer on this link
     * https://stackoverflow.com/questions/48255545/axios-getting-two-requests-options-post
     *
     * Make your CORS request a simple one.
     * You will have to change the Content-Type header to
     * application/x-www-form-urlencoded or multipart/form-data or text/plain. No application/json.
     *
     * application/json is the default for axios
     */
    static readonly defaultConfig = {
        timeout: 5000,
        headers: {
         'Content-Type': 'text/plain' //This is temp for fixing cross-origin errors with github, by using a simple request (doesn't support
        },
    };

    /**
     * @description
     * the !:string is from this link
     * https://github.com/Microsoft/TypeScript-Vue-Starter/issues/36#issuecomment-371434263
     */

    private _baseUrl!: string;
    private _body!: object;
    private _headers!: object;
    private _timeout!: number;


    get baseUrl(): string {
        return this._baseUrl;
    }

    set baseUrl(value: string) {
        this._baseUrl = value;
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

    get timeout(): number {
        return this._timeout;
    }

    set timeout(value: number) {
        this._timeout = value;
    }

    constructor(
        {
            baseUrl = '',
            timeout = HttpBaseInstance.defaultConfig.timeout,
            body = {},
            headers = {}
        } ={}) {
        this.baseUrl = baseUrl;
        this.timeout = timeout;
        this.body = body;
        this.headers = {...HttpBaseInstance.defaultConfig.headers, ...headers};
    }
}