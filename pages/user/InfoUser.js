//@ts-check

import InfoBatik from "../../components/User/InfoUser"
import LayoutUser from "../../components/User/LayoutUser";
import { useDataBatik } from "../../lib/swr-fetch";

const Info = () => {
    const { data, error } = useDataBatik();

    if (error) {
        return <div>Error Loading</div>
    }
    if (!data) {
        return <div>Loading</div>
    }

    return(
        <LayoutUser>
            <InfoBatik data={data}/>
        </LayoutUser>
    )
}

export default Info