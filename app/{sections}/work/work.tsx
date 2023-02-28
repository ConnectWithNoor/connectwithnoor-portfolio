'use client';

import { useState, useEffect } from 'react';

import { SectionWrapper } from '@/app/{components}';
import WorkUI from './workUI';
import { fetchWork } from '@/app/{api}/fetchWork';

import { WorkList } from '@/app/{utils}/constants';
import './work.scss';

function WorkSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [workData, setWorkData] = useState<WorkType[]>([]);
  const [filterWork, setFilterWork] = useState<WorkType[]>([]);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);

    setFilterWork(workData.filter((work) => work.tags.includes(item)));
  };

  useEffect(() => {
    const fetch = async () => {
      const workData = await fetchWork();
      setWorkData(workData);
      setFilterWork(workData);
    };

    fetch();
  }, []);

  return (
    <SectionWrapper idName='work' className='app__primarybg'>
      <div>
        {/* heading */}
        <h2 className='head-text'>
          My Creative
          <span> Portfolio </span>
          Section
        </h2>

        {/* filters */}
        <div className='app__work-filter'>
          {WorkList.map((item, index) => {
            return (
              <div
                className={`app__work-filter-item app__flex p-text ${
                  activeFilter === item ? 'item-active' : ''
                }`}
                key={item + index}
                onClick={() => handleWorkFilter(item)}
              >
                {item}
              </div>
            );
          })}
        </div>

        <WorkUI filterWork={filterWork} />
      </div>
    </SectionWrapper>
  );
}

export default WorkSection;
