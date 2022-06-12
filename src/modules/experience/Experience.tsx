import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import { useWindowWidth } from '../shared/hooks'
import { useGetIntersectingZone } from './experience-hooks'

const variantsRight = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '400px' },
}

const variantsLeft = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-400px' },
}

function Experience() {
  const [refFisherman, isOpenFisherman] = useGetIntersectingZone()
  const [refLeadVolt, isOpenLeadVolt] = useGetIntersectingZone()
  const [refResident, isOpenResident] = useGetIntersectingZone()
  const [refCuplr, isOpenCuplr] = useGetIntersectingZone()

  const [zoom, setZoom] = useState(0.6)

  const width = useWindowWidth()

  useEffect(() => {
    switch (width) {
      case 'md':
        setZoom(0.5)
        break
      case 'sm':
        setZoom(0.3)
        break
      default:
        setZoom(0.6)
    }
  }, [width])

  return (
    <div
      id="experience"
      className="flex flex-col items-evenly mt-40 max-h-fit pt-16">
      <span className="text-lighter font-medium text-5xl font-body mb-10 flex justify-center">
        Experience
      </span>

      {['md', 'sm', 'lg'].includes(width) ? (
        <div className="grid items-center justify-center h-[400px]">
          <DeviceFrameset device="MacBook Pro" zoom={zoom}>
            <img
              style={{ height: '100%', width: '100%' }}
              src="/fisherman-landing.png"
              alt="fisherman"
            />
          </DeviceFrameset>
        </div>
      ) : (
        <motion.div
          className="grid items-center justify-center"
          ref={refFisherman}
          variants={variantsRight}
          animate={isOpenFisherman ? 'open' : 'closed'}
          initial={{ opacity: 0 }}
          transition={{ type: 'just', delay: 0.6 }}>
          <DeviceFrameset device="MacBook Pro" zoom={zoom}>
            <img
              style={{ height: '100%', width: '100%' }}
              src="/fisherman-landing.png"
              alt="fisherman"
            />
          </DeviceFrameset>
        </motion.div>
      )}
      {['md', 'sm', 'lg'].includes(width) ? (
        <div className="grid items-center justify-center h-[400px]">
          <DeviceFrameset device="MacBook Pro" zoom={zoom}>
            <img
              style={{ height: '100%', width: '100%' }}
              src="/leadvolt-landing.png"
              alt="leadvolt"
            />
          </DeviceFrameset>
        </div>
      ) : (
        <motion.div
          className="grid items-center justify-center"
          ref={refLeadVolt}
          variants={variantsLeft}
          animate={isOpenLeadVolt ? 'open' : 'closed'}
          initial={{ opacity: 0 }}
          transition={{ type: 'just', delay: 0.6 }}>
          <DeviceFrameset device="MacBook Pro" zoom={zoom}>
            <img
              style={{ height: '100%', width: '100%' }}
              src="/leadvolt-landing.png"
              alt="leadvolt"
            />
          </DeviceFrameset>
        </motion.div>
      )}
      {['md', 'sm', 'lg'].includes(width) ? (
        <div className="grid items-center justify-center h-[400px]">
          <DeviceFrameset device="MacBook Pro" zoom={zoom}>
            <img
              style={{ height: '90%', width: '100%' }}
              src="/resident-landing.png"
              alt="resident"
            />
          </DeviceFrameset>
        </div>
      ) : (
        <motion.div
          className="grid items-center justify-center"
          ref={refResident}
          variants={variantsRight}
          animate={isOpenResident ? 'open' : 'closed'}
          initial={{ opacity: 0 }}
          transition={{ type: 'just', delay: 0.6 }}>
          <DeviceFrameset device="MacBook Pro" zoom={zoom}>
            <img
              style={{ height: '90%', width: '100%' }}
              src="/resident-landing.png"
              alt="resident"
            />
          </DeviceFrameset>
        </motion.div>
      )}
      {['md', 'sm', 'lg'].includes(width) ? (
        <div className="grid items-center justify-center h-[600px]">
          <DeviceFrameset
            device="iPhone X"
            height={750}
            width={370}
            zoom={zoom}>
            <img
              src="/cuplrwallet-landing.png"
              width="100%"
              height="100%"
              alt="cuplr"
            />
          </DeviceFrameset>
        </div>
      ) : (
        <motion.div
          className="grid items-center justify-center h-[700px]"
          ref={refCuplr}
          variants={variantsLeft}
          animate={isOpenCuplr ? 'open' : 'closed'}
          initial={{ opacity: 0 }}
          transition={{ type: 'just', delay: 0.6 }}>
          <DeviceFrameset
            device="iPhone X"
            height={750}
            width={370}
            zoom={zoom}>
            <img
              src="/cuplrwallet-landing.png"
              width="100%"
              height="100%"
              alt="cuplr"
            />
          </DeviceFrameset>
        </motion.div>
      )}
    </div>
  )
}

export default Experience
