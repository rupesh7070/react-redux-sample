import React, {Component} from 'react';
import connect from "react-redux/lib/connect/connect";
import addBook from "../action/BookAction";

class BookPage extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <p> Current books -- </p>
                {this.props.booksList.map(book => <h4>{book.name}</h4>)}
                <p>Enter Book to add -  <b> Not working </b></p>
                <input type="text" name="bookName" value = {this.props.bookName} onChange={this.props.addBook}/>
                <button onClick={this.props.addBook}>Click to add</button>

            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        booksList: state.book.bookList,
        bookName: state.book.bookName
    }

}

function mapDispatchToProps(dispatch) {
    return {
        addBook: () => dispatch(addBook(this.props.bookName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);


