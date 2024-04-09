import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

export default function AuthorCard({ authorObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{authorObj.first_name} {authorObj.last_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{authorObj.email}</Card.Subtitle>
        <hr />
        <Link href={`/author/${authorObj.firebaseKey}`} passHref>
          <Button variant="success">View</Button>
        </Link>
        <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
          <Button variant="info">Edit</Button>
        </Link>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
