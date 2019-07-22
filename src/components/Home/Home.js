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
        .then(cigars => this.setState({ cigars }))
        .catch(err => console.error('could not get any cigars fam', err));
    }

    componentDidMount() {
      this.getCigars();
    }

    deleteCigar = (cigarId) => {
      cigarData.deleteCigar(cigarId)
        .then(() => this.getCigars())
        .catch(err => console.error('unable to delete', err));
    }

    render() {
      const makeCigarCards = this.state.cigars.map(cigar => (
            <CigarCard
              key={cigar.id}
              cigar={cigar}
              deleteCigar={this.deleteCigar}

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
