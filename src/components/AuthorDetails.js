import React from 'react';
import {connect} from 'react-redux';
import {fetchAuthor} from '../actions';

class AuthorDetail extends React.Component {
    componentDidMount() {
        if (this.props.authorId)
            this.props.fetchAuthor(this.props.authorId);
    }

    render() {
        let {author} = this.props;

        return (
            <div>
                <h5>Author: {(author&&author.data)?author.data.name: ''}</h5>
            </div>
        );
    }
}
// Accepts state and components props known as ownProps
const mapStateToProps = (state, ownProps) => {
    return {
        author: state.authors.find((author) => author.data.id === ownProps.authorId)
    };
}

export default connect(mapStateToProps, {fetchAuthor})(AuthorDetail);