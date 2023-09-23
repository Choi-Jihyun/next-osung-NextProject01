'use client';

import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '/public/ProjectsSectionAnimation.json'
import lottieTeacher from '/public/teacher.json'

export default function LottieAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieTeacher}
      play
    />
  )
}