import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';

const AboutPage = (props) => {
  const historyRef = useRef();
  const valuesRef = useRef();
  const sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`Mercury Sports Gear\nDriven by Performance`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            Our Journey
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Our Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        {/* History Section */}
        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Founded with a mission to empower athletes of every level, Mercury Sports Gear blends innovation and comfort to elevate your performance on and off the field.
            </p>
            <br />
            <p>
              From grassroots sports to elite training, we’ve always believed in designing gear that adapts to your motion, breathes with your body, and performs under pressure. What started as a small passion project has grown into a global sportswear label trusted by professionals and fitness lovers alike.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'mercury gear founders'} src={toOptimizedImage('/about1.png')} />
        </div>

        {/* Values Section */}
        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
                At Mercury, we're built on resilience, precision, and a relentless pursuit of performance. Every seam, fabric, and finish is chosen with intent—to push boundaries, not follow them.
              </p>
              <ol>
                <li>Engineered for athletes, by athletes</li>
                <li>Designed with sustainability and function in mind</li>
                <li>Tested in real-world conditions, not labs</li>
              </ol>
              <img alt={'team values image'} src={toOptimizedImage('/about2.png')} />
            </div>

            {/* Sustainability Section */}
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Our planet is the only playing field we all share. That's why sustainability isn’t an afterthought—it’s built into every thread. From recycled polyester to organic cotton, we are committed to reducing our impact without compromising performance.
              </p>
              <p>
                We partner with ethical manufacturers, minimize packaging waste, and continue to innovate in material sourcing. Whether you're sprinting on turf or hiking a summit, Mercury gear lets you move forward—responsibly.
              </p>
              <p>
                Join us in shaping a future where sport and sustainability coexist. Because greatness is measured not just in speed or strength, but in the legacy we leave behind.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'sustainable sportswear'} src={toOptimizedImage('/about3.png')} />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
