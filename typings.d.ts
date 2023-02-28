type AboutMeType = {
  _id: string;
  description: string;
  title: string;
  imageUrl: Image;
};

type ProjectType = {
  _id: string;
  description: string;
  title: string;
  imageUrl: Image;
  projectLink: string;
  codeLink: string;
  tags: { name: string; _id: string }[];
};

type SkillType = {
  _id: string;
  icon: Image;
  name: string;
  bgColor: string;
};

type ExperienceType = {
  _id: string;
  year: string;
  works: { _id: string; position: string; company: string; desc: string }[];
};

type TestimonialType = {
  _id: string;
  name: string;
  imageUrl: Image;
  company: string;
  feedback: string;
};

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}
