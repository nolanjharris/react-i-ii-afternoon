import React, { Component } from 'react';
import DisplayData from './DisplayData';
import New from './New';
import Edit from './Edit';
import data from '../data';

class DisplayBox extends Component {
    state = {
        data: data,
        currentObjectIndex: 0,
        addHidden: true,
        editingObject: {},
        editHidden: true
    };

    handlePrevious = () => {
        if (this.state.currentObjectIndex > 0) {
            this.setState({
                currentObjectIndex: this.state.currentObjectIndex - 1,
                editHidden: true,
                addHidden: true
            });
        } else {
            this.setState({
                currentObjectIndex: this.state.data.length - 1,
                editHidden: true,
                addHidden: true
            });
        }
    };

    handleNext = () => {
        if (this.state.currentObjectIndex < this.state.data.length - 1) {
            this.setState({
                currentObjectIndex: this.state.currentObjectIndex + 1,
                editHidden: true,
                addHidden: true
            });
        } else {
            this.setState({
                currentObjectIndex: 0,
                editHidden: true,
                addHidden: true
            });
        }
    };

    handleNew = () => {
        this.setState({ addHidden: false });
    };

    handleEdit = () => {
        this.setState({ editHidden: false, editingObject: this.state.data[this.state.currentObjectIndex] });
    };

    handleDelete = () => {
        let dataCopy = [...this.state.data];
        dataCopy.splice(this.state.currentObjectIndex, 1);
        let index;
        if (
            this.state.data.length > 1 &&
            this.state.currentObjectIndex === this.state.data.length - 1
        ) {
            index = this.state.currentObjectIndex - 1;
        } else {
            index = this.state.currentObjectIndex;
        }
        this.setState({ data: dataCopy, currentObjectIndex: index });
    };

    handleAddObject = newObject => {
        this.setState({ data: [...this.state.data, newObject], addHidden: true });
    };

    handleEditObject = edittedObject => {
        const newData = {
            city: edittedObject.city
                ? edittedObject.city
                : this.state.editingObject.city,
            country: edittedObject.country
                ? edittedObject.country
                : this.state.editingObject.country,
            employer: edittedObject.employer
                ? edittedObject.employer
                : this.state.editingObject.employer,
            favoriteMovies: [
                edittedObject.movie1
                    ? edittedObject.movie1
                    : this.state.editingObject.favoriteMovies[0],
                edittedObject.movie2
                    ? edittedObject.movie2
                    : this.state.editingObject.favoriteMovies[1],
                edittedObject.movie3
                    ? edittedObject.movie3
                    : this.state.editingObject.favoriteMovies[2]
            ],
            id: edittedObject.id ? edittedObject.id : 1,
            name: {
                first: edittedObject.firstName
                    ? edittedObject.firstName
                    : this.state.editingObject.name.first,
                last: edittedObject.lastName
                    ? edittedObject.lastName
                    : this.state.editingObject.name.last
            },
            title: edittedObject.title
                ? edittedObject.title
                : this.state.editingObject.title
        };
        this.setState({ editingObject: newData });
    };

    handleSubmit = () => {
        let dataCopy = [...this.state.data];
        dataCopy.splice(this.state.currentObjectIndex, 1, this.state.editingObject);
        this.setState({ data: dataCopy, editHidden: true, editingObject: this.state.data[this.state.currentObjectIndex] });
    };

    render() {
        return (
            <div className="displayAll">
                <div className="displayBox">
                    <div className="displayData">
                        <DisplayData
                            dataObject={this.state.data}
                            dataIndex={this.state.currentObjectIndex}
                        />
                        <h1>
                            {this.state.currentObjectIndex + 1}/{this.state.data.length}
                        </h1>
                    </div>
                    <div className="buttonsDiv">
                        <button onClick={this.handlePrevious}>&lt; Previous</button>
                        <div className="blueButtons">
                            <button onClick={this.handleEdit}>Edit</button>
                            <button onClick={this.handleDelete}>Delete</button>
                            <button onClick={this.handleNew}>New</button>
                        </div>
                        <button onClick={this.handleNext}>Next &gt;</button>
                    </div>
                </div>
                <New
                    addObject={this.handleAddObject}
                    addHidden={this.state.addHidden}
                />
                {this.state.editHidden ? null : (
                    <Edit
                        index={this.state.currentObjectIndex}
                        currentObject={this.state.data[this.state.currentObjectIndex]}
                        editHidden={this.state.editHidden}
                        editObject={this.handleEditObject}
                        submitEdittedObject={this.handleSubmit}
                    />
                )}
            </div>
        );
    }
}

export default DisplayBox;