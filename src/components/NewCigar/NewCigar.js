import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import cigarData from '../../Helpers/data/cigars';
import './NewCigar.scss';

const defaultCigar = {
  cigarName: '',
  imageUrl: '',
  year: '',
  location: '',
  experience: '',
};

class NewCigar extends React.Component {
    state = {
      newCigar: defaultCigar,
    }

    formFieldStringState = (name, e) => {
      const tempCigar = { ...this.state.newCigar };
      tempCigar[name] = e.target.value;
      this.setState({ newCigar: tempCigar });
    }

    cigarNameChange = e => this.formFieldStringState('cigarName', e);

    imageUrlChange = e => this.formFieldStringState('imageUrl', e);

    yearChange = e => this.formFieldStringState('year', e);

    locationChange = e => this.formFieldStringState('location', e);

    experienceChagne = e => this.formFieldStringState('experience', e);

    formSubmit = (e) => {
      e.preventDefault();
      const saveMe = { ...this.state.newCigar };
      saveMe.uid = firebase.auth().currentUser.uid;
      console.error('thing to save', saveMe);
      cigarData.postCigar(saveMe)
        .then(() => this.props.history.push('/home'))
        .catch(err => console.error('unable to save', err));
    }

    render() {
      const { newCigar } = this.state;
      return (
            <div className="NewCigar">
        <h1>New Cigar</h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="cigarName">Cigar Name</label>
            <input
              type="text"
              className="form-control"
              id="cigarName"
              placeholder="Name cigar"
              value={newCigar.cigarName}
              onChange={this.cigarNameChange}
            />
             </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              placeholder="Cigar Image"
              value={newCigar.imageUrl}
              onChange={this.imageUrlChange}
            />
             </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="text"
              className="form-control"
              id="year"
              placeholder="year"
              value={newCigar.year}
              onChange={this.yearChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="location"
              value={newCigar.location}
              onChange={this.locationChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Experience</label>
            <input
              type="text"
              className="form-control"
              id="experience"
              placeholder="How was it"
              value={newCigar.experience}
              onChange={this.experienceChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      );
    }
}

export default NewCigar;