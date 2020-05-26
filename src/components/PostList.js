import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                {this.props.posts.map((post) =>
                    <div key={post.id}>Post Title: {post.title}</div>
                )}
            </div>
        );
    }
}

const mapStateToPros = (state) => {
    return state;
}

export default connect(mapStateToPros, {fetchPosts})(PostList);