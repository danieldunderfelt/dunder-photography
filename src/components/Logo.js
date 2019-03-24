import React from 'react'
import commonStyles from '../style/Common.module.scss'
import logo from '../img/logo_inverted.png'

const Logo = () => (
  <>
    <img src={logo} className={commonStyles.LogoImage} />
    <h1 className={commonStyles.Logo}>
      <span className={commonStyles.dunder}>Dunder</span>
      <span className={commonStyles.photography}>Photography</span>
    </h1>
  </>
)

export default Logo
