import faker from 'faker';

export function Blogs() {
 function generateUniqueId() {
  const timestamp = new Date().getTime();
  const random = Math.random().toString(36).substring(2);

  const uniqueId = timestamp + random;

  return uniqueId;
 }
 const id = generateUniqueId();
 const title = faker.lorem.words(3);
 const description = faker.lorem.paragraph();
 const thumbnail = faker.image.image();

 const numImages = Math.floor(Math.random() * 4) + 1; //
 const images = Array.from({ length: numImages }, () =>
  faker.image.urlLoremFlickr({ category: 'nature', width: 800, height: 600 }),
 );

 return {
  id,
  title,
  description,
  thumbnail,
  images,
 };
}
