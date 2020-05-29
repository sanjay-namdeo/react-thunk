import React from 'react';

function AuthorDetail(props) {
    let {author} = props;

    return (
        <div>
            <h5>Author: {author}</h5>
        </div>
    );
}

export default AuthorDetail;