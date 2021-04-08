import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import siby from '../assets/images/hero.jpg'

const About = () => {
  return (
    <Container className='p-0 my-3'>
      <section className=''>
        <header className=' text-center'>
          <h3 className='sectionTitle'>About Me</h3>
        </header>
        <Row className='my-2'>
          <Col xs={12} sm={12} md={5} className="my-2">
            <Image src={`${siby}`} rounded fluid />
          </Col>
          <Col xs={12} sm={12} md={7} className="my-2">
            <p>
              My name is Clayton Siby, I am a 22-year-old Full-Stack Software
              Developer. With the firm determination and strong skill-set that I
              have in <strong>Problem Solving</strong> and{' '}
              <strong>translating business</strong>&nbsp;requirements into
              software solutions, I remain thirst to develop software that has
              got an impact on humans' daily lives.
            </p>
            <p>
              I enjoy going through challenging tasks on a daily, that is why I
              have begun exploring Machine Learning and the Artificial
              Intelligence field. I have dreams to become an expert Artificial
              Intelligence engineer shortly.
            </p>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default About
