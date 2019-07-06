import React, { Component } from 'react';
import DisplayData from './DisplayData';
import New from './New';
import Edit from './Edit';
import data from '../data';

class DisplayBox extends Component {
    constructor() {
        super();

        this.state = {
            data: data,
            currentObjectIndex: 0,
            addHidden: true,
            editHidden: true
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleNew = this.handleNew.bind(this);
        this.handleAddObject = this.handleAddObject.bind(this);
        this.handleEditObject = this.handleEditObject.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handlePrevious() {
        if (this.state.currentObjectIndex > 0) {
            this.setState({ currentObjectIndex: this.state.currentObjectIndex - 1, editHidden: true, addHidden: true })
        } else {
            this.setState({ currentObjectIndex: this.state.data.length - 1, editHidden: true, addHidden: true })
        }
    }

    handleNext() {
        if (this.state.currentObjectIndex < this.state.data.length - 1) {
            this.setState({ currentObjectIndex: this.state.currentObjectIndex + 1, editHidden: true, addHidden: true })
        } else {
            this.setState({ currentObjectIndex: 0, editHidden: true, addHidden: true })
        }
    }

    handleNew() {
        this.setState({ addHidden: false })
    }

    handleEdit() {
        this.setState({ editHidden: false })
        console.log(this.state.currentObjectIndex);
    }

    handleDelete() {
        let dataCopy = [...this.state.data];
        dataCopy.splice(this.state.currentObjectIndex, 1);
        let index;
        if (this.state.data.length > 1 && this.state.currentObjectIndex === this.state.data.length - 1) {
            index = this.state.currentObjectIndex - 1;
        } else {
            index = this.state.currentObjectIndex;
        }
        this.setState({ data: dataCopy, currentObjectIndex: index });
    }

    handleAddObject(newObject) {
        this.setState({ data: [...this.state.data, newObject], addHidden: true });
    }

    handleEditObject(edittedObject) {
        console.log(edittedObject)
        let objectCopy = [...this.state.data];
        objectCopy.splice(this.state.currentObjectIndex, 1, edittedObject)
        this.setState({ data: objectCopy, editHidden: true });

    }

    render() {

        return (
            <div className="displayAll">
                <div className="displayBox">
                    <div className="displayData">
                        <DisplayData dataObject={this.state.data} dataIndex={this.state.currentObjectIndex} />
                        <h1>{this.state.currentObjectIndex + 1}/{this.state.data.length}</h1>
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
                <New addObject={this.handleAddObject} addHidden={this.state.addHidden} />
                {this.state.editHidden ? null :
                    <Edit
                        firstName={this.state.data[this.state.currentObjectIndex].name.first}
                        lastName={this.state.data[this.state.currentObjectIndex].name.last}
                        city={this.state.data[this.state.currentObjectIndex].city}
                        country={this.state.data[this.state.currentObjectIndex].country}
                        title={this.state.data[this.state.currentObjectIndex].title}
                        employer={this.state.data[this.state.currentObjectIndex].employer}
                        movie1={this.state.data[this.state.currentObjectIndex].favoriteMovies[0]}
                        movie2={this.state.data[this.state.currentObjectIndex].favoriteMovies[1]}
                        movie3={this.state.data[this.state.currentObjectIndex].favoriteMovies[2]}
                        index={this.state.currentObjectIndex}
                        editHidden={this.state.editHidden}
                        editObject={this.handleEditObject} />}
            </div>
        )
    }
}

export default DisplayBox;