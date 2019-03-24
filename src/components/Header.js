import React, { useCallback, useState } from 'react'
import styles from '../style/Header.module.scss'
import Logo from './Logo'
import { useSpring, animated, config } from 'react-spring'

const transformNav = left => `translate(${left}%)`

const Header = () => {
  const [navVisible, toggleNav] = useState(false)

  const onLogoClick = useCallback(() => {
    toggleNav(!navVisible)
  }, [navVisible])

  const navStyle = useSpring({
    config: { mass: 0.2, tension: 200, friction: 15 },
    opacity: navVisible ? 1 : 0,
    left: navVisible ? 0 : -100,
  })

  return (
    <nav className={styles.Header}>
      <div className={styles.HeaderContent}>
        <button onClick={onLogoClick} className={styles.LogoLink}>
          <Logo />
        </button>
      </div>
      <animated.nav
        style={{
          opacity: navStyle.opacity,
          transform: navStyle.left.interpolate(transformNav),
        }}
        className={styles.HeaderNav}
      />
    </nav>
  )
}
export default Header
