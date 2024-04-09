/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import AuthorCard from '../components/AuthorCard';
import { useAuth } from '../utils/context/authContext';
import { getAuthors } from '../api/authorData';

export default function Authors() {
  const [authors, setAuthors] = useState([]);

  const { user } = useAuth();

  const getAllAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllAuthors();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/author/new" passHref>
        <Button>Add An Author</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObj={author} />
        ))}
      </div>

    </div>
  );
}
