"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Http = void 0;
var Http;
(function (Http) {
    let Code;
    (function (Code) {
        let Enum;
        (function (Enum) {
            Enum["OK"] = "ok";
            Enum["BAD_REQUEST"] = "bad_request";
            Enum["TOKEN_INVALID"] = "token_invalid";
            Enum["TOKEN_NOT_PROVIDED"] = "token_not_provided";
            Enum["WRONG_AUTH_DATA"] = "wrong_auth_data";
            Enum["NOT_ALLOWED"] = "not_allowed";
            Enum["USER_NOT_FOUND"] = "user_not_found";
            Enum["BUSINESS_NOT_FOUND"] = "business_not_found";
            Enum["CLIENT_NOT_FOUND"] = "client_not_found";
            Enum["PAYMENT_PROVIDER_NOT_FOUND"] = "payment_provider_not_found";
            Enum["BOT_NOT_FOUND"] = "bot_not_found";
            Enum["PAGE_NOT_FOUND"] = "page_not_found";
            Enum["BLOCK_NOT_FOUND"] = "block_not_found";
            Enum["PRODUCT_NOT_FOUND"] = "product_not_found";
            Enum["CATEGORY_NOT_FOUND"] = "category_not_found";
            Enum["PARAM_NOT_FOUND"] = "param_not_found";
            Enum["PARAM_VARIANT_NOT_FOUND"] = "param_variant_not_found";
            Enum["ORDER_NOT_FOUND"] = "order_not_found";
            Enum["CART_ITEM_NOT_FOUND"] = "cart_item_not_found";
            Enum["PRODUCT_FAVORITE_NOT_FOUND"] = "product_favorite_not_found";
            Enum["UNHANDLED_ERROR"] = "unhandled_error";
        })(Enum = Code.Enum || (Code.Enum = {}));
    })(Code = Http.Code || (Http.Code = {}));
})(Http || (exports.Http = Http = {}));
//# sourceMappingURL=types.js.map