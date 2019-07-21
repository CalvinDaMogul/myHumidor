import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import cigarData from '../../Helpers/data/cigars';
import CigarCard from '../CigarCard/CigarCard';

import './Home.scss';

class Home extends React.Component {
    state = {
      cigars: [],
    }

    getCigars = () => {
      const { uid } = firebase.auth().currentUser;
      cigarData.getMyCigars(uid)
        .then(scats => this.setState({ scats }))
        .catch(err => console.error('could not get any cigars', err));
    }

    componentDidMount() {
      this.getCigars();
    }

    render() {
      const makeCigarCards = this.state.cigsrs.map(cigar => (
            <CigarCard
              key={cigar.id}
              cigar={cigar}

            />
      ));
      return (
      <div className="Home col">
        <h1>Cigarficionado</h1>
        <div className="d-flex">
            {makeCigarCards}
        </div>

      </div>
      );
    }
}

export default Home;
