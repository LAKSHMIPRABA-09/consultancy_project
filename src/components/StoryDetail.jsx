/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// StoryDetail.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StoryDetail.css'; // Importing the CSS for this component
import product1Image from '../assets/images/product1.png'; // Import product images
import product2Image from '../assets/images/product2.png'; // Import product images
import product3Image from '../assets/images/product3.png';
import product4Image from '../assets/images/product4.png';
import process1Image from '../assets/images/process1.png'; // Import process images
import process2Image from '../assets/images/process2.png'; // Import process images
import process3Image from '../assets/images/process3.png'; // Import process images
import process4Image from '../assets/images/process4.png'; // Import process images
import process5Image from '../assets/images/process5.png'; // Import process images
import process6Image from '../assets/images/process6.png'; // Import process images

const StoryDetail = () => {
  // Sample story data (replace this with your actual story data)
  const story = {
    title: 'Tie Dye Technique',
    content: 'Due To The Nature Of This Craft, Its Easier To Develop A Distinguished Array Of Designs Applying The Tie Dye Directions At The Yarn, Fabric Or Even Apparel Stage Creating Unique Designs Merging Many Colours And Hues.  At Anuprerna, We Are Developing Tie Dye Fabrics Using Organic Certified Azo Free Dyes, On A Range Of Fabrics Made Of Natural Materials Like Cotton, Linen And Silk.',
    //imageUrl: '/assets/images/tie-dye.jpg', // Update the image URL
    author: '2 minutes read',
    //date: 'April 11, 2024'
  };

  return (
    <div className="story-detail">
      <div className="story-header">
        <h1>{story.title}</h1>
        <p> {story.author} on {story.date}</p>
      </div>
      <div className="story-content">
        <p>{story.content}</p>
      </div><br />
      <section className="making-video">
        <div className="container">
          <div className="content">
            <p>Tie-Dye is a term used for a number of ancient resist-dyeing techniques. The tie dye directions or technique typically consists of stitching, folding, twisting, pleating, or crumpling fabric or a garment and binding with string or rubber bands, or even clamps which is followed by dyeing. The areas which have been tied or constricted, resist the penetration of the dye and remains white or the base fabric colour. Factors like the thickness of yarn or how tightly they are tied affect the extent to which the dye penetrates or is resisted  Some popular examples of tie-dye fabrics are Shibori and Bandhani. Another form of tie-dye exists where the yarns for weaving are tie-dyed first and then the yarns are woven into a fabric. This is known as Ikat. Also, the technique can be used with different kinds of dye including azo-free or even natural dyes for fabrics.</p>
          </div>
          <div className="image">
          <img src={product1Image} alt="Product 1" />
          </div>
        </div>
      </section><br />
      <section className="history">
        <div className="container">
          <div className="image">
          <img src={product2Image} alt="Product 2" />
          </div>
          <div className="content">
            <h2>History</h2>
            <p>The existence of this art form dates back as early as 4000 B.C. Evidence of tie-dye known as “Bandhani” exists from the Indus Valley Civilisation, which continues to be crafted in India to this day. Besides that, there are artefacts of this resist dyeing technique, known as Shibori which dates back to the 8th century. Though introduced earlier, the craft became popular during the late 1960s in the form of a psychedelic pattern.</p>
          </div>
        </div>
      </section><br />
      <section className='t1'>
        <section className='t2'>
        <div className='container'>
            <h1>THE PROCESS - HOW TO TIE DYE?</h1>
        </div>
        </section>
      </section><br />
      <section className="making-video1">
        <div className="container">
          <div className="image">
            <img src={process1Image} alt="Process 1" />
          </div>
          <div className="content">
            <h2>Step 1: Prepare the fabric</h2>
            <p>Before tie-dyeing, it's essential to prepare the fabric. Start by washing the fabric to remove any dirt, chemicals, or finishes that could interfere with the dye's absorption. Once clean, dampen the fabric with water. This helps the dye spread more evenly and prevents dry spots.</p>
          </div>
        </div>
      </section><br />
      <section className="history1">
        <div className="container">
          <div className="image">
            <img src={process2Image} alt="Process 2" />
          </div>
          <div className="content">
            <h2>Step 2: Prepare the dye</h2>
            <p>Prepare the dye according to the manufacturer's instructions. This may involve mixing powdered dye with water or diluting liquid dye. Wear gloves and protective clothing to prevent staining.</p>
          </div>
        </div>
      </section><br />
      <section className="making-video1">
        <div className="container">
          <div className="image">
            <img src={process3Image} alt="Process 3" />
          </div>
          <div className="content">
            <h2>Step 3: Apply the dye to the fabric</h2>
            <p>Apply the dye to the fabric using your preferred tie-dyeing technique. You can use squeeze bottles, brushes, or even dip-dyeing methods. Be creative with your designs and colors!</p>
          </div>
        </div>
      </section><br />
      <section className="history1">
        <div className="container">
          <div className="image">
            <img src={process4Image} alt="Process 4" />
          </div>
          <div className="content">
            <h2>Step 4: Let the dye set</h2>
            <p>After applying the dye, let the fabric sit for the recommended time to allow the colors to set. This typically ranges from a few hours to overnight, depending on the dye and fabric type.</p>
          </div>
        </div>
      </section><br />
      <section className="making-video1">
        <div className="container">
          <div className="image">
            <img src={process5Image} alt="Process 5" />
          </div>
          <div className="content">
            <h2>Step 5: Rinse the fabric</h2>
            <p>Rinse the fabric under cold water until the water runs clear. This removes any excess dye and helps set the colors. Avoid using hot water, as it can cause bleeding and fading.</p>
          </div>
        </div>
      </section><br />
      <section className="history1">
        <div className="container">
          <div className="image">
            <img src={process6Image} alt="Process 6" />
          </div>
          <div className="content">
            <h2>Step 6: Wash and dry the fabric</h2>
            <p>Finally, wash the tie-dyed fabric separately in cold water with a mild detergent. Once washed, dry the fabric as recommended. Some dyes may require heat-setting to ensure long-lasting color.</p>
          </div>
        </div>
      </section><br />
      <section className="great-about-tie-dye">
        <div className="container">
          <div className="content">
            <h2>What is Great About Tie-Dye?</h2>
            
            <p>In our earlier Shibori collection, nylon threads were woven into the fabric that was then pulled and tied before dyeing. In contrast, our new tie dye collection is made by tying the fabric with separate thread after it has already been woven and then dyeing it. The great thing about Tie-Dye is that it's cost-effective. The equipment needed for tie-dye is easily available and inexpensive. It does not require the use of machinery. Besides, the patterns for tie dye are always unique. No two fabrics can ever be identical. And it can be done in a wide range of colours. However, depending on the pattern, it can be labour-intensive. More sophisticated tie-dyed may involve additional steps, including an initial application of dye before the resist, multiple sequential dyeing and resist steps, and the use of other types of resists (stitching, stencils) and discharge.</p>
            <Link to="/dyeing-types">
              <button className="explore-button">Explore Tie Dye Fabric</button>
            </Link>
          </div>
          <div className="image">
            <img src={product3Image} alt="Tie-Dye Art" />
          </div>
        </div>
      </section><br />
      <section className="reemergence-tie-dye">
  <div className="container">
    <div className="content">
      <h2 className="heading">THE RE-EMERGENCE OF TIE DYE</h2>
      <p>The major appeal of tie-dye has always been its individuality. Being a manual process and the nature of this craft, no two pieces are ever the same.
With the growing awareness of sustainability, eco-fashion and natural dyes in the fashion industry, there has been a re-emergence of Tie dye. More and more brands have embraced the uniqueness and uncertain outcome of the craft. Tie-dye has come a long way from the psychedelic tees of 60's and 70's today's caftans, maxi dresses, sweatsuits and denim. But it continues to be a symbol of individuality and creative expression.</p>
    </div>
    <div className="image">
      <img src={product4Image} alt="Tie-Dye Re-Emergence" />
    </div>
  </div>
</section><br />

    </div>
  );
};

export default StoryDetail;
