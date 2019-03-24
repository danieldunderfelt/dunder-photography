import styles from '../style/Picture.module.scss'
import React from 'react'
import { Link } from 'gatsby'
import PictureTags from './PictureTags'

const Picture = ({ picture, overlay, linkTo, showInfo = true }) => {
  const { title, file, alt, description, tags } = picture || {}
  const LinkComponent = linkTo ? Link : 'span'

  return (
    <div className={styles.PictureContainer}>
      <LinkComponent to={linkTo}>
        <img className={styles.Picture} alt={alt} src={file} />
        {showInfo && !overlay && (
          <div className={styles.PictureInfo}>
            <h2 className={styles.PictureTitle}>{title}</h2>
            <div className={styles.Description}>{description}</div>
          </div>
        )}
        {overlay && (
          <div className={styles.VisibleOverlay}>
            <h2 className={styles.OverlayTitle}>{overlay}</h2>
          </div>
        )}
      </LinkComponent>
      {showInfo && !overlay && <PictureTags tags={tags} />}
    </div>
  )
}

export default Picture
