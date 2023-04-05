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
import { LMProduct } from "lionmiss-core";
import { IProduct } from "../IProduct.js";
import { LMBError } from "../LMB/index.js";
declare class MGSProduct implements IProduct {
    ProductModel: import("mongoose").Model<LMProduct, {}, {}, {}, import("mongoose").Document<unknown, {}, LMProduct> & Omit<LMProduct & Required<{
        _id: string;
    }>, never>, any>;
    getProduct(id: string): Promise<LMProduct | LMBError>;
    getProductAll(): Promise<LMProduct[] | LMBError>;
    postProduct(product: LMProduct): Promise<LMProduct | LMBError>;
    updateProduct(product: LMProduct): Promise<boolean | LMBError>;
    deleteProduct(id: string): Promise<boolean | LMBError>;
}
export { MGSProduct };
