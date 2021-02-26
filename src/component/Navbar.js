import React from 'react'

const Navbar = () => {
    const [section, setsection] = useState(['About', 'Skills', 'Project', 'Contact']);
    return (
        <>
            <nav id="nav" className="navbar">
                <div className="nav-content">
                    <div className="nav-inner-wrapper">
                        <ul className='nav-list'>
                            {section.map((link, index) => {
                                <li key={index} className="nav-item">
                                    <Link >{link}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
