import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import AuthorDetail from "./AuthorDetails";

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList = () => {
        return this.props.posts.map((post) =>
            <div className="item" key={post.id}>
                <div className="content">
                    <div className="header">{post.title}</div>
                    <div className="description">
                        <p>{post.body}</p>
                    </div>
                    <div className="extra">
                        <AuthorDetail authorId={post.userId}/>
                    </div>
                </div>
            </div>
        );
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

export default connect(mapStateToPros, {fetchPosts})(PostList);