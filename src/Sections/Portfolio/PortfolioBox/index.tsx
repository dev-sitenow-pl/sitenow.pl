

type Props = {
  children: React.ReactNode;
}
const PortfolioBox = ({ children }: Props) => {
  return <div className="portfolio__box">
    {children}
  </div>
}

export { PortfolioBox }