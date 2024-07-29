import { useState } from 'react';
import { Section } from "../Section";
import { SectionTitle } from "../SectionTitle";
import portfolioData from '../../data/Portfolio.json';
import { PortfolioBox } from "./PortfolioBox";

import './Portfolio.scss';
import { TargetScroll } from '../TargetScroll';

const Portfolio: React.FC = () => {
  const [showSingleProject, setShowSingleProject] = useState(true);

  // Funkcja przełączająca tryb widoku
  const toggleView = () => {
    setShowSingleProject(!showSingleProject);
  };

  return <>
    <Section sectionClass='portfolio'>
      <TargetScroll targetId='portfolio' />
      <SectionTitle>
        <span>Realizacje</span>
      </SectionTitle>


      {portfolioData.map((portfolioCategory, index) =>
        <div className='portfolio__category' key={index}>
          <SectionTitle>{portfolioCategory.category}</SectionTitle>
          <div className="portfolio__boxes">
            {showSingleProject ? (
              portfolioCategory.projects.slice(0, 2).map((project, projectIndex) => (
                <PortfolioBox key={projectIndex}>
                  <a href={project.project_url} target="_blank" rel="noopener noreferrer"></a>
                  <span className="portfolio__box__title">
                    {project.project_title}
                  </span>
                  <span className="portfolio__box__btn-show">
                    Zobacz realizację
                  </span>
                </PortfolioBox>
              ))
            ) : (
              portfolioCategory.projects.map((project, projectIndex) => (
                <PortfolioBox key={projectIndex}>
                  <a href={project.project_url} target="_blank" rel="noopener noreferrer"></a>
                  <span className="portfolio__box__title">
                    {project.project_title}
                  </span>
                  <span className="portfolio__box__btn-show">
                    Zobacz realizację
                  </span>
                </PortfolioBox>
              ))
            )}
          </div>
        </div>
      )}
      <div className="portfolio__footer">
        <small><span>Aktualizowanie:</span> lipiec 2024r.</small>
        <button className={showSingleProject ? 'btn green' : 'btn'} onClick={toggleView}>
          {showSingleProject ? "Rozwiń realizacje" : "Zwiń realizacje"}
        </button>
      </div>
    </Section>
  </>;
}

export { Portfolio };
