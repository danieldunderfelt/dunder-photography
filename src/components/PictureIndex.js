import React from 'react'
import styles from '../style/Picture.module.scss'

const PictureIndex = ({ pictures }) => {
  return (
    <section className={styles.PictureList}>
      {pictures.map(({ node }) => {
        const { title, file, alt, description } = node || {}

        return (
          <div className={styles.PictureContainer}>
            <h2 className={styles.PictureTitle}>{title}</h2>
            <img className={styles.Picture} alt={alt} src={file} />
            <div className={styles.Description}>{description}</div>
          </div>
        )
      })}
    </section>
  )
}

export default PictureIndex
