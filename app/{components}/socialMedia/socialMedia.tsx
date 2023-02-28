import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

function SocialMedia() {
  return (
    <div className='app__social'>
      <a href='https://www.linkedin.com/in/connectwithnoor/' target='_blank'>
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href='https://github.com/ConnectWithNoor/' target='_blank'>
        <div>
          <BsGithub />
        </div>
      </a>
      <a href='https://twitter.com/ConnectWithNoor' target='_blank'>
        <div>
          <BsTwitter />
        </div>
      </a>
    </div>
  );
}

export default SocialMedia;
