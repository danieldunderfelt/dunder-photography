import React from 'react'
import { Link } from 'gatsby'
import styles from '../style/Header.module.scss'
import Logo from './Logo'

const Header = class extends React.Component {
  render() {
    return (
      <nav className={styles.Header}>
        <div className={styles.HeaderContent}>
          <Link to="/" title="Logo" className={styles.LogoLink}>
            <Logo />
          </Link>
        </div>
      </nav>
    )
  }
}

export default Header
