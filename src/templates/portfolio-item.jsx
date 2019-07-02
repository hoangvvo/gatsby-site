import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = ({
  name, description, color, image, link, linkTitle,
}) => (
  <div className="columns hv-section-portfolio-item">
    <div className="column is-4">
      <img src={image} alt={name} />
    </div>
    <div className="column is-8 content">
      <h4 className="title hv-portfolio-title is-1" style={{ color }}>{name}</h4>
      <p className="has-text-grey-light hv-portfolio-desc">{description}</p>
      <a href={link} style={{ backgroundColor: color }} className="button is-fullwidth is-rounded is-primary" target="_blank" rel="noreferrer noopener">{linkTitle}</a>
    </div>
  </div>
);

PortfolioItem.defaultProps = {
  description: '',
  image: '',
  color: '',
  link: '#',
  linkTitle: PortfolioItem.name,
};

PortfolioItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string,
  linkTitle: PropTypes.string,
};

export default PortfolioItem;
