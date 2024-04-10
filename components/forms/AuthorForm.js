import React from 'react';
import { PropTypes } from 'prop-types';

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
};

export default function AuthorForm({ obj }) {
  return (
    <div>
      Author Form here
      {console.warn(obj)}
    </div>
  );
}

AuthorForm.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

AuthorForm.defaultProps = {
  obj: initialState,
};
