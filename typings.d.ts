type AboutMeType = {
  _id: string;
  description: string;
  title: string;
  imageUrl: Image;
};

type WorkType = {
  _id: string;
  description: string;
  title: string;
  imageUrl: Image;
  projectLink: string;
  codeLink: string;
  tags: string[];
};

type SkillType = {
  _id: string;
  icon: Image;
  name: string;
  bgColor: string;
};

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}
