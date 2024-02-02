import React, { useState } from 'react';

const TabsBar = ({ tabs, activeTab, setActiveTab }: any) => {
    return (
        <div className="flex">
            {tabs.map((tab: any, index: number) => (
                <div
                    key={index}
                    className={`cursor-pointer py-2 px-4 border-b-2 ${activeTab === tab.name ? 'border-blue-500' : 'border-transparent'
                        }`}
                    onClick={() => setActiveTab(tab.name)}
                >
                    {tab.label}
                </div>
            ))}
        </div>
    );
};

export default TabsBar;
