// material-ui
import { Box } from '@mui/material';

// project import
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  return (
    <Box sx={{ pt: 2 }}>
      {menuItem.items.map((item) => (
        <NavGroup key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default Navigation;
