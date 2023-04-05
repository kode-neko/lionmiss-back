import { Request, Response } from "express";
declare function getUser(req: Request, res: Response): void;
declare function getUserAll(req: Request, res: Response): void;
declare function postUser(req: Request, res: Response): void;
declare function updateUser(req: Request, res: Response): void;
declare function deleteUser(req: Request, res: Response): void;
export { getUser, getUserAll, postUser, updateUser, deleteUser };
