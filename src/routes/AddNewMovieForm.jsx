import React, { Component } from 'react'
import FormWrapper from '../components/common/FormWrapper';
import Input from '../components/common/Input';
import Select from '../components/common/Select';
import { validateForm } from '../utils/formValidation';
import Joi from 'joi-browser';
import { saveMovie, getMovie } from '../services/fakeMovieService';

export default class AddNewMovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { title: '', genre: '', numberInStock: '', dailyRentalRate: '' },
      errors: { title: '', genre: '', numberInStock: '', dailyRentalRate: '' },
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  schema = {
    title: Joi.string().required().label("Title"),
    numberInStock: Joi.number().required().label("Number In Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label('Rate'),
    genre: Joi.required(),
    _id: Joi.optional()
  };

  componentDidMount() {
    const { movieid } = this.props;

    if (movieid) {
      const movie = getMovie(movieid);
      const data = { ...this.state.data };
      data.title = movie.title;
      data.numberInStock = movie.numberInStock;
      data.dailyRentalRate = movie.dailyRentalRate;
      data.genre = movie.genre._id;
      data._id = movieid;

      this.setState({
        data: data
      })

    }
  }

  handleChange(e) {
    const data = { ...this.state.data };
    const name = e.target.name;
    const value = e.target.value;
    data[name] = value;

    this.setState({
      data: data
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const errors = validateForm(this.state.data, this.schema, { abortEarly: false });
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      const newMovie = {
        title: this.state.data.title,
        numberInStock: this.state.data.numberInStock,
        dailyRentalRate: this.state.data.dailyRentalRate,
        favorite: false,
        genreId: this.state.data.genre,
        _id: this.state.data._id
      }
      saveMovie(newMovie);
      this.props.navigate('/movies');
    }
  }



  render() {
    const { data, errors } = this.state;

    return (
      <FormWrapper heading="Add New Movie">
        <Input
          label="Title"
          name="title"
          type="text"
          value={data.title}
          onChange={this.handleChange}
          error={errors.title} />

        <Select
          label="Select Genre"
          name="genre"
          value={data.genre}
          onChange={this.handleChange}
          error={errors.genre} />

        <Input
          label="Number In Stock"
          name="numberInStock"
          type="text"
          value={data.numberInStock}
          onChange={this.handleChange}
          error={errors.numberInStock} />

        <Input
          label="Rate"
          name="dailyRentalRate"
          type="text"
          value={data.dailyRentalRate}
          onChange={this.handleChange}
          error={errors.dailyRentalRate} />

        <button onClick={this.handleSubmit}>Add</button>

      </FormWrapper >
    )
  }
}
