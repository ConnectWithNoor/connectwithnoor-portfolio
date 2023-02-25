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

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}
