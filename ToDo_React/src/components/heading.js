import React from 'react';
import styler from './heading.component.css'

const Heading = (props) => <h1 className={styler.heading} > {props.title} </h1>;
  
  export default Heading;

  const HeadingSmall = props => <h2 className={styler.heading_smal} > {props.title} </h2>;

  export {Heading, HeadingSmall};
