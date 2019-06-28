import React, { Component } from 'react';


class AddBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            isbn: null,
            image_url: '',
            description: '',
            rating: 0
        }
    }
    handleChangeFor = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
    }
    render() {
        return (
                <div class="stack main">
                <form>
                    <div>
                        <label>Title</label>
                        <input onChange={(event) => this.handleChangeFor(event, 'title')} />
                    </div>
                    <div>
                        <label>Author</label>
                        <input onChange={(event) => this.handleChangeFor(event, 'author')} />
                    </div>
                    <div>
                        <label>ISBN</label>
                        <input onChange={(event) => this.handleChangeFor(event, 'isbn')} />
                    </div>
                    <div>
                        {/* restrict characters */}
                        <label>Description</label>
                        <input onChange={(event) => this.handleChangeFor(event, 'description')} />
                    </div>
                    <div>
                        <label>Image URL</label>
                        <input onChange={(event) => this.handleChangeFor(event, 'image_url')} />
                    </div>
                    <div>
                        <label>Rating: {this.state.rating}</label>
                        <input type="range" id="rating" min="0" max="10" step="0.5" value={this.state.rating} onChange={(event) => this.handleChangeFor(event, 'rating')} />
                    </div>
                    <button class="submit">save book details</button>
                </form>
            </div>

        )
    }
}
export default AddBookForm; 