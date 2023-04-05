import { Request, Response } from "express";
declare function getShipping(req: Request, res: Response): void;
declare function getShippingAll(req: Request, res: Response): void;
declare function postShipping(req: Request, res: Response): void;
declare function updateShipping(req: Request, res: Response): void;
declare function deleteShipping(req: Request, res: Response): void;
export { getShipping, getShippingAll, postShipping, updateShipping, deleteShipping, };
