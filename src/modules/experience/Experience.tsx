import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import { useOnScreen } from '../shared/hooks'

const variantsRight = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '400px' },
}

const variantsLeft = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-400px' },
}

function Experience() {
  const [isOpenFisherman, setIsOpenFisherman] = useState(false)
  const refFisherman = useRef<HTMLDivElement>(null)
  const isIntersectingFisherman = useOnScreen(refFisherman)

  useEffect((): void => {
    setIsOpenFisherman(isIntersectingFisherman)
  }, [isIntersectingFisherman])

  const [isOpenLeadVolt, setIsOpenLeadVolt] = useState(false)
  const refLeadVolt = useRef<HTMLDivElement>(null)
  const isIntersectingLeadVolt = useOnScreen(refLeadVolt)

  useEffect((): void => {
    setIsOpenLeadVolt(isIntersectingLeadVolt)
  }, [isIntersectingLeadVolt])

  const [isOpenResident, setIsOpenResident] = useState(false)
  const refResident = useRef<HTMLDivElement>(null)
  const isIntersectingResident = useOnScreen(refResident)

  useEffect((): void => {
    setIsOpenResident(isIntersectingResident)
  }, [isIntersectingResident])

  const [isOpenCuplr, setIsOpenCuplr] = useState(false)
  const refCuplr = useRef<HTMLDivElement>(null)
  const isIntersectingCuplr = useOnScreen(refCuplr)

  useEffect((): void => {
    setIsOpenCuplr(isIntersectingCuplr)
  }, [isIntersectingCuplr])

  return (
    <div
      id="experience"
      className="flex flex-col items-evenly mt-40 max-h-fit pt-16">
      <span className="text-lighter font-medium text-5xl font-body mb-10 flex justify-center">
        Experience
      </span>
      <motion.div
        className="flex items-center justify-center"
        ref={refFisherman}
        variants={variantsRight}
        animate={isOpenFisherman ? 'open' : 'closed'}
        initial={{ opacity: 0 }}
        transition={{ type: 'just', delay: 0.6 }}>
        <DeviceFrameset device="MacBook Pro" zoom={0.6}>
          <img src="/fisherman-landing.png" alt="fisherman" />
        </DeviceFrameset>
      </motion.div>
      <motion.div
        className="flex items-center justify-center"
        ref={refLeadVolt}
        variants={variantsLeft}
        animate={isOpenLeadVolt ? 'open' : 'closed'}
        initial={{ opacity: 0 }}
        transition={{ type: 'just', delay: 0.6 }}>
        <DeviceFrameset device="MacBook Pro" zoom={0.6}>
          <img
            style={{ height: '100%', width: '100%' }}
            src="/leadvolt-landing.png"
            alt="leadvolt"
          />
        </DeviceFrameset>
      </motion.div>
      <motion.div
        className="flex items-center justify-center"
        ref={refResident}
        variants={variantsRight}
        animate={isOpenResident ? 'open' : 'closed'}
        initial={{ opacity: 0 }}
        transition={{ type: 'just', delay: 0.6 }}>
        <DeviceFrameset device="MacBook Pro" zoom={0.6}>
          <img
            style={{ height: '90%', width: '100%' }}
            src="/resident-landing.png"
            alt="resident"
          />
        </DeviceFrameset>
      </motion.div>
      <motion.div
        className="flex items-center justify-center h-[700px]"
        ref={refCuplr}
        variants={variantsLeft}
        animate={isOpenCuplr ? 'open' : 'closed'}
        initial={{ opacity: 0 }}
        transition={{ type: 'just', delay: 0.6 }}>
        <DeviceFrameset device="iPhone X" height={750} width={370} zoom={0.5}>
          <img
            src="/cuplrwallet-landing.png"
            width="100%"
            height="100%"
            alt="cuplr"
          />
        </DeviceFrameset>
      </motion.div>
    </div>
  )
}

export default Experience
