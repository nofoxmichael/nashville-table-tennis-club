import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="six" className="main style2 special">
                <ul className="icons">
                    <li><a href="https://www.facebook.com/NTTCinfo/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/nashvilletabletennis/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="/email" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Nashville Table Tennis Club</li><li>Design: <a href="http://therealphatmike.com">Michael Smith</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
