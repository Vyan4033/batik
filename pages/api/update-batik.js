//@ts-check

import { db } from "../../lib/db";


const handler = async (req, res) => {
    const { id, nama, foto, detail, harga} = req.body;
    try {
        if (!id || !nama || !foto || !detail || !harga) {
            return res
                .status(400)
                .json({ Message: 'isian tidak boleh kosong' })
        }
        //const results = await sql_query
        const results = await db.query(
            `UPDATE batik set id = ?, nama = ?, foto = ?, detail = ?, harga = ? WHERE id = ?`,
            [id, nama, foto, detail, harga, id]
        );

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export default handler;