/// <reference types="mongoose/types/aggregate.js" />
/// <reference types="mongoose/types/callback.js" />
/// <reference types="mongoose/types/collection.js" />
/// <reference types="mongoose/types/connection.js" />
/// <reference types="mongoose/types/cursor.js" />
/// <reference types="mongoose/types/document.js" />
/// <reference types="mongoose/types/error.js" />
/// <reference types="mongoose/types/expressions.js" />
/// <reference types="mongoose/types/helpers.js" />
/// <reference types="mongoose/types/middlewares.js" />
/// <reference types="mongoose/types/indexes.js" />
/// <reference types="mongoose/types/models.js" />
/// <reference types="mongoose/types/mongooseoptions.js" />
/// <reference types="mongoose/types/pipelinestage.js" />
/// <reference types="mongoose/types/populate.js" />
/// <reference types="mongoose/types/query.js" />
/// <reference types="mongoose/types/schemaoptions.js" />
/// <reference types="mongoose/types/schematypes.js" />
/// <reference types="mongoose/types/session.js" />
/// <reference types="mongoose/types/types.js" />
/// <reference types="mongoose/types/utility.js" />
/// <reference types="mongoose/types/validation.js" />
/// <reference types="mongoose/types/virtuals.js" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype.js" />
import { LMCart, LMCartProduct, LMUserInfo } from "lionmiss-core";
import { ICart } from "../ICart.js";
import { LMBError } from "../LMB/index.js";
declare class MGSCart implements ICart {
    UserInfoModel: import("mongoose").Model<LMUserInfo, {}, {}, {}, import("mongoose").Document<unknown, {}, LMUserInfo> & Omit<LMUserInfo & Required<{
        _id: string;
    }>, never>, any>;
    getCart(idUser: string): Promise<LMCart | LMBError>;
    postCart(idUser: string, cart: LMCart): Promise<boolean | LMBError>;
    updateCart(idUser: string, cart: LMCart): Promise<boolean | LMBError>;
    deleteCart(idUser: string): Promise<boolean | LMBError>;
    postProductCart(idUser: string, cartProduct: LMCartProduct): Promise<boolean | LMBError>;
    updateProductCart(idUser: string, cartProduct: LMCartProduct): Promise<boolean | LMBError>;
    deleteProductCart(idUser: string, idProduct: string): Promise<boolean | LMBError>;
}
export { MGSCart };
