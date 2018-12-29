import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar-nav">
                <ul className="nav">
                    <li className="nav-item"><a className="nav-link active" href="#/dashboard" aria-current="page"><i
                        className="nav-icon icon-speedometer"></i>Dashboard<span className="badge badge-info">NEW</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="nav-icon cui-speedometer"></i> Nav item
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="nav-icon cui-speedometer"></i> With badge
                            <span className="badge badge-primary">NEW</span>
                        </a>
                    </li>
                    <li className="nav-item nav-dropdown">
                        <a className="nav-link nav-dropdown-toggle" href="#">
                            <i className="nav-icon cui-puzzle"></i> Nav dropdown
                        </a>
                        <ul className="nav-dropdown-items">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="nav-icon cui-puzzle"></i> Nav dropdown item
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="nav-icon cui-puzzle"></i> Nav dropdown item
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item mt-auto">
                        <a className="nav-link nav-link-success" href="https://coreui.io">
                            <i className="nav-icon cui-cloud-download"></i> Download CoreUI</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-link-danger" href="https://coreui.io/pro/">
                            <i className="nav-icon cui-layers"></i> Try CoreUI
                            <strong>PRO</strong>
                        </a>
                    </li>
                </ul>
            </nav>
            <button className="sidebar-minimizer brand-minimizer" type="button"></button>
        </div>
    )
}

export default Sidebar;