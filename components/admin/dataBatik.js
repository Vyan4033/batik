//@ts-check

import { useDataBatik } from '../../lib/swr-fetch'
import Link from 'next/link'
import { mutate } from 'swr';
import Router from 'next/router'

const Data = () => {
        const { data, error } = useDataBatik();

        if (error) {
            return <div>Error Loading</div>
        }
        if (!data) {
            return <div>Loading</div>
        }


    async function delBatik(id) {
        let res = await fetch(`/api/hapus-batik?id=${id}`, { method: 'DELETE' })
        let json = await res.json()
        if (!res.ok) throw Error(json.message)
        mutate('/api/hapus-batik')
        alert('Data telah terhapus')
        Router.push('/admin/DataBatik')
    }

    return (
        <div className="container mx-auto py-4 ">
            <h3 className="font-bold text-center">Data Batik</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Nama Batik</th>
                        <th className="text-center">Foto</th>
                        <th className="text-center">Detail</th>
                        <th className="text-center">Harga</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((bwi, idx) => (
                            <tr key={idx}>
                                <td className="text-center">
                                    {bwi.id}
                                </td>
                                <td className="text-center">
                                    {bwi.nama}
                                </td>
                                <td className="text-center">
                                    <img src={bwi.foto}style={{ width: "50px", height: "50px" }} />
                                </td>
                                <td>
                                    {bwi.detail}
                                </td >
                                <td>
                                    {bwi.harga}
                                </td>
                                <td className="text-center">
                                        <Link href={`/admin/UpdateBatik?
                                        $id=${bwi.id}
                                        &nama=${bwi.nama}
                                        &detail=${bwi.detail}`}
                                        >
                                            <a className="btn btn-primary">Edit</a>
                                        </Link>
                                        <button
                                            className = "btn btn-danger"
                                            value={bwi.id}
                                            onClick={(e) => delBatik(e.target.value)}>
                                            Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Data;