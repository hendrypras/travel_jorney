import { Paper } from '@mui/material'
import React from 'react'
import styles from './jorneyCard.module.scss'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import moment from 'moment'
const JorneyCard = ({ data, bookMark, details }) => {
  const formatDate = moment(data?.created_at).format('DD MMMM YYYY')
  return (
    <Paper elevation={3} style={{ width: '300px' }} className={styles.wrapper}>
      <div className={styles.wrapper__img}>
        <img
          src={data?.image}
          alt="image-jorney"
          className={styles.img}
          onClick={details}
        />
        <button className={styles.icon__btn} onClick={bookMark}>
          <BookmarkBorderIcon className={styles.icon} />
        </button>
      </div>
      <div className={styles.wrapper__content_card}>
        <h1 className={styles.title}>{data?.title}</h1>
        <span className={styles.wrapper__timestamp}>
          {formatDate},{' '}
          <span style={{ textTransform: 'capitalize' }}>
            {data?.author.split(' ')[0]}
          </span>
        </span>
        <p className={styles.card__paragraf}>{data?.short_description}</p>
      </div>
    </Paper>
  )
}

export default JorneyCard
