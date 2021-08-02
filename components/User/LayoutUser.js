//@ts-check

import Header from "./Header";

const LayoutUser = ({children}) => {
    return(
        <div>
            <Header>
                {children}
            </Header>
        </div>
    )
}

export default LayoutUser