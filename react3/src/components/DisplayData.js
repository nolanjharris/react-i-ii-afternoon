import React, { Component } from 'react';

class DisplayData extends Component {

    render() {
        let firstName = this.props.dataObject[this.props.dataIndex].name.first;
        let lastName = this.props.dataObject[this.props.dataIndex].name.last;
        let city = this.props.dataObject[this.props.dataIndex].city;
        let country = this.props.dataObject[this.props.dataIndex].country;
        let jobTitle = this.props.dataObject[this.props.dataIndex].title;
        let employer = this.props.dataObject[this.props.dataIndex].employer;
        let movieOne = this.props.dataObject[this.props.dataIndex].favoriteMovies[0];
        let movieTwo = this.props.dataObject[this.props.dataIndex].favoriteMovies[1];
        let movieThree = this.props.dataObject[this.props.dataIndex].favoriteMovies[2];
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