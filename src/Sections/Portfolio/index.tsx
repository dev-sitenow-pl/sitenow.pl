import { Section } from "../Section";
import { SectionTitle } from "../SectionTitle";
import portfolioData from '../../data/Portfolio.json'
import { PortfolioBox } from "./PortfolioBox";

import './Portfolio.scss'

const Portfolio = () => {
  return <>
    <Section sectionClass='portfolio'>
      <SectionTitle>
        Aktualne <span>portfolio</span>
        <small><span>Aktualizowanie:</span> lipiec 2024r.</small>
      </SectionTitle>
    </Section>
    {portfolioData.map((portfolioCategory, index) =>
      <Section sectionClass='portfolio' key={index}>
        <SectionTitle>{portfolioCategory.category}</SectionTitle>
        <div className="portfolio__boxes">
          {portfolioCategory.projects.map((project, projectIndex) => (
            <PortfolioBox key={projectIndex}>
              <a href={project.project_url} target="_blank" rel="noopener noreferrer"></a>
              <span className="portfolio__box__title">
                {project.project_title}
              </span>
              <span className="portfolio__box__btn-show">
                Zobacz realizację
              </span>


            </PortfolioBox>
          ))}
        </div>

      </Section>
    )}

  </>;
}

export { Portfolio };