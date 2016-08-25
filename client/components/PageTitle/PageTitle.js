import React, { PropTypes } from 'react';

export default function PageTitle({ children }) {
  return (
    <div className="page-header">
      <h2>{children}</h2>
    </div>
  );
}

PageTitle.propTypes = {
  children: PropTypes.node
};
