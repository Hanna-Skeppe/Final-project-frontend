import React from 'react'
import styled from 'styled-components/macro'

export const Loadingspinner = () => {
  return (
    <LoadingWrapper className="la-ball-spin-clockwise la-3x">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </LoadingWrapper>
  )
}

const LoadingWrapper = styled.div`
  color: #ce796b;
  align-self: center;
  margin: auto;
  margin-top: 30px;
`