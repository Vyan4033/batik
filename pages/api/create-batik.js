//@ts-check

import { db } from "../../lib/db";

const handler = async(req,res) => {
    const { id, nama, foto, detail, harga} = req.body;
    try {
        if (!id || !nama || !foto || !detail || !harga) {
            return res
            .status(400)
            .json({message: 'Input harus di isi semua'})
        }

        const results = await db.query(`INSERT INTO batik (id, nama, foto, detail, harga) VALUES (?,?,?,?,?)`,
        [id, nama, foto, detail, harga]
        );
        
        await db.end;

        return res.json(results)
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};

export default handler;