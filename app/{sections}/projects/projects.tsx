import { SectionWrapper } from '@/app/{components}';
import { fetchProjects } from '@/app/{api}/fetchProjects';

import ProjectsUI from './projectsUI';
import { fetchTags } from '@/app/{api}/fetchTags';

import './projects.scss';

async function ProjectsSection() {
  const projectsData = await fetchProjects();
  const tagsData = await fetchTags();

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
