// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'MUI-dashboard',
      title: 'MUI Dashboard',
      type: 'item',
      url: '/dashboard/mui',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'ANT-dashboard',
      title: 'ANT Dashboard',
      type: 'item',
      url: '/dashboard/ant',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
