import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import styles from '../assets/styles/about.module.css'
import siby from '../assets/images/clayton.jpg'
import chess from '../assets/images/chess.jpg'

const About = () => (
  <Container className='p-0 my-3'>
    <section className=''>
      <header className=' text-center'>
        <h3 className='sectionTitle'>About Me</h3>
      </header>
      <Row className='my-2'>
        <Col xs={12} sm={12} md={5} className='my-2'>
          <Image src={`${siby}`} rounded fluid />
        </Col>
        <Col xs={12} sm={12} md={7} className={`my-2 d-flex justify-content-center align-items-center ${styles.aboutText}`}>
          <Row>
            <Col xs={12}>
              <p>
                My name is Clayton Siby, I am a 22-year-old Full-Stack Software
                Developer. With the firm determination and strong skill-set in{' '}
                <b><i>Problem Solving</i></b> and{' '}
                <b><i>translating business</i></b>
                &nbsp;requirements into software solutions, I remain thirst to
                develop software that has got an impact on humans&apos; daily
                lives.
              </p>
              <p>
                I enjoy going through challenging tasks on a daily, that is why
                I have begun exploring Machine Learning and the Artificial
                Intelligence field. I have dreams to become an expert Artificial
                Intelligence engineer shortly.
              </p>
              <p>In my spare time, I enjoy playing chess and basketball. I love the green nature and waterfalls. Funny fact! I&apos;m not a coffee drinker &#128516; </p>
            </Col>
            <Col xs={12}></Col>
          </Row>
        </Col>
      </Row>
    </section>
  </Container>
)

export default About
