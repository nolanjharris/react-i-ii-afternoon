import React, { Component } from 'react';

class Edit extends Component {
    handleChange = e => {
        this.props.editObject({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <>
                <div className="promptFields">
                    <div className="addObject prompts">
                        <p>First Name: </p>
                        <input
                            name="firstName"
                            defaultValue={this.props.currentObject.name.first}
                            onChange={this.handleChange}
                        />
                        <p>Last Name: </p>
                        <input
                            name="lastName"
                            defaultValue={this.props.currentObject.name.last}
                            onChange={this.handleChange}
                        />
                        <p>Hometown: </p>
                        <input
                            name="city"
                            defaultValue={this.props.currentObject.city}
                            onChange={this.handleChange}
                        />
                        <p>Country: </p>
                        <input
                            name="country"
                            defaultValue={this.props.currentObject.country}
                            onChange={this.handleChange}
                        />
                        <p>Job Title: </p>
                        <input
                            name="title"
                            defaultValue={this.props.currentObject.title}
                            onChange={this.handleChange}
                        />
                        <p>Employer: </p>
                        <input
                            name="employer"
                            defaultValue={this.props.currentObject.employer}
                            onChange={this.handleChange}
                        />
                        <p>Favorite Movies: </p>
                        <input
                            name="movie1"
                            defaultValue={this.props.currentObject.favoriteMovies[0]}
                            onChange={this.handleChange}
                        />
                        <input
                            name="movie2"
                            defaultValue={this.props.currentObject.favoriteMovies[1]}
                            onChange={this.handleChange}
                        />
                        <input
                            name="movie3"
                            defaultValue={this.props.currentObject.favoriteMovies[2]}
                            onChange={this.handleChange}
                        />
                        <button onClick={this.props.submitEdittedObject}>Edit Item</button>
                    </div>
                </div>
                }
      </>
        );
    }
}

export default Edit;