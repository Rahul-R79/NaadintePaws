import React from 'react';
import Spotlight from '../Components/Spotlight/Spotlight';
import DogGallery from '../Components/DogGallery/DogGallery';
import Testimonial from '../Components/Testimonials/Testimonial';
import MissionVision from '../Components/MissionVission/MissionVision';
import Donation from '../Components/Donation/Donation';
import Volunteer from '../Components/Volunteer/Volunteer';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Spotlight />
      <DogGallery />
      <MissionVision />
      <Testimonial />
      <Volunteer />
      <Donation />
      <Footer />
    </div>
  );
};

export default Home;
