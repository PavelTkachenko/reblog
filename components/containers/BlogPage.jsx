import React from 'react';
import BlogList from '../ui/BlogList.jsx'

const items = [
  {
    image: {
      src: "",
      alt: "AL",
      width: 64,
      height: 64
    }, text: "Ada Lovelace"
  },
  {
    image: {
      src: "",
      alt: "NW",
      width: 64,
      height: 64
    }, text: "Niklaus Wirth"
  },
  {
    image: {
      src: "",
      alt: "BG",
      width: 64,
      height: 64
    }, text: "Bill Gates"
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
