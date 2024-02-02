import TabsBar from 'Y/components/tabsbar';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const CityMap = () => {
    const router = useRouter();
    const slug = router.query.slug;
    const [activeTab, setActiveTab] = useState('crimeMap');
    // const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
    const tabs = [
        {
            label: 'Crime Map',
            name: "crimeMap",
        },
        {
            label: 'Violence Cases',
            name: "violenceCases",
        },
        {
            label: "Missing Persons",
            name: "missingPersons",
        }
    ];

  return (
    <>
        <h1 className='text-3xl text-center font-bold'>{slug}</h1>
      <div className='mx-auto w-[80%] flex justify-between items-center bg-slate-300 flex-col'>
          <TabsBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className='mx-auto'>
              {activeTab === 'crimeMap' && <div>Content for Tab 1</div>}
              {activeTab === 'violenceCases' && <div>Content for Tab 2</div>}
              {activeTab === 'missingPersons' && <div>Content for Tab 3</div>}
          </div>
      </div>
    </>
  )
}

export default CityMap;