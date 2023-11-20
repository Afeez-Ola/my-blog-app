import faker from 'faker';
import React, { useState, useEffect } from 'react';

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
 const images = Array.from({ length: numImages }, () => faker.image.imageUrl());

 return {
  id,
  title,
  description,
  thumbnail,
  images,
 };
}

export function getBlogs() {
 const [blogs, setBlog] = useState([]);
 //  const blogs = Blogs();

 useEffect(() => {
  try {
   const randomBlogPost = Blogs();
   setBlog((prevObject) => [...prevObject, randomBlogPost]);
  } catch (error) {
   console.log('There was an error', error);
  }
 }, []);

 return blogs;
}
