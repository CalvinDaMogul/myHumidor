import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import cigarData from '../../Helpers/data/cigars';
import './NewCigar.scss';

const defaultCigar = {
  cigarName: '',
  rating: '',
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
      // Checking for text
      const tempCigar = { ...this.state.newCigar };
      tempCigar[name] = e.target.value;
      this.setState({ newCigar: tempCigar });
    }

    cigarNameChange = e => this.formFieldStringState('cigarName', e);

    imageUrlChange = e => this.formFieldStringState('imageUrl', e);

    ratingChange = e => this.formFieldStringState('rating', e);

    yearChange = e => this.formFieldStringState('year', e);

    locationChange = e => this.formFieldStringState('location', e);

    experienceChange = e => this.formFieldStringState('experience', e);

    formSubmit = (e) => {
      e.preventDefault();
      const saveMe = { ...this.state.newCigar };
      saveMe.uid = firebase.auth().currentUser.uid;
      cigarData.postCigar(saveMe)
        .then(() => this.props.history.push('/home'))
        .catch(err => console.error('unable to save', err));
    }

    render() {
      const { newCigar } = this.state;
      return (
            <div className="NewCigar">
        <h1 className="form-group">New Cigar</h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="cigarName">Cigar Name</label>
            <input
              type="text"
              className="form-control"
              id="cigarName"
              placeholder="Name of cigar"
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
              placeholder="Image of a cigar"
              value={newCigar.imageUrl}
              onChange={this.imageUrlChange}
              />
              </div>
             <div className="form-group">
            <label htmlFor="rating">Rating of Cigar </label>
             <select value={newCigar.rating} onChange={this.ratingChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="text"
              className="form-control"
              id="year"
              placeholder="Year you got the cigar"
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
              placeholder="Where was the location"
              value={newCigar.location}
              onChange={this.locationChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              className="form-control"
              id="experience"
              placeholder="How was your experience"
              value={newCigar.experience}
              onChange={this.experienceChange}
            />
          </div>
          <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
      </div>
      );
    }
}

export default NewCigar;
