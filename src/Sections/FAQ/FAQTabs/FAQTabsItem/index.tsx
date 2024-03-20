type Props = {
  FAQTabsData: {
    IDTab: string,
    question: string,
    answer: string,
  }
  isOpen: boolean;
  handleTabClick: (tabId: string) => void;
}

const FAQTabsItem = ({ FAQTabsData, isOpen, handleTabClick }: Props) => {
  const { IDTab, question, answer } = FAQTabsData;

  const handleClick = () => {
    handleTabClick(IDTab);
  };

  return <div key={IDTab} className='faq__box-guest'>
    <div
      className={`faq__box-btn ${isOpen ? 'open-answer' : ''}`}
      data-tab-text={IDTab}
      onClick={handleClick}
    >
      <div className="box-flex">

        <div className="faq__box-text ">
          {question}
        </div>
        <div className="faq__box-icon">
          <span className="material-symbols-outlined">
            help_center
          </span>
        </div>
      </div>

    </div>
    <div className={`faq__box-answer ${isOpen ? 'open-answer' : ''}`} id={IDTab}>
      <div className="box-flex">
        <div className="faq__box-icon">
          <span className="material-symbols-outlined">
            support_agent
          </span>
        </div>
        <div className="faq__box-text" dangerouslySetInnerHTML={{ __html: answer }} />
      </div>
    </div>
  </div>
}

export { FAQTabsItem };