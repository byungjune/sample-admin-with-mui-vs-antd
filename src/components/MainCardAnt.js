import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { Card } from 'antd';

// ==============================|| CUSTOM - MAIN CARD ||============================== //

const MainCardAnt = forwardRef(({ children, sx = {}, ...others }, ref) => {
  return (
    <Card ref={ref} {...others} style={{ ...sx }}>
      {/* card content */}
      {children}
    </Card>
  );
});

MainCardAnt.displayName = 'MainCardAnt';

MainCardAnt.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  shadow: PropTypes.string,
  sx: PropTypes.object,
  children: PropTypes.node
};

export default MainCardAnt;
