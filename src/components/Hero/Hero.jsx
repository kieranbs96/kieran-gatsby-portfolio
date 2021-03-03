import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import {primaryColor, secondaryColor} from '../../constants/index'

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title}{' '}
            <span className="text-color-main">{name}</span>
            <br />
            {subtitle}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={700}>
                {cta}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>

      <Link to="about" smooth duration={400}>
        <div class="scroll-down svg" id="home-scroll-down">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.2 37.9"><path class="stroke" d="M12.6 36.6h0C6.3 36.6 1.3 31.5 1.3 25.3V12.6C1.3 6.3 6.3 1.3 12.6 1.3h0c6.2 0 11.3 5.1 11.3 11.3v12.7C23.9 31.5 18.8 36.6 12.6 36.6z" style={{fill: 'none', strokeWidth: '3',stroke: primaryColor}}/><path class="scroller" d="M13.1 19.2h-0.9c-1.1 0-2-0.9-2-2v-5.4c0-1.1 0.9-2 2-2h0.9c1.1 0 2 0.9 2 2v5.4C15.1 18.3 14.2 19.2 13.1 19.2z" fill={primaryColor}/></svg>
          <i class="icon icon-arrow-down"></i>
        </div>
      </Link>

      </section>
  );
};

export default Header;
