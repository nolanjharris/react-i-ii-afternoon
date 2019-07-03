import React, { Component } from 'react';
import DisplayData from './DisplayData';
import data from '../data';

class DisplayBox extends Component {
    constructor() {
        super();

        this.state = {
            data: data,
            currentObjectIndex: 0
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handlePrevious() {
        if (this.state.currentObjectIndex > 0) {
            this.setState({ currentObjectIndex: this.state.currentObjectIndex - 1 })
        }
    }

    handleNext() {
        if (this.state.currentObjectIndex < this.state.data.length - 1) {
            this.setState({ currentObjectIndex: this.state.currentObjectIndex + 1 })
        }
    }

    handleDelete() {
        let dataCopy = [...this.state.data];
        dataCopy.splice(this.state.currentObjectIndex, 1);
        let index;
        if (this.state.currentObjectIndex === this.state.data.length - 1) {
            index = this.state.currentObjectIndex - 1;
        } else {
            index = this.state.currentObjectIndex;
        }
        this.setState({ data: dataCopy, currentObjectIndex: index });
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
                            <button>Edit</button>
                            <button onClick={this.handleDelete}>Delete</button>
                            <button onClick={this.handleNew}>New</button>
                        </div>
                        <button onClick={this.handleNext}>Next &gt;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayBox;