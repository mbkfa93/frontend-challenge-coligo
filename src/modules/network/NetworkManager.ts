import {HttpRequest} from "./HttpRequest";
import {HttpBaseInstance} from "./HttpBaseInstance";
import Axios from "axios";

class NetworkManager {
    static readonly manager = {
        AXIOS: 'axios',
        other: 'other' // for the default fetch
    };

    constructor({
                    instance = {},
                    instanceOptions = new HttpBaseInstance(),
                    managerType = NetworkManager.manager.AXIOS
                } = {}) {
        this.managerType = managerType;
        this.instance = instance;
        this.instanceOptions = instanceOptions;
    }

    private _instance: any;
    private _instanceOptions!: object;
    private _managerType!: string;

    get instance(): any {
        return this._instance;
    }

    get managerType(): any {
        return this._managerType;
    }

    set managerType(value: any) {
        this._managerType = value;
    }

    set instance(value: any) {
        this._instance = value;
    }

    get instanceOptions(): any {
        return this._instanceOptions;
    }

    set instanceOptions(value: any) {
        let currentInstance = this.instance;
        switch (this._managerType) {
            case NetworkManager.manager.AXIOS:
                let currentInstanceOptions = currentInstance['defaults'];

                if (value.baseUrl != null && value.baseUrl != "") {
                    currentInstanceOptions.baseURL = value.baseUrl;
                }
                if (value.timeout != null && value.timeout) {
                    currentInstanceOptions.timmeout = value.timeout;
                }
                if (value.body != null && value.body != {}) {
                    currentInstanceOptions.body = {...currentInstanceOptions.body, ...value.body};
                }
                if (value.headers != null && value.headers != {}) {
                    currentInstanceOptions.headers = {...currentInstanceOptions.headers, ...value.headers};
                }
                currentInstance['defaults'] = currentInstanceOptions;
                break;
            case NetworkManager.manager.other:
                //Left as example only
                break;
            default:
                this._instanceOptions = value;
                break;
        }
        this.instance = currentInstance;
    }

    public sendRequest = (request: HttpRequest) => {
        let returnedPromise;
        const requestCommonData = {
            clientInfo: {
                language: navigator.language,
                platform: navigator.platform,
                useragent: navigator.userAgent
            }
        };
        switch (this.managerType) {
            case NetworkManager.manager.AXIOS:
                returnedPromise = this.instance.request({
                    url: request.url,
                    method: request.method == HttpRequest.requestMethod.POST ? 'post' : 'get',
                    headers: request.headers,
                    data: {...requestCommonData, ...request.body}
                });
                break;
            case NetworkManager.manager.other:
            default:
                break;
        }
        return returnedPromise;
    };
}

export {NetworkManager, HttpBaseInstance, HttpRequest, Axios};