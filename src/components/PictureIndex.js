import React from 'react'
import styles from '../style/Picture.module.scss'
import Picture from './Picture'

const PictureIndex = ({ pictures }) => {
  return (
    <section className={styles.PictureList}>
      {pictures.map(({ node }) => (
        <Picture picture={node} />
      ))}
    </section>
  )
}

export default PictureIndex
