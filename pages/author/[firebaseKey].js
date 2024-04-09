/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});

  const router = useRouter();
  const { firebaseKey } = router.query;

  const getAuthorDetails = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  };

  useEffect(() => {
    getAuthorDetails();
  }, [firebaseKey]);

  return (
    <>
      <div className="text-white ms-5 details">
        <h5>{authorDetails.first_name} {authorDetails.last_name}</h5>
        <h6>Author Email: {authorDetails.email}</h6>
        <Link href={`/author/edit/${authorDetails.firebaseKey}`} passHref>
          <Button variant="info">Edit</Button>
        </Link>
        <Button variant="danger" className="m-2">Delete</Button>
      </div>
      <div>
        {authorDetails.books?.map((bookObj) => (
          <BookCard key={bookObj.firebaseKey} bookObj={bookObj} onUpdate={getAuthorDetails} />
        ))}
      </div>
    </>
  );
}
