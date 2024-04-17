import { useState } from 'react'

import { FAQTabsItem } from './FAQTabsItem'

import FAQItems from '../../../data/FAQ.json'

const FAQTabs = () => {
  const [openTab, setOpenTab] = useState('ID1');

  const handleTabClick = (tabId: string) => {
    setOpenTab(tabId);
  };

  return <div className="faq__main-box">
    <div className="flex-row">
      <div className="colflex-12">

        {FAQItems.map((TabItem) => (
          <FAQTabsItem
            key={TabItem.IDTab}
            FAQTabsData={TabItem}
            isOpen={openTab === TabItem.IDTab}
            handleTabClick={handleTabClick}
          />
        ))
        }
      </div>
    </div>
  </div>
}

export { FAQTabs };