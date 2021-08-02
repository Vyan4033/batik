//@ts-check

import Side from "./Sidebar";

const Layout = ({children}) => {
    return(
        <div>
            <Side>
                {children}
            </Side>
        </div>
    )
}

export default Layout