'use client';

import { useEffect, useState } from 'react';

import './styles.css';

import { fetchApartments } from './actions/fetchApartments';
import ApartmentCard from './components/ApartmentCard';

export default function Home() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await fetchApartments();
      setApartments(results);
    }
    fetchData();
  }, []);

  return (
    <main>
      <ApartmentCard data={apartments} />
    </main>
  );
}
