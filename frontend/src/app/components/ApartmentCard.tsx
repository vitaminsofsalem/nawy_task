import { Card, Flex } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useRouter } from 'next/navigation';
import React from 'react';

const ApartmentCard: any = (apartments: any) => {
  const router = useRouter();

  function handleClick(apartment: any) {
    router.push(`/apartment/${apartment._id}`);
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Flex
        wrap="wrap"
        gap="large"
        style={{
          maxWidth: '1200px',
          width: '100%',
          justifyContent: 'center',
          padding: '40px 0',
        }}
      >
        {apartments.data &&
          apartments.data.map((apartment: any) => (
            <Card
              onClick={() => handleClick(apartment)}
              hoverable
              style={{ width: 350, minWidth: 350, minHeight: 350, textWrap: 'wrap' }}
              cover={
                <img style={{ objectFit: 'cover' }} width={400} height={200} alt="example" src={apartment.mainImg} />
              }
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
            </Card>
          ))}
      </Flex>
    </div>
  );
};

export default ApartmentCard;
