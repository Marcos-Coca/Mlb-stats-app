import React from 'react'
import { FaGithub, FaReact } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { SiGmail } from 'react-icons/si'

import { Container, Social } from './styles'

export default function Footer() {
  return (
    <Container>
      <Social>
        <a target="blank" href="https://github.com/Marcos-Coca/Mlb-stats-app">
          <FaGithub />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/marcos-mercado-21421718a/"
        >
          <GrLinkedin />
        </a>
        <a target="blank" href="mailto:marcoscoca0905@gmail.com">
          <SiGmail />
        </a>
      </Social>
      <div>
        Hecho con amor en React 💙 <FaReact />
      </div>
    </Container>
  )
}
