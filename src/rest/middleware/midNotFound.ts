import { Request, Response } from "express";
import i18next from 'i18next';

function midNotFound(req: Request, res: Response) {
  res.status(404).json(i18next.t('msg.notfound'));
}

export default midNotFound;