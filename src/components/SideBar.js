import React from 'react';
import image from '../assets/images/logo-DH.png';
import { NavLink, Link } from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                        <Link className="navDashDh"  to="/">Dashboard - DH movies
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                        </Link>
                        
                    </NavLink>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Genres</span>
                    </NavLink>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Last Movies</span>
                    </NavLink>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Chart">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Movies</span>
                    </NavLink>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;