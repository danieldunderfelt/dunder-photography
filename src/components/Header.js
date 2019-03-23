import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import styles from '../style/Header.module.scss'

const Header = class extends React.Component {
  render() {
    return (
      <nav className={styles.Header}>
        <div className={styles.HeaderContent}>
          <Link to="/" title="Logo" className={styles.Logo}>
            <h1>
              <img src={logo} alt="Very Cool" />
            </h1>
          </Link>
          <p>
            Hi, I'm Daniel Dunderfelt! Photography is a hobby of mine that I
            enjoy very much, and these are some of my shots.
          </p>
        </div>
      </nav>
    )
  }
}

export default Header
