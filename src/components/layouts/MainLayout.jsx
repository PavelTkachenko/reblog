import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/ui/Link';

const MainLayout = ({ children }) => (
  <div>
    <Link to="/"><h2 style={{ padding: '20px 20px 10px' }}>Киноблог</h2></Link>
    <hr />
    {children}
  </div>
);

export default MainLayout;
