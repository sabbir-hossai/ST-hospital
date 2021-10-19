import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from '../Health/blog/Blog'
import './Health.css'

const Health = () => {
    const [blogs, setBlogs] = useState();
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="blogs">
            <h1>Our Health Blogs</h1>
            <div className="banner">

            </div>
            < Row Row xs={1} sm={1} md={2} lg={2} className="g-4">
                {blogs?.map(blog => <Blog key={blog.blogId}
                    blog={blog}></Blog>)}
            </Row>
        </div>
    );
};

export default Health;