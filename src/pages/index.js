import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'jersey');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner12.png'}
        title={'Gear Up for Greatness'}
        subtitle={'Explore the Mercury Sports Collection'}
        ctaText={'shop now'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          Welcome to <span className={styles.gold}>Mercury Sports Gear</span> —
          engineered for performance, designed for champions.
        </p>
        <p>
          Inspired by legends. Trusted by <span className={styles.gold}>athletes</span> worldwide.
        </p>
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Featured Gear'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'New Arrivals'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Highlight */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Performance Under Pressure'}
            description={`High-performance gear tested in extreme conditions to push your limits.`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero
          image={toOptimizedImage('/banner2.png')}
          title={`🔥 Summer Sports Sale \n Up to 50% Off!`}
        />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>MEN</Link>
          <Link to={'/shop'}>WOMEN</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'About Mercury Sports Gear'}
        quote={`"Our mission is to empower every athlete to perform their best — from the gym to the grand stage."`}
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'From the Locker Room'} subtitle={'Insights, Training Tips, and Gear Reviews'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Sustainability Promo */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/banner1.png')}
          title={'Built for Performance. Made for the Planet.'}
          subtitle={
            'Sustainably sourced materials. Long-lasting designs. Because strength begins with responsibility.'
          }
          ctaText={'learn more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'#TrainWithMercury'}
          subtitle={'Tag @mercurysports to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={toOptimizedImage(`/social/socialMedia1.png`)} alt={'social media 1'} />
          <img src={toOptimizedImage(`/social/socialMedia2.png`)} alt={'social media 2'} />
          <img src={toOptimizedImage(`/social/socialMedia3.png`)} alt={'social media 3'} />
          <img src={toOptimizedImage(`/social/socialMedia4.png`)} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
