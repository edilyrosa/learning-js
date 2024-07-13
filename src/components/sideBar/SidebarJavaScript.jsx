
"use client"
import Link from 'next/link';
import './sidebar.css';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faWindowMaximize, faFire, faPaintBrush,faCircleXmark, faHand} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Sidebar = () => {
  const path = usePathname();
  const [menuOpens, setMenuOpens] = useState(false)
  const handleSidebarMenu = () =>{
      setMenuOpens(!menuOpens)
  }
  return (
    
   <div className={`navbar ${menuOpens?  `closeMenu` : '' } `} id='navbar'>
      
      <div className="iconCloseSidebar">
        <i ><FontAwesomeIcon icon={faCircleXmark} onClick={handleSidebarMenu}/></i>
      </div>
  
      <ul className="menu">

        <li id='li-1'>
         <Link {...{href: '/', className: path === '/' ? 'link-active' : ''}} > 
            <i > <FontAwesomeIcon icon={faHome} /> <span>Home Page</span></i>
        </Link>
        </li>

        <li id='li-1'>
          <Link {...{href:'/javascript', className: path === "/javascript" ? 'link-active': ''}}>
            <i > <FontAwesomeIcon icon={faFire} /> <span>JavaScript</span></i>
         </Link>  
        </li>

        <li id='li-1'>
        <Link {...{href:'/javascript/window', className: path === "/window" ? 'link-active': ''}}>
         <i> <FontAwesomeIcon icon={faWindowMaximize} /> <span>Window Object</span></i>
         </Link>    
        </li>

        <li id='li-1'>
        <Link {...{href:'/javascript/elements', className:path === "/elements" ? 'link-active': ''}}>
         <i> <FontAwesomeIcon icon={faPaintBrush} /> <span>HTML Elements</span></i>
         </Link>    
        </li>

        <li id='li-1'>
        <Link {...{href:'/javascript/events', className:path === '/events' ? 'link-active': ''}}>
         <i> <FontAwesomeIcon icon={faHand} /> <span>Handle Events</span></i>
         </Link>    
        </li>


      </ul>
    </div>
  );
};

export default Sidebar;


