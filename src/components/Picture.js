import styles from '../style/Picture.module.scss'
import React from 'react'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'

const Picture = ({ picture }) => {
  const { title, file, alt, description, tags } = picture || {}

  return (
    <div className={styles.PictureContainer}>
      <h2 className={styles.PictureTitle}>{title}</h2>
      <img className={styles.Picture} alt={alt} src={file} />
      <div className={styles.Description}>{description}</div>
      {tags && tags.length !== 0 && (
        <div className={styles.PictureTags}>
          <ul>
            {tags.map(tag => (
              <li key={`tag_${tag}`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Picture
