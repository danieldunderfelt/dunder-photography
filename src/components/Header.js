import React from 'react'
import { Link } from 'gatsby'
import styles from '../style/Header.module.scss'
import Logo from './Logo'

const Header = class extends React.Component {
  render() {
    return (
      <nav className={styles.Header}>
        <div className={styles.HeaderContent}>
          <Link to="/" title="Logo" className={styles.Logo}>
            <Logo />
          </Link>
          <div className={styles.HeaderText}>
            <p>
              Hi, I'm <strong>Daniel Dunderfelt</strong>! Photography is a hobby of mine that I
              enjoy very much, and these are some of my shots.
            </p>
            <p>
              I currently use a Canon EOS R, and some older photos are taken with the Canon EOS 80D.
            </p>
            <p>
              I also do programming, so if you were looking for that, head over to my blog at <a href="https://danieldunderfelt.com">danieldunderfelt.com</a>!
            </p>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
