import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './FurryFrames.css'; // Import the CSS file for DogGallery component

const dogTypes = [
  {
    name: 'Special Needs Canines',
    description: "Discover the resilience and spirit of Kerala's disabled dogs, who have triumphed over life-changing accidents. These courageous canines, despite their physical challenges, offer unwavering love and loyalty. Each disabled dog brings a unique story of survival and determination. By adopting one of these special dogs, you provide them a second chance at a happy life. Embrace the opportunity to bring home a true testament of strength and compassion.",
    photo: require('../Assets/Images/Breads Gallery/13.jpg'),
    age: "Not Specified"
  },
  {
    name: 'Street Dogs',
    description: "where tails wag with tales of resilience and hope. These street-smart canines, once roaming the bustling streets of Kerala, now seek the warmth of a loving home. Despite their humble beginnings, these dogs overflow with affection and loyalty. Adopt a street dog and witness the transformation of a survivor into a cherished companion. Open your heart and home to a street dog, and together, rewrite their story with love and care.",
    photo: require('../Assets/Images/Breads Gallery/14.jpg'),
    age: "Not specified"
  },
  {
    name: 'Newborn Puppies',
    description: "Embark on a journey of pure innocence and boundless joy with our newborn puppies. These tiny bundles of fur, just beginning their adventure in the world, are brimming with curiosity and affection. Experience the magic of nurturing a new life as you watch them grow and explore their surroundings. Adopt a newborn puppy and become their guiding light as they take their first steps into the world. Open your heart to these precious beings and create memories that will last a lifetime.",
    photo: require('../Assets/Images/Breads Gallery/15.jpg'),
    age: "below 5 Months",
  },
  {
    name: 'Bulldog',
    description: 'The Bulldog, with its sturdy frame and gentle disposition, is a loyal and affectionate friend, always ready to offer comfort and companionship. Known for its distinctive wrinkled face and pushed-in nose, the Bulldogs charming appearance matches its warm-hearted nature. Despite its muscular build, this breed is surprisingly gentle, making it an ideal companion for families of all sizes.',
    photo: require('../Assets/Images/Breads Gallery/bulldog.webp'),
    age: "4 Years",
  },
  {
    name: 'Beagle',
    description: "The Beagle, known for its keen sense of smell and playful nature, adds an element of adventure and curiosity to any household. With its soulful eyes and droopy ears, the Beagle charms its way into the hearts of everyone it meets. Whether it's tracking scents on a hike or cuddling on the couch, this breed's boundless energy and friendly demeanor make it a beloved member of any family.",
    photo: require('../Assets/Images/Breads Gallery/beagle.webp'),
    age: "1 Years",
  },
  {
    name: 'Poodle',
    description: 'The Poodle, with its elegant appearance and high intelligence, brings grace and sophistication to every interaction. Available in various sizes, from toy to standard, the Poodle is renowned for its curly coat and regal bearing. Beyond its striking looks, this breed is incredibly intelligent and trainable, excelling in obedience and agility activities. With its playful spirit and loyal nature, the Poodle forms deep bonds with its human companions, making it a cherished family member.',
    photo: require('../Assets/Images/Breads Gallery/poodle.webp'),
    age: "1 Years",
  },
  {
    name: 'Rottweiler',
    description: "The Rottweiler, with its imposing stature and unwavering loyalty, serves as a steadfast protector and devoted companion. Known for its muscular build and confident demeanor, this breed exudes strength and courage. Despite its intimidating appearance, the Rottweiler is gentle and affectionate with its family, often displaying a playful and affectionate nature. With proper training and socialization, this breed makes a loyal and loving addition to any household.",
    photo: require('../Assets/Images/Breads Gallery/Rottweiler.webp'),
    age: "2 Years",
  },
  {
    name: 'Yorkshire Terrier',
    description: "The Yorkshire Terrier, a small but spirited breed, delights with its feisty personality and boundless energy, making it a delightful addition to any family. Known for its silky coat and perky ears, the Yorkshire Terrier captures attention wherever it goes. Despite its small size, this breed is brave and confident, often displaying a bold and adventurous spirit. With its lively demeanor and affectionate nature, the Yorkshire Terrier forms close bonds with its human companions, bringing joy and laughter to their lives.",
    photo: require('../Assets/Images/Breads Gallery/yorkshireterrier.webp'),
    age: "5 Months",
  },
  {
    name: 'Boxer',
    description: 'The Boxer, with its exuberant personality and affectionate nature, embodies the epitome of canine joy and enthusiasm. Known for its playful antics and boundless energy, the Boxer is always ready for adventure. With its muscular build and expressive face, this breed has a knack for melting hearts with its soulful eyes and wagging tail. Despite its boisterous nature, the Boxer is gentle and affectionate with its family, forming strong bonds that last a lifetime.',
    photo: require('../Assets/Images/Breads Gallery/Boxer.jpeg'),
    age: "7 Years ",
  },
  {
    name: 'Dachshund',
    description: 'The Dachshund, with its distinctive long body and courageous spirit, proves that big personalities come in small packages. Known affectionately as the "wiener dog" for its elongated shape, the Dachshund is as bold as it is charming. With its playful demeanor and tenacious attitude, this breed fearlessly tackles any challenge that comes its way. Despite its compact size, the Dachshund is fiercely loyal and protective of its family, making it a beloved companion for households of all kinds.',
    photo: require('../Assets/Images/Breads Gallery/dachshund.webp'),
    age: "1.3 Years",
  },
  {
    name: 'Siberian Husky',
    description: 'The Siberian Husky, with its striking appearance and independent nature, forms a unique bond with its human companions through shared adventures and experiences. Known for its thick double coat and piercing blue eyes, the Husky is as beautiful as it is intelligent. With its boundless energy and adventurous spirit, this breed thrives in active environments where it can explore and roam freely. Despite its independent nature, the Siberian Husky is deeply loyal to its family, forming strong bonds that last a lifetime.',
    photo: require('../Assets/Images/Breads Gallery/SiberianHusky.webp'),
    age: "2.3 Years",
  },
  {
    name: 'Great Dane',
    description: 'The Great Dane, often referred to as the "gentle giant," combines strength and grace in equal measure, offering both protection and affection to those it holds dear. Known for its towering height and noble appearance, the Great Dane commands attention wherever it goes. Despite its imposing stature, this breed is gentle and affectionate with its family, often displaying a playful and jovial nature. With its loving demeanor and calm disposition, the Great Dane makes a wonderful companion for households of all sizes.',
    photo: require('../Assets/Images/Breads Gallery/great-dane.webp'),
    age: "3 Years",
  },
  {
    name: 'Shih Tzu',
    description: 'The Shih Tzu, with its regal bearing and loving temperament, brings a touch of elegance and charm to any household. Known for its long, flowing coat and distinctive facial features, the Shih Tzu is as beautiful as it is affectionate. With its sweet and gentle nature, this breed forms close bonds with its human companions, often displaying a loyal and devoted demeanor. Despite its small size, the Shih Tzu has a big heart, bringing joy and happiness to its family with every wag of its tail.',
    photo: require('../Assets/Images/Breads Gallery/shih-tzu.webp'),
    age: "2 Years",
  },
  {
    name: 'Doberman Pinscher',
    description: 'The Doberman Pinscher, with its unmatched loyalty and intelligence, becomes not just a pet but a devoted guardian of the home. Known for its sleek, muscular build and alert expression, the Doberman exudes confidence and strength. With its keen intellect and unwavering loyalty, this breed forms strong bonds with its family, often displaying a protective and affectionate nature. Despite its imposing appearance, the Doberman is gentle and loving with its loved ones, making it a trusted companion and loyal friend.',
    photo: require('../Assets/Images/Breads Gallery/DobermanPinscher.webp'),
    age: "8 Years",
  },
  {
    name: 'Australian Shepherd',
    description: 'The Australian Shepherd, with its sharp intellect and boundless energy, thrives on mental and physical challenges, making it an ideal companion for active families. Known for its striking coat and piercing eyes, the Australian Shepherd is as beautiful as it is intelligent. With its herding instincts and agile athleticism, this breed excels in obedience and agility activities, always eager to learn and explore. Despite its high energy levels, the Australian Shepherd is loyal and affectionate with its family, forming strong bonds that endure a lifetime.',
    photo: require('../Assets/Images/Breads Gallery/AustralianShepherd.jpg'),
    age: "6 Years",
  },
  {
    name: 'Pug',
    description: "The Pug, with its wrinkled face and playful demeanor, wins hearts with its comical antics and affectionate nature. Known for its distinctive appearance and charming personality, the Pug is as lovable as it is entertaining. With its cheerful disposition and laid-back attitude, this breed brings laughter and joy to every household it joins. Despite its small size, the Pug has a big heart, forming close bonds with its human companions and becoming an integral part of the family.",
    photo: require('../Assets/Images/Breads Gallery/pug.webp'),
    age: "4 Years",
  },
  {
    name: 'Cocker Spaniel',
    description: 'The Cocker Spaniel, with its soulful eyes and gentle demeanor, forms deep and lasting bonds with its human companions. Known for its silky coat and merry disposition, the Cocker Spaniel is as beautiful as it is affectionate. With its friendly nature and eager-to-please attitude, this breed excels in companionship, always ready to offer comfort and support to its loved ones. Despite its gentle nature, the Cocker Spaniel is resilient and courageous, making it a trusted companion and loyal friend.',
    photo: require('../Assets/Images/Breads Gallery/CockerSpaniel.webp'),
    age: "1 Years",
  },
  {
    name: 'Chihuahua',
    description: 'The Chihuahua, with its bold spirit and fierce loyalty, proves that size is no measure of courage or love. Known for its tiny stature and big personality, the Chihuahua captures attention wherever it goes. With its confident demeanor and fearless attitude, this breed is as courageous as it is charming. Despite its small size, the Chihuahua has a strong bond with its family, often displaying a protective and affectionate nature. With its lively spirit and devoted loyalty, the Chihuahua brings endless joy and companionship to its human companions.',
    photo: require('../Assets/Images/Breads Gallery/chihuahua.jpg'),
    age: "4.5 Years",
  },
  {
    name: 'Maltese',
    description: 'The Maltese, with its silky white coat and gentle disposition, epitomizes grace and elegance in every movement. Known for its aristocratic appearance and affectionate nature, the Maltese is as charming as it is beautiful. With its playful personality and loving demeanor, this breed forms close bonds with its human companions, often displaying a loyal and devoted attitude. Despite its small size, the Maltese has a big heart, bringing warmth and happiness to every household it graces.',
    photo: require('../Assets/Images/Breads Gallery/maltese.webp'),
    age: "3 Months",
  },
  {
    name: 'Border Collie',
    description: 'The Border Collie, with its unmatched intelligence and unwavering loyalty, becomes not just a pet but a cherished member of the family, always ready to lend a paw and a smile. Known for its keen intellect and boundless energy, the Border Collie is as impressive as it is endearing. With its herding instincts and eager-to-please attitude, this breed excels in obedience and agility activities, always striving to learn and explore. Despite its high drive, the Border Collie is affectionate and loyal with its family, forming deep bonds that endure a lifetime.',
    photo: require('../Assets/Images/Breads Gallery/BorderCollie.webp'),
    age: "7 Years",
  },
];

const FurryFrames = () => {
  const navigate = useNavigate();

  const handleAdoptClick = (dog) => {
    navigate('/adopt-payment', { state: dog });
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []);

  return (
    <div className="dog-containerFurry">
      <h1 className="section-heading">Varieties of Canines</h1>
      <div className="dog-furry">
        {dogTypes.map((dog, index) => (
          <div key={index} className="dog-cards">
            <img src={dog.photo} alt={dog.name} className="dog-photos" />
            <h2 className="dog-names">{dog.name}</h2>
            <p className="dog-descriptions">{dog.description}</p>
            <h4>Age - {dog.age}</h4>
            <button className='dog-adoptbtn' onClick={() => handleAdoptClick(dog)}>Adopt</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurryFrames;
