import PropTypes from 'prop-types';

const cigarCardShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  cigarName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
});

export default { cigarCardShape };
