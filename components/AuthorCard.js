import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorCard() {
  return (
    <div>
      Authors Card
    </div>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    image: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
