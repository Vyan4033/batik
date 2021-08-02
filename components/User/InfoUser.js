//@ts-check


const InfoCafe = ({data}) => {
    return(
        <div className="container col py-3">
            {
                data.map((bwi,idx) => (
                    <div className="row featurette col py-3">
                        <div key={idx}>
                            <h2 className="featurette-heading">{bwi.id}. {bwi.nama}</h2>
                            <div className="text-center col py-3">
                                <img src={bwi.foto} style={{width:"400x", height: "300px"}}></img>
                            </div>
                            <p className="lead">{bwi.detail}</p>
                            <small>{bwi.harga}</small>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default InfoCafe