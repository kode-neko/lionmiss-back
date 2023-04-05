import { Request, Response } from "express";
declare function getCart(req: Request, res: Response): void;
declare function createCart(req: Request, res: Response): void;
declare function updateCart(req: Request, res: Response): void;
declare function deleteCart(req: Request, res: Response): void;
declare function postCartProduct(req: Request, res: Response): void;
declare function putCartProduct(req: Request, res: Response): void;
declare function delCartProduct(req: Request, res: Response): void;
export { getCart, createCart, updateCart, deleteCart, postCartProduct, putCartProduct, delCartProduct };
