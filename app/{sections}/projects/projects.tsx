'use client';

import { useState, useEffect } from 'react';

import { SectionWrapper } from '@/app/{components}';
import { fetchProjects } from '@/app/{api}/fetchProjects';

import { WorkList } from '@/app/{utils}/constants';
import './projects.scss';
import ProjectsUI from './projectsUI';

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projectsData, setProjectsData] = useState<ProjectType[]>([]);
  const [filteredProject, setFilteredProject] = useState<ProjectType[]>([]);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);

    setFilteredProject(
      projectsData.filter((project) =>
        project.tags.some((tag) => tag.name === item)
      )
    );
  };

  useEffect(() => {
    const fetch = async () => {
      const projectsData = await fetchProjects();
      setProjectsData(projectsData);
      setFilteredProject(projectsData);
    };

    fetch();
  }, []);

  return (
    <SectionWrapper idName='projects' className='app__primarybg'>
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

        <ProjectsUI filteredProject={filteredProject} />
      </div>
    </SectionWrapper>
  );
}

export default ProjectsSection;
