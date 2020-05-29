import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from '../actions';
import AuthorDetail from "./AuthorDetails";

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList = () => {
        return this.props.posts.map((post) => {
            const author = this.props.authors.find((author) => author.data.id === post.userId);
            const authorName = (author && author.data) ? author.data.name : '';

            return (<div className="item" key={post.id}>
                <div className="content">
                    <div className="header">{post.title}</div>
                    <div className="description">
                        <p>{post.body}</p>
                    </div>
                    <div className="extra">
                        <AuthorDetail author={authorName}/>
                    </div>
                </div>
            </div>)
        });
    }

    render() {
        return (
            <div className='ui middle aligned divided list'>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToPros = (state) => {
    return state;
}

export default connect(mapStateToPros, {fetchPostsAndUsers})(PostList);