import React from "react";
import Sider from "antd/es/layout/Sider";
import MenuComponent from './MenuComponent'

const SiderComponent = (menu) => {
    // let navigate = useNavigate();

    return (
        <Sider
            collapsedWidth={0}
        >
            <MenuComponent/>
        </Sider>
    )
}

export default SiderComponent;