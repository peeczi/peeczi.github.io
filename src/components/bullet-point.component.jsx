import React from 'react';
import bullet from '../assets/greytrixyz.svg';
import '../css/resume.styles.css';

function BulletPoint() {
  return (
    <>
      <img
      src={bullet}
      alt="bullet point"
      className="bullet-point"
      />
    </>
  )
}

export default BulletPoint