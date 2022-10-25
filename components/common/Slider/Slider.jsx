import { useEffect, useRef } from 'react'
import styles from './Slider.module.css'

const Slider = ({ open, index, images, setIndex, withThumbnails }) => {
  // Get the container div of the thumbnail images
  const thumbSliderRef = useRef(null)
  // move the thumbnails with mouse drag
  let isDown = false
  let startX
  let scrollLeft
  const mouseDownHandler = (e) => {
    isDown = true
    startX = e.pageX - thumbSliderRef.current.offsetLeft
    scrollLeft = thumbSliderRef.current.scrollLeft
    thumbSliderRef.current.style.cursor = 'grabbing'
    const imgList = thumbSliderRef.current.children
    for (let i = 0; i < imgList.length; i++) {
      imgList[i].style.cursor = 'grabbing'
    }
  }
  const mouseMoveHandler = (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - thumbSliderRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    thumbSliderRef.current.scrollLeft = scrollLeft - walk
  }
  const mouseUpLeaveHandler = () => {
    isDown = false
    thumbSliderRef.current.style.cursor = 'default'
    const imgList = thumbSliderRef.current.children
    for (let i = 0; i < imgList.length; i++) {
      imgList[i].style.cursor = 'pointer'
    }
  }

  // Get the thumbnail of the active image
  const thumbRef = useRef(null)
  // move the thumbnail of the active image to viewable area
  useEffect(() => {
    const leftLimit = thumbSliderRef.current.getBoundingClientRect().left + 5
    const rightLimit = thumbSliderRef.current.getBoundingClientRect().right - 5

    // if (index >= 0 && index <= images.length - 1) {
    const leftEdge = thumbRef.current.getBoundingClientRect().left
    const rightEdge = thumbRef.current.getBoundingClientRect().right
    if (leftEdge < leftLimit) {
      const moveToRight = leftLimit - leftEdge
      thumbSliderRef.current.scrollLeft -= moveToRight
    }
    if (rightEdge > rightLimit) {
      const moveToLeft = rightEdge - rightLimit
      thumbSliderRef.current.scrollLeft += moveToLeft + 2
    }
    // }
  }, [index])

  // move the slider with left/right arrow keypress
  useEffect(() => {
    const arrowKeyHandler = (e) => {
      e.key === 'ArrowRight' &&
        (index === images.length - 1 ? setIndex(0) : setIndex(index + 1))
      e.key === 'ArrowLeft' &&
        (index === 0 ? setIndex(images.length - 1) : setIndex(index - 1))
    }
    open && window.addEventListener('keydown', arrowKeyHandler)

    return () => {
      window.removeEventListener('keydown', arrowKeyHandler)
    }
  })

  // move the slider with mouse scroll
  const mouseWheelHandler = (e) => {
    e.preventDefault()
    thumbSliderRef.current.scrollLeft += e.deltaY * 2
  }

  return (
    <>
      <div className={styles.slideshow_container}>
        {images.map((url, i, arr) => {
          let positionClass = styles.nextSlide

          if (i === index) positionClass = styles.activeSlide
          if (i < index || (index === 0 && i === arr.length - 1))
            positionClass = styles.prevSlide
          if (index === arr.length - 1 && i === 0)
            positionClass = styles.nextSlide
          return (
            <div
              key={i}
              className={`${styles.slideshow_img_container} ${positionClass}`}
            >
              <img src={url} alt={`image-${i}`} />
            </div>
          )
        })}
      </div>
      {withThumbnails && (
        <div className={styles.slider_img_thumbs}>
          <div
            className={`${styles.slider_img_thumbs_container}`}
            ref={thumbSliderRef}
            onMouseDown={(e) => mouseDownHandler(e)}
            onMouseMove={(e) => mouseMoveHandler(e)}
            onMouseUp={mouseUpLeaveHandler}
            onMouseLeave={mouseUpLeaveHandler}
            onWheel={(e) => mouseWheelHandler(e)}
          >
            {images.map((url, ind) => {
              let styleClass = ''
              index === ind && (styleClass = styles.active)
              return (
                <img
                  src={url}
                  alt={`image-${ind}`}
                  key={ind}
                  className={styleClass}
                  onClick={() => setIndex(ind)}
                  style={{ left: `${5 + ind * 50 + ind * 16}px` }}
                  ref={styleClass === styles.active ? thumbRef : null}
                />
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default Slider
