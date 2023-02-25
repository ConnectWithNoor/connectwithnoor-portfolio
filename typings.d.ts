type TypeAboutMe = {
  _id: string;
  description: string;
  title: string;
  imageUrl: Image;
};

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}
