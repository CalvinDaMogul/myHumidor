import React from 'react';

import cigarData from '../../Helpers/data/cigars';

import './EditCigar.scss';

const defaultCigar = {
  cigarName: '',
  imageUrl: '',
  rating: '',
  year: '',
  location: '',
  experience: '',
};

class EditCigar extends React.Component {
    state = {
      editCigar: defaultCigar,
    }


formFieldStringState = (name, e) => {
  const tempCigar = { ...this.state.EditCigar };
  tempCigar[name] = e.target.value;
  this.setState({ editCigar: tempCigar });
}

cigarNameChange = e => this.formFieldStringState('cigarName', e);

imageUrlChange = e => this.formFieldStringState('imageUrl', e);

ratingChange = e => this.formFieldStringState('rating', e);

yearChange = e => this.formFieldStringState('year', e);

locationChange = e => this.formFieldStringState('location', e);

experienceChange = e => this.formFieldStringState('experience', e);

formSubmit = (e) => {
  e.preventDefault();
  const saveMe = { ...this.state.editCigar };
  console.error(saveMe);
  const cigarId = this.props.match.params.id;
  cigarData.putCigar(saveMe, cigarId)
    .then(() => this.props.history.push('/home'))
    .catch(err => console.error('unable to save', err));
}

componentDidMount() {
  const cigarId = this.props.match.params.id;
  cigarData.getSingleCigar(cigarId)
    .then(cigarPromise => this.setState({ editCigar: cigarPromise.data }))
    .catch(err => console.error('could not find a cigar', err));
}

render() {
  const { editCigar } = this.state;
  return (
          <div className="EditCigar">
      <h1>Edit Cigar</h1>
      <form onSubmit={this.formSubmit}>
        <div className="form-group">
          <label htmlFor="cigarName">Cigar Name</label>
          <input
            type="text"
            className="form-control"
            id="cigarName"
            placeholder="Name cigar"
            value={editCigar.cigarName}
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
            value={editCigar.imageUrl}
            onChange={this.imageUrlChange}
          />
           </div>
           <div className="form-group">
            <label htmlFor="rating">Rating of Cigar</label>
             <select value={editCigar.rating} onChange={this.ratingChange}>
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
            placeholder="year"
            value={editCigar.year}
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
            value={editCigar.location}
            onChange={this.locationChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Experience</label>
          <input
            type="text"
            className="form-control"
            id="experience"
            placeholder="How was your experience"
            value={editCigar.experience}
            onChange={this.experienceChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}
}

export default EditCigar;
