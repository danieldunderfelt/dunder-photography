import React, { useCallback, useState } from 'react'
import styles from '../style/Header.module.scss'
import Logo from './Logo'
import { useSpring, animated } from 'react-spring'
import Nav from './Nav'

const transformNav = left => `translate(${left}%)`

const Header = () => {
  const [navVisible, toggleNav] = useState(false)

  const onToggleNav = useCallback(() => {
    toggleNav(!navVisible)
  }, [navVisible])

  const navStyle = useSpring({
    config: { mass: 0.2, tension: 200, friction: 15 },
    left: navVisible ? 0 : -100,
  })

  return (
    <nav className={styles.Header}>
      <div className={styles.HeaderContent}>
        <button onClick={onToggleNav} className={styles.LogoLink}>
          <Logo />
        </button>
      </div>
      <animated.nav
        style={{
          opacity: navStyle.opacity,
          transform: navStyle.left.interpolate(transformNav),
        }}
        className={styles.HeaderNav}>
        <Nav close={onToggleNav} />
      </animated.nav>
    </nav>
  )
}
export default Header
