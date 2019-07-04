import React, { Component } from 'react';

class DisplayData extends Component {

    render() {
        let firstName, lastName, city, country, jobTitle, employer, movieOne, movieTwo, movieThree;
        if (this.props.dataObject.length === 0) {
            firstName = '';
            lastName = '';
            city = '';
            country = '';
            jobTitle = '';
            employer = '';
            movieOne = '';
            movieTwo = '';
            movieThree = '';
        } else {
            firstName = this.props.dataObject[this.props.dataIndex].name.first;
            lastName = this.props.dataObject[this.props.dataIndex].name.last;
            city = this.props.dataObject[this.props.dataIndex].city;
            country = this.props.dataObject[this.props.dataIndex].country;
            jobTitle = this.props.dataObject[this.props.dataIndex].title;
            employer = this.props.dataObject[this.props.dataIndex].employer;
            movieOne = this.props.dataObject[this.props.dataIndex].favoriteMovies[0];
            movieTwo = this.props.dataObject[this.props.dataIndex].favoriteMovies[1];
            movieThree = this.props.dataObject[this.props.dataIndex].favoriteMovies[2];
        }
        return (
            <div className="displayInfo">
                <div className="personInfo">
                    <h1>{firstName} {lastName}</h1>
                    <p><strong>From: </strong>{city}, {country}</p>
                    <p><strong>Job Title: </strong>{jobTitle}</p>
                    <p><strong>Employer: </strong>{employer}</p>
                </div>
                <div className="movieInfo">
                    <p><strong>Favorite Movies:</strong></p>
                    <p className="listItem">1. {movieOne}</p>
                    <p className="listItem">2. {movieTwo}</p>
                    <p className="listItem">3. {movieThree}</p>
                </div>
            </div>
        )
    }
}

export default DisplayData;