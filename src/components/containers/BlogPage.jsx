import React from 'react';
import update from 'immutability-helper';
import BlogList from '../ui/BlogList';
import items from '../../constants/items';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items };
    this.like = this.like.bind(this);
  }

  like(itemId) {
    const idx = this.state.items.findIndex(elem => elem.id === itemId);
    const newState = update(this.state, {
      items: {
        [idx]: {
          likes: { $apply: x => x + 1 },
        },
      },
    });
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <BlogList items={this.state.items} like={this.like} />
        {/* <PieChart columns={[ ...items.map( item => [item.text,item.likes]) ]} /> */}
      </div>
    );
  }
}

export default BlogPage;
