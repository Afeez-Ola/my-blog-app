import faker from 'faker';

export function Blogs() {
 const id = generateUniqueId();
 const title = faker.lorem.words(3);
 const description = faker.lorem.paragraph();
 const thumbnail = faker.image.image();

 const numImages = Math.floor(Math.random() * 4) + 1; // Random number of images (1 to 4)
 const images = Array.from({ length: numImages }, () => faker.image.imageUrl());

 return {
  id,
  title,
  description,
  thumbnail,
  images,
 };
}


