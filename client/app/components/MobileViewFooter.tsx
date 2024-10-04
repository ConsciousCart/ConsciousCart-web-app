import { useState } from 'react';

type Tab = 'Scan' | 'Invoices' | 'Invoice analysis' | 'Analysis' | 'Profile';

interface MobileViewFooterProps {
  className?: string;
  initialActiveTab?: Tab;
  onTabChange?: (tab: Tab) => void;
}

const MobileViewFooter: React.FC<MobileViewFooterProps> = ({
  className,
  initialActiveTab = 'Scan',
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState<Tab>(initialActiveTab);
  const tabs: Tab[] = ['Scan', 'Invoices', 'Invoice analysis', 'Analysis', 'Profile'];

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className={`${className}`}>
      <ul className='flex items-center justify-between'>
        {tabs.map((tab) => (
          <li
            key={tab}
            className='font-light w-[92px] lg:w-auto text-center text-sm text-white px-4 py-3 relative cursor-pointer'
            onClick={() => handleTabClick(tab)}
          >
            {activeTab === tab && <span className="absolute top-0 left-0 right-0 h-1 bg-yellow-400"></span>}
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileViewFooter;