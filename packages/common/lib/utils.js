"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uint8ArrayToBase64 = void 0;
function uint8ArrayToBase64(array) {
    let res = '';
    for (let i = 0; i < array.byteLength; i++) {
        res += String.fromCharCode(array[i]);
    }
    return window.btoa(res);
}
exports.uint8ArrayToBase64 = uint8ArrayToBase64;
//# sourceMappingURL=utils.js.map