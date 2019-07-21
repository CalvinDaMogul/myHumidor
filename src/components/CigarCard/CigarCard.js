import React from 'react';

import cigarShape from '../../Helpers/propz/cigarShape';

class CigarCard extends React.Component {
    static propTypes = {
      cigars: cigarShape.cigarCardShape,
    }

    render() {
      const { cigar } = this.props;

      return (
            <div className="ScatCard col-4">
            <img className="card-img-top" src={cigar.imageUrl} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">{cigar.cigarName}</h5>
              <p className="card-text">{cigar.year}</p>
              <p className="card-text">{cigar.location}</p>
              <p className="card-text">{cigar.experience}</p>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
      );
    }
}

export default CigarCard;
