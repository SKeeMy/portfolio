import React from 'react'
import SidebarItems from './SidebarItems';
import Items from '../../data/data.json'
import "../../utils/i18next"
import logo from '../../../src/logoType.svg'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar_title">
                <span><img src={logo} alt="" className="logo_svg" /></span>
            </div>
            {Items.map((item, index) => <SidebarItems key={index} item={item} />)}
        </div>
    )
}

export default Sidebar;