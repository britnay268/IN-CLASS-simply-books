import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import { viewAuthorDetails } from '../../api/mergedData';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});

  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
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

          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={bookObj.image} alt={bookObj.title} style={{ height: '400px' }} />
            <Card.Body>
              <Card.Title>{bookObj.title}</Card.Title>
              <p className="card-text bold">{bookObj.sale && <span>SALE<br /></span> } ${bookObj.price}</p>
              {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
              <Link href={`/book/${bookObj.firebaseKey}`} passHref>
                <Button variant="primary" className="m-2">VIEW</Button>
              </Link>
              {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
              <Link href={`/book/edit/${bookObj.firebaseKey}`} passHref>
                <Button variant="info">EDIT</Button>
              </Link>
              <Button variant="danger" className="m-2">
                DELETE
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
