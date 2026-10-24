import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Keyboard } from 'swiper/modules'
import { Play, Award } from 'lucide-react'
import Icon from './Icon.jsx'
import { ACHIEVEMENTS } from '../data/achievements.js'
import 'swiper/css'
import 'swiper/css/pagination'

// Auto-playing, swipeable achievements carousel styled like video cards.
export default function AchievementsCarousel() {
  return (
    <Swiper
      className="ach-swiper"
      modules={[Autoplay, Pagination, Keyboard]}
      spaceBetween={24}
      // NOTE: `loop` is deliberately OFF. With 6 cards loop mode stalls
      // (pagination advances but cards don't move). `rewind` gives the same
      // seamless infinite feel by returning to the first card — and it works.
      // Also keep slidesPerView as whole numbers; fractional values break both.
      slidesPerView={1}
      centeredSlides={false}
      rewind
      keyboard={{ enabled: true }}
      autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      breakpoints={{
        560: { slidesPerView: 2, spaceBetween: 24 },
        900: { slidesPerView: 3, spaceBetween: 26 },
      }}
      a11y={{ enabled: true }}
    >
      {ACHIEVEMENTS.map((a) => (
        <SwiperSlide key={a.id}>
          <article className="ach-card" data-accent={a.accent}>
            <div className="ach-card__media">
              <div className="ach-card__bg" aria-hidden="true" />
              <span className="ach-card__tag">{a.tag}</span>
              <span className="ach-card__play" aria-hidden="true">
                {a.image ? <Play size={26} fill="currentColor" /> : <Icon name={a.icon} size={30} />}
              </span>
              <span className="sr-only">Achievement card</span>
            </div>
            <div className="ach-card__body">
              <h3>{a.title}</h3>
              <span className="ach-card__creator">{a.creator}</span>
              <p className="ach-card__reward">
                <Award aria-hidden="true" /> {a.reward}
              </p>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
