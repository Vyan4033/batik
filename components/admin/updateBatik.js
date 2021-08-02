//@ts-check

import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';


const Update = () => {
    const [_id, setId] = useState('');
    const [_nama, setNama] = useState('');
    const [_detail, setDetail] = useState('')
    const [_foto, setFoto] = useState (null);
    const [selectedFile, setSelectedFile] = useState('');
    const [file, setFile] = useState('');
    const [_harga, setHarga] = useState('')

    const router = useRouter();
    const { id, nama, detail, harga} = router.query;

    useEffect(() => {
        if (typeof id == 'string') {
            setId(id);
        }
        if (typeof nama == 'string') {
            setNama(nama);
        }
        if (typeof detail == 'string') {
            setDetail(detail);
        }
        if (typeof harga == 'string') {
            setHarga(harga);
        }
    }, [id, nama, detail, harga])

    const onSelectImage = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        const _file = e.target.files[0];
        const reader = new FileReader()
        reader.onload = function () {
            setFile(_file);
            setFoto(reader.result);
        }
        reader.readAsDataURL(_file)

    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/update-batik', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: _id,
                    nama: _nama,
                    detail: _detail,
                    foto : _foto,
                    harga: _harga
                }),
            })
            const json = await res.json()
            if (!res.ok) throw Error(json.message)

            alert("Update Data Sukses")
            Router.push('/admin/DataBatik')

        } catch (e) {
            throw Error(e.message)

        }

    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="text-center mb-3 font-bold">Edit Data Kain Batiki </h1>

                    <div className="text-center mb-3">
                        <label htmlFor="uploadGambar">
                            <img
                                className="rounded-circle"
                                src={_foto} alt="Pilih Foto"
                                style={{ background: "gray", width: "100px", height: "100px" }} />
                        </label>
                        <input
                            id="uploadGambar"
                            type="file"
                            style={{ display: "none" }}
                            onChange={onSelectImage} />

                    </div>
                    <div>
                    <div className="from-floating">
                        <input
                            className="form-control mb-2"
                            id="id"
                            type="text"
                            placeholder="ID"
                            value={_id}
                            onChange={(e) => setId(e.target.value)}
                        />
                        <label htmlFor="id"></label>
                    </div>
                    <div className="from-floating">
                        <input
                            className="form-control mb-2"
                            id="nama"
                            type="text"
                            placeholder="Nama Kain Batik"
                            value={_nama}
                            onChange={(e) => setNama(e.target.value)}
                        />
                        <label htmlFor="nama"></label>
                    </div>

                    <div className="from-floating">
                        <textarea 
                            className="form-control"
                            id="detail"
                            placeholder="Deskripsi Kain Batik"
                            value={_detail}
                            onChange={(e) => setDetail(e.target.value)}
                        />
                        <label htmlFor="detail"></label>
                    </div>
                    <div className="from-floating">
                        <textarea 
                            className="form-control"
                            id="harga"
                            placeholder="Harga Kain"
                            value={_harga}
                            onChange={(e) => setHarga(e.target.value)}
                        />
                        <label htmlFor="harga"></label>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <button className="btn btn-primary" type="submit">Update</button>
                    </div>
                    </div>
                </form>

            </div>
        </div>
    );

}
export default Update;