import React from 'react';
import {connect} from 'react-redux';
import {fetchAuthor} from '../actions';

class AuthorDetail extends React.Component {
    componentDidMount() {
        if (this.props.authorId)
            this.props.fetchAuthor(this.props.authorId);
    }

    render() {
        const author = this.props.authors.find((a) => a.data.id === this.props.authorId);
        return (
            <div>
                <h5>Author: {(author && author.data) ? author.data.name : ''}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {fetchAuthor})(AuthorDetail);