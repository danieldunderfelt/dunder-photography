import React from 'react'
import commonStyles from '../style/Common.module.scss'

const Logo = () => (
  <h1 className={commonStyles.Logo}>
    <span className={commonStyles.dunder}>Dunder</span>
    <span className={commonStyles.photography}>Photography</span>
  </h1>
)

export default Logo
