import { SectionWrapper } from '@/app/{components}';

import ProjectsUI from './projectsUI';

import './projects.scss';

async function fetchData() {
  const response = await fetch(`${process.env.API_ROOT}/api/projects`, {
    method: 'GET',
  });

  const { tagsData, projectsData } = (await response.json()) as {
    tagsData: TagsType[];
    projectsData: ProjectType[];
  };

  return {
    tagsData,
    projectsData,
  };
}

async function ProjectsSection() {
  const { tagsData, projectsData } = await fetchData();

  return (
    <SectionWrapper idName='projects' className='app__primarybg'>
      <div>
        {/* heading */}
        <h2 className='head-text'>
          My Creative
          <span> Portfolio </span>
          Section
        </h2>

        <ProjectsUI projectsData={projectsData} tagsData={tagsData} />
      </div>
    </SectionWrapper>
  );
}

export default ProjectsSection;
