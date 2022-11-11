import { useEffect, useState } from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import { useWindowWidth } from '../shared/hooks'

function Experience() {
  const [zoom, setZoom] = useState(0.6)

  const width = useWindowWidth()

  useEffect(() => {
    switch (width) {
      case 'xl':
        setZoom(0.6)
        break
      case 'lg':
        setZoom(0.6)
        break
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

      <div className="flex justify-center flex-wrap">
        <div
          className={`flex items-center justify-center ${
            width === 'sm' ? 'max-h-[400px]' : 'max-h-[550px]'
          }`}>
          <DeviceFrameset device="MacBook Pro" zoom={zoom}>
            <img
              style={{ height: '100%', width: '100%' }}
              src="/fisherman-landing.png"
              alt="fisherman"
            />
          </DeviceFrameset>
        </div>
        <div
          className={`flex items-center justify-center ${
            width === 'sm' ? 'max-h-[400px]' : 'max-h-[550px]'
          }`}>
          <DeviceFrameset device="MacBook Pro" zoom={zoom}>
            <img
              style={{ height: '100%', width: '100%' }}
              src="/leadvolt-landing.png"
              alt="leadvolt"
            />
          </DeviceFrameset>
        </div>
        <div
          className={`flex items-center justify-center ${
            width === 'sm' ? 'max-h-[400px]' : 'max-h-[550px]'
          }`}>
          <DeviceFrameset device="MacBook Pro" zoom={zoom}>
            <img
              style={{ height: '90%', width: '100%' }}
              src="/resident-landing.png"
              alt="resident"
            />
          </DeviceFrameset>
        </div>
      </div>

      <div className="flex justify-center flex-wrap">
        <div
          className={`flex items-center justify-center ${
            width === 'sm' ? 'max-h-[400px]' : 'max-h-[550px]'
          }`}>
          <DeviceFrameset
            device="Samsung Galaxy S5"
            height={655}
            width={370}
            zoom={zoom}>
            <img
              src="/flash_rewards.webp"
              width="100%"
              height="100%"
              alt="cuplr"
            />
          </DeviceFrameset>
        </div>

        <div
          className={`flex items-center justify-center ${
            width === 'sm' ? 'max-h-[400px]' : 'max-h-[550px]'
          }`}>
          <DeviceFrameset
            device="Galaxy Note 8"
            height={630}
            width={390}
            zoom={zoom}>
            <img
              src="/retro_points.png"
              width="100%"
              height="100%"
              alt="cuplr"
            />
          </DeviceFrameset>
        </div>
        <div
          className={`flex items-center justify-center ${
            width === 'sm' ? 'max-h-[400px]' : 'max-h-[550px]'
          }`}>
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
      </div>
    </div>
  )
}

export default Experience
