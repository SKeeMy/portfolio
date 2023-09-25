import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import "../../utils/i18next";
import { Link } from 'react-router-dom';

function SidebarItems({ item, bar, child }) {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);

  if (item.children) {
    return (
      <div onClick={() => setActive(!active)} className={active ? 'sidebar_item active' : 'sidebar_item'}>
        <div className={active ? 'sidebar_content active' : 'sidebar_content'} >
          {t(item.text)}
          <FontAwesomeIcon className='icon' icon={faCaretRight} />
        </div>
        <div className='over_content'>
          {item.children.map((child, index) => <SidebarItems key={index} item={child} />)}
        </div>
      </div>
    )
  } else {
    return (
      <Link to={item.href} className='sidebar_item'>
        <div className={active ? 'sidebar_content active' : 'sidebar_content'}  >
          <div className="sidebar_content">
            {t(item.text)}
          </div>
        </div>
      </Link>
    )
  }
}

export default SidebarItems;