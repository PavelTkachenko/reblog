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

  render() {
    const { items } = this.state
    return(
      <div>
        <BlogList items={ items } like={this.like} />
        {/* <PieChart columns={[ ...items.map( item => [item.text,item.likes]) ]} /> */}
      </div>
    )
  };

  like(item_id) {
    const idx = this.state.items.findIndex((elem) => elem.id === item_id )
    const newState = update(this.state, {
       items: {
        [idx]: {
          likes: { $apply: (x) => x + 1 }
        }
      }
    });
    this.setState(newState);
  }
}

export default BlogPage;
