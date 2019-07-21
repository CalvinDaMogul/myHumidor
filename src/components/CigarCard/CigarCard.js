import React from 'react';
import PropTypes from 'prop-types';
import { LINK } from 'react-router-dom';
import cigarShape from '../../Helpers/propz/cigarShape';

class CigarCard extends React.Component {
    static propTypes = {
      cigars: cigarShape.cigarCardShape,
    }

    render() {
      const { cigars } = this.props;

      return (
            <div className="card" style="width: 18rem;">
            <img className="card-img-top" src={cigars.imageUrl} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{cigars.cigarName}</h5>
              <p className="card-text">{cigars.year}</p>
              <p className="card-text">{cigars.location}</p>
              <p className="card-text">{cigars.experience}</p>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
      );
    }
}

export default CigarCard;
