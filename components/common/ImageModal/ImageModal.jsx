import { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Link from '@mui/material/Link'
import { AlertTriangle, X } from 'react-feather'
import {
  Star,
  InfoCircle,
  CloseWrong,
  CheckRight,
  MinusNeutral,
  ArrowLeft,
} from '@icons/index'
import Slider from '@components/common/Slider/Slider'
import styles from './ImageModal.module.css'

// Mock data
import { images } from '@components/mockData/imageModalSliderData'
const imageUrls = images.map((image) => image.url)
console.log('🚀 ~ file: ImageModal.jsx ~ line 23 ~ imageUrls', imageUrls)

const ImageModal = ({ open, handleClose, index, setIndex }) => {
  const [fav, setFav] = useState(null)

  const handleIncIndex = () => {
    if (index === images.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }
  const handleDecIndex = () => {
    if (index === 0) {
      setIndex(images.length - 1)
      return
    }
    setIndex(index - 1)
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backdropFilter: 'blur(1.5px)' }}
      >
        <div className={styles.modal_wrapper}>
          <Button
            variant="contained"
            size="small"
            className={styles.prev_btn}
            onClick={handleDecIndex}
          >
            <ArrowLeft size={18} color="#fff" strokeWidth="2" />
          </Button>

          <div className={styles.modal_container}>
            <div className={styles.modal_header}>
              <div className={styles.modal_header_title}>
                <Typography variant="h3" component="h1" color="text.primary">
                  Image Preview
                </Typography>
                <div className={styles.modal_header_action}>
                  <Link
                    underline="none"
                    href="#"
                    className={styles.action_report}
                  >
                    <AlertTriangle color="#6992FC" size={16} />
                    <Typography
                      variant="subtitle2"
                      color="primary"
                      className={styles.report_text}
                    >
                      Report A Problem
                    </Typography>
                  </Link>
                  <Box className={styles.fav_flag} onClick={() => setFav(!fav)}>
                    <Star
                      stroke={fav ? '#6992FC' : '#6A6E83'}
                      size="20"
                      strokeWidth="2"
                      fill={fav ? '#6992FC' : 'none'}
                    />
                  </Box>
                </div>
              </div>
              <Box
                className={styles.close_btn}
                component="button"
                onClick={handleClose}
              >
                <X color="#44495B" size={16} />
              </Box>
            </div>

            <div className={styles.slider_viewport}>
              <Slider
                open={open}
                index={index}
                images={imageUrls}
                setIndex={setIndex}
                withThumbnails
              />
            </div>

            <div className={styles.img_meta}>
              <div style={{ gridColumn: '1 / span 2' }}>
                <Typography
                  variant="subtitle2"
                  color="text.disabled"
                  className={styles.meta_title}
                >
                  Accession Number
                </Typography>
                <Typography variant="subtitle1" color="text.primary">
                  {images[index].acc}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="subtitle2"
                  color="text.disabled"
                  className={styles.meta_title}
                >
                  View
                </Typography>
                <Typography variant="subtitle1" color="text.primary">
                  {images[index].view}
                </Typography>
              </div>
              <div className={styles.img_tech}>
                <Typography
                  variant="subtitle2"
                  color="text.disabled"
                  className={styles.meta_title}
                >
                  Technologist
                </Typography>
                <Typography variant="subtitle1" color="text.primary">
                  {images[index].tech}
                </Typography>
              </div>
              <div className={styles.meta_issues}>
                <div className={styles.meta_issues_title}>
                  <Typography variant="subtitle2" color="text.disabled">
                    Positioning issues
                  </Typography>
                  <InfoCircle stroke="#A8B1CE" size={16} strokeWidth="2" />
                </div>
                <div className={styles.meta_issues_list_parent}>
                  <div className={styles.meta_issues_list}>
                    {images[index].issues.map((issue, i, arr) => {
                      let gridAreaStyle = ''
                      if (arr.length < 6) {
                        gridAreaStyle = `${i + 1} / 1 / ${i + 2} / 2`
                      } else {
                        if (i >= arr.length / 2) {
                          const rowStart = i + 1 - Math.ceil(arr.length / 2)
                          gridAreaStyle = `${rowStart} / 2 / ${
                            rowStart + 1
                          } / 3`
                        } else {
                          gridAreaStyle = `${i + 1} / 1 / ${i + 2} / 2`
                        }
                      }
                      return (
                        <div
                          key={issue.id}
                          className={styles.meta_issues_list_item}
                          style={{
                            gridArea: gridAreaStyle,
                          }}
                        >
                          {issue.status ? (
                            <>
                              <CheckRight />
                              <Typography variant="body2" color="text.disabled">
                                {issue.title}
                              </Typography>
                            </>
                          ) : issue.status === undefined ? (
                            <>
                              <MinusNeutral />
                              <Typography variant="body2" color="text.disabled">
                                {issue.title}
                              </Typography>
                            </>
                          ) : (
                            <>
                              <CloseWrong />
                              <Typography variant="subtitle2">
                                {issue.title}
                              </Typography>
                            </>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.slider_counter}>
              <Typography variant="subtitle2" color="text.primary">
                {index + 1} of {images.length}
              </Typography>
            </div>
          </div>

          <Button
            variant="contained"
            size="small"
            className={styles.next_btn}
            onClick={handleIncIndex}
          >
            <ArrowLeft size={18} color="#fff" strokeWidth="2" />
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default ImageModal
