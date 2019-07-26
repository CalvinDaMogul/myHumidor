import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import cigarShape from '../../Helpers/propz/cigarShape';
import './CigarCard.scss';

class CigarCard extends React.Component {
    static propTypes = {
      cigars: cigarShape.cigarCardShape,
      deleteCigar: PropTypes.func.isRequired,
    }

    deleteMe = (e) => {
      e.preventDefault();
      const { cigar, deleteCigar } = this.props;
      deleteCigar(cigar.id);
    }

    render() {
      const { cigar } = this.props;
      const editLink = `/edit/${cigar.id}`;

      return (
            <div className="CigarCard col-3">
            <div className="card-body">
              <h5 className="card-title">{cigar.cigarName}</h5>
            <img className="card-img-top" src={cigar.imageUrl} alt="Card cap" />
              <p className="card-text">{cigar.year}</p>
              <p className="card-text">{cigar.location}</p>
              <p className="card-text">{cigar.experience}</p>
              <Link className="btn btn-secondary" to={editLink}>Edit</Link>
              <button className="btn btn-secondary" onClick={this.deleteMe}>Delete</button>
            </div>
          </div>
      );
    }
}

export default CigarCard;
