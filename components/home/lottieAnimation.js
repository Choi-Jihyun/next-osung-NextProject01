'use client';

import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '/public/ProjectsSectionAnimation.json'

export default function LottieAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}