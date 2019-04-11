/**
 * @file networkInterfaces: Only this file should be included for any feature that requires networking access
 */
import {NetworkManager, HttpBaseInstance, HttpRequest, Axios} from "./NetworkManager";
import {CONSTANTS} from "../../constants";

const networkManager: NetworkManager = new NetworkManager({
    instance: Axios.create(),
    managerType: NetworkManager.manager.AXIOS,
    instanceOptions: new HttpBaseInstance({
        baseUrl: CONSTANTS.URLS.BASE_URL
    })
});

export {networkManager, HttpRequest, HttpBaseInstance};