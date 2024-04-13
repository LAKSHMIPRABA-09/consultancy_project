/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Product.js
// Product.js
import React from 'react';
import '../styles/Product.css'; 
import { Link } from 'react-router-dom';
// Import product styles
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import p6 from "../assets/images/p6.jpg";
import p7 from "../assets/images/p7.jpg";
import p8 from "../assets/images/p8.jpg";
import p9 from "../assets/images/p9.jpg";
import p10 from "../assets/images/p10.jpg";
import p11 from "../assets/images/p11.jpg";
import p12 from "../assets/images/p12.jpg";
import p13 from "../assets/images/p13.jpg";
import p14 from "../assets/images/p14.jpg";
import p15 from "../assets/images/p15.jpg";
import p16 from "../assets/images/p16.jpg";
import p17 from "../assets/images/p17.jpg";
import p18 from "../assets/images/p18.jpg";
import p19 from "../assets/images/p19.jpg";
import p20 from "../assets/images/p20.jpg";
import p21 from "../assets/images/p21.jpg";
import p22 from "../assets/images/p22.jpg";

const products = [
  {
    id: 1,
    name: "RESIST DYED",
    description: "STRIPE YELLOW GREEN YARN TIE DYE PURE COTTON 65 GSM HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/NECCH9SOZLMPW8484J28E9E82UN203617.jpg',
    price: 'INR 495 / METER',
    hoverImage: p1
  },
  {
    id: 2,
    name: "RESIST DYED",
    description: "STRIPE WHITE PINK YARN TIE DYE PURE COTTON 105 GSM HANDWOVEN FABRIC",
    image: "https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/QR1PG44VPA171GB3GNVHU5EQHLW204396.jpg",
    price: 'INR 447 / METER',
    hoverImage: p2
  },
  // Add more products here as needed
  {
    id: 3,
    name: "RESIST DYED",
    description: "STRIPE WHITE BLUE YARN TIE DYE PURE COTTON 103 GSM HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/NECCH9SOZLMPW8484J28E9E82UN203617.jpg',
    price: 'INR 446 / METER',
    hoverImage: p3
  },
  
  {
    id: 4,
    name: "RESIST DYED",
    description: "OMBRÉ TIE DYE YELLOW GREEN KHADI COTTON 115 GSM HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/NECCH9SOZLMPW8484J28E9E82UN203617.jpg',
    price: 'INR 451 / METER',
    hoverImage: p4
  },
  {
    id: 5,
    name: "RESIST DYED",
    description: "OMBRÉ TIE DYE BLUE GREEN KHADI COTTON 115 GSM HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/6CGGWCWM1BN560VQFBC925HNOGYW05677.jpg',
    price: 'INR 451 / METER',
    hoverImage: p5
  },
  {
    id: 6,
    name: "RESIST DYED",
    description: "OMBRÉ TIE DYE RED GREEN KHADI COTTON 115 GSM HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/4OXJSC2C5T8PBOY8TP4HD8J1C04702239.jpg',
    price: 'INR 451 / METER',
    hoverImage: p6
  },
  {
    id: 7,
    name: "RESIST DYED",
    description: "CHECK BLUE YARN TIE DYE PURE KHADI 236 GSM HANDSPUN & HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/5UWUDZACOWX05YQFHEMLQ91KIXV700618.jpg',
    price: 'INR 518 / METER',
    hoverImage: p7
  },
  {
    id: 8,
    name: "RESIST DYED",
    description: "CHECK RED YARN TIE DYE PURE COTTON 56 GSM HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/GJNW9EZ3000LZONJXR7146MHIR8X02327.jpg',
    price: 'INR 405 / METER',
    hoverImage: p8
  },
  {
    id: 9,
    name: "RESIST DYED",
    description: "CHECK BLUE & WHITE YARN TIE DYE PURE KHADI 98 GSM HANDSPUN & HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/NX2DN7OQRC4U5AAWMKPKREA407KZ04799.jpg',
    price: 'INR 512 / METER',
    hoverImage: p9
  },
  {
    id: 10,
    name: "RESIST DYED",
    description: "STRIPE WHITE & GREY YARN TIE DYE PURE COTTON 95 GSM HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/PKPNVQQ3YS5A6T219NDTUVU0J9OP01369.jpg',
    price: 'INR 511 / METER',
    hoverImage: p10
  },
  {
    id: 11,
    name: "RESIST DYED",
    description: "LIGHT BROWN YARN TIE DYE 153 GSM COTTON FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/5CI8HL72TH3XT68Y4ZCBNH65T21S07369.jpg',
    price: 'INR 556 / METER',
    hoverImage: p11
  },
  {
    id: 12,
    name: "RESIST DYED",
    description: "CHECK NAVY & WHITE YARN TIE DYE 96 GSM COTTON FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/WSMKZ4FTMUG1A6JL8W6KOQE7K4XY08925.jpg',
    price: 'INR 443 / METER',
    hoverImage: p12
  },
  {
    id: 13,
    name: "RESIST DYED",
    description: "CHECK TEAL BLUE YARN TIE DYE PURE COTTON 100 GSM HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/NZQOELNBXAKZJ1J04YVRYHZQTACF03629.jpg',
    price: 'INR 445 / METER',
    hoverImage: p13
  },
  {
    id: 14,
    name: "RESIST DYED",
    description: "CHECK BLACK YARN TIE DYE 108 GSM COTTON FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/8VOXLIY3NBEJEFBW2A301AFZ9M4H05705.jpg',
    price: 'INR 448 / METER',
    hoverImage: p14
  },
  {
    id: 15,
    name: "RESIST DYED",
    description: "ABSTRACT BLUE TIE DYE RIB PURE COTTON 93 GSM HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/4UH0W4QJDAQVV3EWWVRES3VTS7W207835.jpg',
    price: 'INR 442 / METER',
    hoverImage: p15
  },
  {
    id: 16,
    name: "RESIST DYED",
    description: "TEAL BLUE YARN TIE DYE PURE COTTON 96 GSM HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/V0K9F6F7S8HQRECSJT69NIRH0SKL03462.jpg',
    price: 'INR 455 / METER',
    hoverImage: p16
  },
  {
    id: 17,
    name: "RESIST DYED",
    description: "ORANGE YARN TIE-DYE 90 GSM PURE COTTON FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/W6MINP2SNJT8BN72N77CLIW0KX2801416.jpg',
    price: 'INR 486 / METER',
    hoverImage: p16
  },
  {
    id: 18,
    name: "RESIST DYED",
    description: "CHECK PINK YARN TIE DYE 66 GSM PURE COTTON FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/AOPNZ5DFTJDY0XDASXMBFEG5A2US06352.jpg',
    price: 'INR 450 / METER',
    hoverImage: p17
  },
  {
    id: 19,
    name: "RESIST DYED",
    description: "CHECK GREEN YARN TIE DYE 64 GSM PURE COTTON FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/5CCP1DRRDE1GDS42025DWUR9L2B505165.jpg',
    price: 'INR 450 / METER',
    hoverImage: p18
  },
  {
    id: 20,
    name: "RESIST DYED",
    description: "CHECK WHITE YARN TIE DYE 78 GSM COTTON FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/M6ABQDT66NC4AS344HJB9QDWGWHN00235.jpg',
    price: 'INR 349 / METER',
    hoverImage: p19
  },
  {
    id: 21,
    name: "RESIST DYED",
    description: "ABSTRACT PALE YELLOW & WHITE TIE DYE KHADI COTTON 110 GSM HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/HI5EIU3SM2C5CX0VF2BE31ZYU0SD08140.jpg',
    price: 'INR 408 / METER',
    hoverImage: p20
  },
  {
    id: 22,
    name: "RESIST DYED",
    description: "ABSTRACT BLUE TIE DYE KHADI COTTON 110 GSM HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/FO8GO3NDGZZJYAZCKU68H8887V4K05288.jpg',
    price: 'INR 408 / METER',
    hoverImage: p21
  },
  {
    id: 23,
    name: "RESIST DYED",
    description: "CHECK GREY BLUE YARN TIE DYE PURE COTTON 60 GSM HANDWOVEN FABRIC",
    image: 'https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/VMC155JEJWP0LVDSHYBK1D39ABU802371.jpg',
    price: 'INR 563 / METER',
    hoverImage: p22
  },
];

const Product = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <img className="hover-image" src={product.hoverImage} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            
            <button className="btn btn-primary">
              <Link to={`/products/${product.id}`} className="product-link">
                Explore here...
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}



export default Product;
