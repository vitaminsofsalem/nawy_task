'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { fetchApartmentDetails } from '@/app/actions/fetchApartmentDetails';

const ApartmentDetails: any = () => {
  const [apartment, setApartmentDetails] = useState({} as any);

  const pathname = usePathname();
  const id = pathname.split('/')[2];

  useEffect(() => {
    async function fetchData() {
      const results = await fetchApartmentDetails(id);
      setApartmentDetails(results);
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        minWidth: '100%',
        minHeight: '100%',
        paddingTop: '40px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: '100%',
          paddingTop: '40px',
        }}
      >
        <img width="100%" height="100%" src={apartment.mainImg} style={{ objectFit: 'cover' }}></img>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          minHeight: '50%',
        }}
      >
        <p>
          <span style={{ fontWeight: 'bold' }}>Title:</span> {apartment.title}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Location:</span> {apartment.location}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Date:</span> {apartment.publishDate}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Price:</span> ${apartment.price}USD
        </p>
        <p>
          <span style={{ fontWeight: 'bold', textOverflow: 'clip' }}>Description:</span> {apartment.description}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Bedrooms:</span> {apartment.bedrooms}
        </p>

        <p>
          <span style={{ fontWeight: 'bold' }}>Bathrooms:</span> {apartment.bathrooms}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Area:</span> {apartment.area}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Furnished:</span> {apartment.furnished ? 'True' : 'False'}
        </p>
      </div>
      {/* <Card
        hoverable
        style={{ width: 350, minWidth: 350, minHeight: 350, textWrap: 'wrap' }}
        cover={<img style={{ objectFit: 'cover' }} width={400} height={200} alt="example" src={apartment.mainImg} />}
      >
        <Meta title={apartment.title} description={apartment.description} />
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <p>{apartment.area} Sq.ft</p>
            <p>{apartment.bathrooms} Baths</p>
            <p>{apartment.bedrooms} Beds</p>
          </div>
          <p style={{ fontWeight: 'bold', fontSize: '18px' }}>${apartment.price} USD</p>
        </div>
      </Card> */}
    </div>
  );
};

export default ApartmentDetails;
