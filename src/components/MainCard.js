import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent } from '@mui/material';

// ==============================|| CUSTOM - MAIN CARD ||============================== //

const MainCard = forwardRef(({ border = true, boxShadow, children, content = true, contentSX = {}, shadow, sx = {}, ...others }, ref) => {
  const theme = useTheme();
  boxShadow = theme.palette.mode === 'dark' ? boxShadow || true : boxShadow;

  return (
    <Card
      ref={ref}
      {...others}
      sx={{
        ...sx,
        border: border ? '1px solid' : 'none',
        borderRadius: 2,
        borderColor: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A800,
        boxShadow: boxShadow && (!border || theme.palette.mode === 'dark') ? shadow || theme.customShadows.z1 : 'inherit',
        ':hover': {
          boxShadow: boxShadow ? shadow || theme.customShadows.z1 : 'inherit'
        },
        '& pre': {
          m: 0,
          p: '16px !important',
          fontFamily: theme.typography.fontFamily,
          fontSize: '0.75rem'
        }
      }}
    >
      {/* card content */}
      {content && <CardContent sx={contentSX}>{children}</CardContent>}
      {!content && children}
    </Card>
  );
});

MainCard.displayName = 'MainCard';

MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  contentSX: PropTypes.object,
  divider: PropTypes.bool,
  secondary: PropTypes.node,
  shadow: PropTypes.string,
  sx: PropTypes.object,
  content: PropTypes.bool,
  children: PropTypes.node
};

export default MainCard;
