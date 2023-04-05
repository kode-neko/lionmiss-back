import { Request, Response } from "express";
declare function getProduct(req: Request, res: Response): void;
declare function getProductAll(req: Request, res: Response): void;
declare function postProduct(req: Request, res: Response): void;
declare function updateProduct(req: Request, res: Response): void;
declare function deleteProduct(req: Request, res: Response): void;
export { getProduct, getProductAll, postProduct, updateProduct, deleteProduct };
