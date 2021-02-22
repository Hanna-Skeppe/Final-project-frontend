import styled from 'styled-components/macro'

export const SubHeaderImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 55%;
`
export const UserHeaderImage = styled(SubHeaderImage)`
  object-position: center 26%;
  @media(max-width: 1024px) {
    object-position: center 0%;
  }
`