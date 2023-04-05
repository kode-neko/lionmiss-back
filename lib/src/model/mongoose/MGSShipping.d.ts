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
import { LMShipping } from "lionmiss-core";
import { IShipping } from "../IShipping.js";
import { LMBError } from "../LMB/index.js";
declare class MGSShipping implements IShipping {
    ShippingModel: import("mongoose").Model<LMShipping, {}, {}, {}, import("mongoose").Document<unknown, {}, LMShipping> & Omit<LMShipping & Required<{
        _id: string;
    }>, never>, any>;
    getShipping(id: string): Promise<LMShipping | LMBError>;
    getShippingAll(): Promise<LMShipping[] | LMBError>;
    postShipping(shipping: LMShipping): Promise<LMShipping | LMBError>;
    updateShipping(shipping: LMShipping): Promise<boolean | LMBError>;
    deleteShipping(id: string): Promise<boolean | LMBError>;
}
export { MGSShipping };
