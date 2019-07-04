import React, { Component } from 'react';

class Edit extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            city: '',
            country: '',
            title: '',
            employer: '',
            movie1: '',
            movie2: '',
            movie3: ''
        }

        this.firstNameInput = React.createRef();

        this.handleEditCity = this.handleEditCity.bind(this);
        this.handleEditCountry = this.handleEditCountry.bind(this);
        this.handleEditFirstName = this.handleEditFirstName.bind(this);
        this.handleEditLastName = this.handleEditLastName.bind(this);
        this.handleEditTitle = this.handleEditTitle.bind(this);
        this.handleEditEmployer = this.handleEditEmployer.bind(this);
        this.handleEditMovie1 = this.handleEditMovie1.bind(this);
        this.handleEditMovie2 = this.handleEditMovie2.bind(this);
        this.handleEditMovie3 = this.handleEditMovie3.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleEditFirstName(e) {
        e.preventDefault();
        this.setState({ firstName: this.firstNameInput.current.value })

    }

    handleEditLastName(e) {
        this.setState({ lastName: e.target.value })
    }

    handleEditCity(e) {
        this.setState({ city: e.target.value })
    }

    handleEditCountry(e) {
        this.setState({ country: e.target.value })
    }

    handleEditTitle(e) {
        this.setState({ title: e.target.value })
    }

    handleEditEmployer(e) {
        this.setState({ employer: e.target.value })
    }

    handleEditMovie1(e) {
        this.setState({
            movie1: e.target.value
        })
    }

    handleEditMovie2(e) {
        this.setState({
            movie2: e.target.value
        })
    }

    handleEditMovie3(e) {
        this.setState({
            movie3: e.target.value
        })
    }

    editObject() {
        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        let city = this.state.city;
        let country = this.state.country;
        let title = this.state.title;
        let employer = this.state.employer;
        let favoriteMovies = [this.state.movie1, this.state.movie2, this.state.movie3];
        let edittedObject = {
            name: { first: firstName, last: lastName },
            city: city,
            country: country,
            title: title,
            employer: employer,
            favoriteMovies: favoriteMovies
        }
        this.props.editObject(edittedObject)

    }

    render() {

        return (
            <div className="promptFields">
                <div className="addObject prompts">
                    <p>First Name: </p>
                    <input defaultValue={this.props.data[this.props.index].name.first} onChange={this.handleChange} />
                    <p>Last Name: </p>
                    <input defaultValue={this.props.data[this.props.index].name.last} onChange={this.handleChange} />
                    <p>Hometown: </p>
                    <input defaultValue={this.props.data[this.props.index].city} onChange={this.handleEditCity} />
                    <p>Country: </p>
                    <input defaultValue={this.props.data[this.props.index].country} onChange={this.handleEditCountry} />
                    <p>Job Title: </p>
                    <input defaultValue={this.props.data[this.props.index].title} onChange={this.handleEditTitle} />
                    <p>Employer: </p>
                    <input defaultValue={this.props.data[this.props.index].employer} onChange={this.handleEditEmployer} />
                    <p>Favorite Movies: </p>
                    <input defaultValue={this.props.data[this.props.index].favoriteMovies[0]} onChange={this.handleEditMovie1} />
                    <input defaultValue={this.props.data[this.props.index].favoriteMovies[1]} onChange={this.handleEditMovie2} />
                    <input defaultValue={this.props.data[this.props.index].favoriteMovies[2]} onChange={this.handleEditMovie3} />
                    <button onClick={this.editObject.bind(this)}>Edit Item</button>
                </div>
            </div>
        )
    }
}

export default Edit;