import { Request, Response } from "express";

export const find = async (req: Request, res: Response) =>{
    res.status(200).json({ message: 'Todas las tarjetas'})
}