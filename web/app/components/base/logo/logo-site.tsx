'use client'
import type { FC } from 'react'
import classNames from '@/utils/classnames'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    <>
      <div className={'flex flex-row'}>
        <img
          src={'/logo/ai.png'}
          className={classNames('block w-[22.651px] h-[24.5px] ', className)}
          alt='logo'
        />
        <span className={'pl-2'}>小云智问</span>
      </div>

    </>

  )
}

export default LogoSite
