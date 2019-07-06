import React, { Component } from 'react';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            city: this.props.city,
            country: this.props.country,
            title: this.props.title,
            employer: this.props.employer,
            movie1: this.props.movie1,
            movie2: this.props.movie2,
            movie3: this.props.movie3
        }
        console.log(this.state);
        this.handleEditCity = this.handleEditCity.bind(this);
        this.handleEditCountry = this.handleEditCountry.bind(this);
        this.handleEditFirstName = this.handleEditFirstName.bind(this);
        this.handleEditLastName = this.handleEditLastName.bind(this);
        this.handleEditTitle = this.handleEditTitle.bind(this);
        this.handleEditEmployer = this.handleEditEmployer.bind(this);
        this.handleEditMovie1 = this.handleEditMovie1.bind(this);
        this.handleEditMovie2 = this.handleEditMovie2.bind(this);
        this.handleEditMovie3 = this.handleEditMovie3.bind(this);
    }

    componentDidUpdate() {
        this.setState({
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            city: this.props.city,
            country: this.props.country,
            title: this.props.title,
            employer: this.props.employer,
            movie1: this.props.movie1,
            movie2: this.props.movie2,
            movie3: this.props.movie3
        })
    }

    handleEditFirstName(e) {
        this.setState({ firstName: e.target.value })
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
        const { firstName, lastName, city, country, title, employer } = this.state;
        console.log({ firstName, lastName, city, country, title, employer });
        // let firstName = this.state.firstName;
        // let lastName = this.state.lastName;
        // let city = this.state.city;
        // let country = this.state.country;
        // let title = this.state.title;
        // let employer = this.state.employer;
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
        console.log(this.props.index);

    }

    render() {

        return (
            <>

                <div className="promptFields">
                    <div className="addObject prompts">
                        <p>First Name: </p>
                        <input ref='firstName' defaultValue={this.props.firstName} onChange={this.handleEditFirstName} />
                        <p>Last Name: </p>
                        <input defaultValue={this.props.lastName} onChange={this.handleEditLastName} />
                        <p>Hometown: </p>
                        <input defaultValue={this.props.city} onChange={this.handleEditCity} />
                        <p>Country: </p>
                        <input defaultValue={this.props.country} onChange={this.handleEditCountry} />
                        <p>Job Title: </p>
                        <input defaultValue={this.props.title} onChange={this.handleEditTitle} />
                        <p>Employer: </p>
                        <input defaultValue={this.props.employer} onChange={this.handleEditEmployer} />
                        <p>Favorite Movies: </p>
                        <input defaultValue={this.props.movie1} onChange={this.handleEditMovie1} />
                        <input defaultValue={this.props.movie2} onChange={this.handleEditMovie2} />
                        <input defaultValue={this.props.movie3} onChange={this.handleEditMovie3} />
                        <button onClick={this.editObject.bind(this)}>Edit Item</button>
                    </div>
                </div>
                }
            </>
        )
    }
}

export default Edit;