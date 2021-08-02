//@ts-check

import { useState } from "react";

const Create = () => {

    const [id, setId] = useState('');
    const [nama, setNama] = useState('');
    const [foto, setFoto] = useState(null); 
    const [detail, setDetail] = useState('')
    const [selectedFile, setSelectedFile] = useState('');
    const [file, setFile] = useState('');
    const [harga, setHarga] = useState('')

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


    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:3000/api/create-batik", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    foto,
                    nama,
                    detail,
                    harga,
                    }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Penambahan Data Sukses")
        } catch (e) {
            throw Error(e.message)
        }
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="text-center">Input Data Kain Batik</h1>

                    <div className="text-center mb-3">
                        <label htmlFor="uploadGambar">
                            <img
                                className="rounded-circle"
                                src={foto} alt="Pilih Foto"
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
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
                            <label htmlFor="id"></label>
                        </div>
                        <div className="from-floating">
                            <input
                                className="form-control mb-2"
                                id="nama"
                                type="text"
                                placeholder="Nama Batik"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                            <label htmlFor="nama"></label>
                        </div>

                        <div className="from-floating">
                            <textarea 
                                className="form-control"
                                id="detail"
                                placeholder="Detail Batik"
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                            />
                            <label htmlFor="detail"></label>
                        </div>
                        <div className="from-floating">
                            <textarea 
                                className="form-control"
                                id="harga"
                                placeholder="Harga"
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}
                            />
                            <label htmlFor="harga"></label>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create;