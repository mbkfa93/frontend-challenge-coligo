/**
 * @author Meena
 * @description To automatically get/set the status for API calls
 */
class _RequestStatus {
    private _FETCH!: string;
    private _REQUESTED!: string;
    private _SUCCEEDED!: string;
    private _FAILED!: string;


    get FAILED(): string {
        return this._FAILED;
    }

    set FAILED(value: string) {
        this._FAILED = value;
    }

    get FETCH(): string {
        return this._FETCH;
    }

    set FETCH(value: string) {
        this._FETCH = value;
    }

    get REQUESTED(): string {
        return this._REQUESTED;
    }

    set REQUESTED(value: string) {
        this._REQUESTED = value;
    }

    get SUCCEEDED(): string {
        return this._SUCCEEDED;
    }

    set SUCCEEDED(value: string) {
        this._SUCCEEDED = value;
    }

    constructor(apiName: string, postfix = "") {
        this.FETCH = `${apiName}_FETCH_${postfix}`;
        this.REQUESTED = `${apiName}_REQUESTED_${postfix}`;
        this.SUCCEEDED = `${apiName}_SUCCEEDED_${postfix}`;
        this.FAILED = `${apiName}_FAILED_${postfix}`;
    }
}

const RequestStatus = (apiName: string) => {
    return new _RequestStatus(apiName);
};
export default RequestStatus;