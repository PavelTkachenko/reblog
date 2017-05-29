import React from 'react';
import BlogList from '../ui/BlogList.jsx'

const items = [
  {
    id: "22",
    text: "React is awesome!",
    image: {
      src: "https://68.media.tumblr.com/avatar_9469032b47b8_128.png",
      alt: "AL",
      width: 64,
      height: 64
    },
    meta: {
      author: 'I. Ivanov',
      created_at: '2017-05-23T18:25:43.511Z',
      updated_at: '2017-05-23T18:25:43.511Z'
    }
  },
  {
    id: "13",
    text: "Angular is awesome!",
    image: {
      src: "https://68.media.tumblr.com/avatar_9469032b47b8_128.png",
      alt: "NW",
      width: 64,
      height: 64
    },
    meta: {
      author: 'A. Petrov',
      created_at: '2017-05-22T12:20:20.511Z',
      updated_at: '2017-05-23T00:13:43.511Z'
    }
  },
  {
    id: "16",
    text: "Ember is awesome!",
    image: {
      src: "https://68.media.tumblr.com/avatar_9469032b47b8_128.png",
      alt: "BG",
      width: 64,
      height: 64
    },
    meta: {
      author: 'V. Sidorov',
      created_at: '2017-05-21T21:17:06.511Z',
      updated_at: '2017-05-21T21:17:06.511Z'
    }
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items };
  }

  render() {
    const { items } = this.state
    return <BlogList items={ items } />
  };
}

export default BlogPage;
