import React from 'react';

interface Props {
  collapsed?: boolean
  children?: React.ReactNode
}

// Collapsible personalizado de alto rendimiento, sin animaciones
const CustomCollapsible = (props: Props) => {
  return (
    <>
      {
        props.collapsed ?
          null
          :
          props.children
      }
    </>
  );
};

export default CustomCollapsible;
