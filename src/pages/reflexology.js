import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'
import Therapist from '../components/Therapist'
import SEO from '../components/Seo'

import reflexology from '../images/reflexology.jpg'
import maria from '../images/therapists/maria2018.jpeg'

const ReflexologyWrapper = styled.div`
  background: #ddeaf6;
  display: flex;
  flex-direction: column;
  margin: 0;
`

const ImageHolder = styled.div`
  margin: 0 auto;
  width: 100%;
  @media (min-width: 600px) {
    max-width: 60%;
    margin-top: 7vh;
  }
  > img {
    display: block;
    max-height: 50vh;
    object-fit: cover;
    width: 100%;
    @media (min-width: 900px) {
      min-height: 270px;
    }
  }
`

const BlurbHolder = styled.div`
  font-size: 1.2rem;
  margin: 0 10%;
  padding: 5% 0;
  @media (min-width: 600px) {
    margin: 0 auto;
    max-width: 60%;
    padding: 2% 0;
  }
  @media (min-width: 900px) {
    margin: 0 auto;
    max-width: 60%;
    padding: 0;
  }
`

const BlurbHeader = styled.div`
  font-size: 1.4rem;
  font-weight: 900;
  margin-bottom: 5px;
`

const HeroHolder = styled.div`
  @media (min-width: 600px) {
    order: 2;
  }
`

const StickyHolder = styled.div`
  background: #86aecf;
  color: #fff;
  order: 0;
  position: sticky;
  top: 0;
  z-index: 1;
  @media (min-width: 600px) {
    order: 1;
  }
`

const ConditionsContainer = styled.div`
  background: #86aecf;
  color: #fff;
  padding: 5% 10%;
  max-width: 100vw;
  @media (min-width: 600px) {
    order: 3;
  }
  h2 {
    font-size: 1.4rem;
    font-weight: 900;
    margin: 0 0 10px 0;
  }
  p {
    font-size: 1.2rem;
    margin: 5px 0;
  }
  ul {
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    li {
      margin-top: 2px;
    }
    @media (min-width: 600px) {
      column-count: 2;
    }
    @media (min-width: 1200px) {
      column-count: 3;
    }
  }
`

const ReflexologyPage = () => (
  <Layout>
    <SEO title="reflexology" keywords={[`reflexology Chatham`, `reflexology Rochester`, `reflexology Medway`, `reflexology Kent`, `foot massage`, `foot massage Kent`, `foot massage Chatham`, `reflexology massage near me`, `reflexology stress`, `reflexology benefits`]}/>
    <ReflexologyWrapper>
      <TherapyHeader therapy="Reflexology" />
      <HeroHolder>
        <ImageHolder>
          <img src={reflexology} alt="reflexology hands on foot" />
        </ImageHolder>
        <Therapist firstname="Maria" surname="Mahon" pic={maria} />
        <BlurbHolder>
          <p>
            {' '}
            Reflexology is one of the fastest growing complementary therapies in
            the UK and a core treatment at The Mason Clinic. Reflexology can
            help relieve pain, tension and improve circulation. It is said to
            promote the natural function, improving the general feeling of
            well-being. Often used to complement traditional medicine; some
            cancer sufferers turn to reflexology to counter the side-effects of
            their treatment.
          </p>
          <p>
            {' '}
            Reflexology has its roots in the East. Evidence suggests forms of
            reflexology were practised in ancient Egypt, India and China.
            Although nobody is certain, reflexology is thought to work in a
            similar way to acupuncture, helping the body to re-balance its
            energy flow or Qi. Pressure is applied to specific points of the
            feet and hands which are ‘mapped’ to specific parts of the body,
            restoring function to those parts.
          </p>
          <p>
            Our reflexologists don’t claim to be able to cure all, however a
            number of disorders have been successfully treated using this
            therapy. These include back pain, sinus problems, migraine, tension
            and stress-related issues, fertility problems, baby inducement,
            hormonal imbalances, breathing, digestive and circulatory problems.
            The majority of our patients find their treatment beneficial and
            relaxing.
          </p>
          <BlurbHeader>WHAT TO EXPECT DURING YOUR APPOINTMENT</BlurbHeader>
          <p>
            On your first visit, your reflexologist will undertake a detailed
            review of your medical history. You will then be asked to remove
            your shoes and socks and be seated in a reclining position. Your
            reflexologist will examine your feet before starting a firm and
            precise massaging motion with either thumb or fingers. You are
            likely to feel local areas of tenderness. These correspond with
            parts of the body that are out of balance. The degree of tenderness
            will be an indicator of how out of balance the corresponding part of
            the body actually is. Sensitivity varies from person to person, but
            the whole process should not be too uncomfortable.
          </p>
        </BlurbHolder>
      </HeroHolder>
      <StickyHolder>
        <Links />
      </StickyHolder>
      <ConditionsContainer>
        <h2>REFLEXOLOGY CAN HELP WITH:</h2>
        <ul>
          <li>&bull; Stress</li>
          <li>&bull; Muscle pain</li>
          <li>&bull; Back pain</li>
          <li>&bull; Headaches</li>
          <li>&bull; Insomnia</li>
          <li>&bull; Anxiety</li>
          <li>&bull; Post-operative pain</li>
          <li>&bull; Fibromyalgia</li>
          <li>&bull; Arthritis</li>
          <li>&bull; Sports injuries</li>
          <li>&bull; Hormone imbalances</li>
          <li>&bull; Digestive disorders</li>
          <li>&bull; Premenstrual Syndrome</li>
          <li>&bull; Chemotherapy-induced nausea</li>
        </ul>
        <p>
          Reflexology can help a wide range of conditions. If you don’t see your
          problem listed here, please ask.
        </p>
      </ConditionsContainer>
    </ReflexologyWrapper>
  </Layout>
)

export default ReflexologyPage
