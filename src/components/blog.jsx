const fetchData = async () => {
 try {
  const response = await fetch('https://dummyjson.com/products', {
   method: 'GET',
  });

  if (!response.ok) {
   throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
 } catch (error) {
  console.error('Error fetching data:', error);
 }
};
export default fetchData;


