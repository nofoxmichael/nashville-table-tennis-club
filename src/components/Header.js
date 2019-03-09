import React from 'react';

import banner from '../assets/images/banner.png';

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span><img className="banner" src={banner} alt="" /></span>
                </div>
            </section>
        )
    }
}

export default Header
