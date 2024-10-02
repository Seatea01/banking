import Carousel from '@/components/Carousel'

const Home = () => {
  const images = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
  ];

  return (
    <div>
      <h1>Image Carousel</h1>
      <Carousel images={images} />
    </div>
  );
};

export default Home;
