import React, { Component } from 'react';

class New extends Component {
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
        this.handleAddCity = this.handleAddCity.bind(this);
        this.handleAddCountry = this.handleAddCountry.bind(this);
        this.handleAddFirstName = this.handleAddFirstName.bind(this);
        this.handleAddLastName = this.handleAddLastName.bind(this);
        this.handleAddTitle = this.handleAddTitle.bind(this);
        this.handleAddEmployer = this.handleAddEmployer.bind(this);
        this.handleAddMovie1 = this.handleAddMovie1.bind(this);
        this.handleAddMovie2 = this.handleAddMovie2.bind(this);
        this.handleAddMovie3 = this.handleAddMovie3.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleAddFirstName(e) {
        this.setState({ firstName: e.target.value })
    }

    handleAddLastName(e) {
        this.setState({ lastName: e.target.value })
    }

    handleAddCity(e) {
        this.setState({ city: e.target.value })
    }

    handleAddCountry(e) {
        this.setState({ country: e.target.value })
    }

    handleAddTitle(e) {
        this.setState({ title: e.target.value })
    }

    handleAddEmployer(e) {
        this.setState({ employer: e.target.value })
    }

    handleAddMovie1(e) {
        this.setState({
            movie1: e.target.value
        })
    }

    handleAddMovie2(e) {
        this.setState({
            movie2: e.target.value
        })
    }

    handleAddMovie3(e) {
        this.setState({
            movie3: e.target.value
        })
    }

    addNewObject() {
        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        let city = this.state.city;
        let country = this.state.country;
        let title = this.state.title;
        let employer = this.state.employer;
        let favoriteMovies = [this.state.movie1, this.state.movie2, this.state.movie3];
        let newObject = {
            name: { first: firstName, last: lastName },
            city: city,
            country: country,
            title: title,
            employer: employer,
            favoriteMovies: favoriteMovies
        }
        this.props.addObject(newObject)

    }

    render() {

        return (
            <>
                {
                    this.props.addHidden ? null :
                        <div className="promptFields">
                            <div className="addObject prompts">
                                <p>First Name: </p>
                                <input placeholder="first name" onChange={this.handleAddFirstName} />
                                <p>Last Name: </p>
                                <input placeholder="last name" onChange={this.handleAddLastName} />
                                <p>Hometown: </p>
                                <input placeholder="city" onChange={this.handleAddCity} />
                                <p>Country: </p>
                                <input placeholder="country" onChange={this.handleAddCountry} />
                                <p>Job Title: </p>
                                <input placeholder="title" onChange={this.handleAddTitle} />
                                <p>Employer: </p>
                                <input placeholder="employer" onChange={this.handleAddEmployer} />
                                <p>Favorite Movies: </p>
                                <input placeholder="Movie One" onChange={this.handleAddMovie1} />
                                <input placeholder="Movie Two" onChange={this.handleAddMovie2} />
                                <input placeholder="Movie Three" onChange={this.handleAddMovie3} />
                                <button onClick={this.addNewObject.bind(this)}>Add New Item</button>
                            </div>
                        </div>
                }
            </>
        )
    }
}

export default New;