import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [ 
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  }, 
 
  { 
    title: 'Posts',
    path: '/posts',
    icon: icon('ic_post'),
  }, 
  { 
    title: 'Tasks',
    path: '/tasks',
    icon: icon('ic_task'),
  },
  
  {
    title: 'Accounts',
    path: '/accounts',
    icon: icon('ic_account'),
  },
  {
    title: 'Organizations',
    path: '/organizations',
    icon: icon('ic_organization'),
  }, 
  {
    title: 'Groups', 
    path: '/groups', 
    icon: icon('ic_group'),
  },
  {
    title: 'Scholars',
    path: '/scholars',
    icon: icon('ic_scholar'),
  }, 
  {
    title: 'Designers',
    path: '/designers',
    icon: icon('ic_designer'),
  },

  {
    title: 'Clients',
    path: '/clients',
    icon: icon('ic_client'),
  },
  {
    title: 'Users',
    path: '/users',
    icon: icon('ic_system_user'),
  },
  {
    title: 'Preferences',
    path: '/preferences',
    icon: icon('ic_preference'),
  }, 
  {
    title: 'Intervals',
    path: '/intervals',
    icon: icon('ic_interval'),
  },
  { 
    title: 'Calendar',
    path: '/calendar',
    icon: icon('ic_calendar'),
  }, 
 
  { 
    title: 'Media',
    path: '/media',
    icon: icon('ic_album'),
  }, 
  {
    title: 'Settings',
    path: '/settings',
    icon: icon('ic_setting'),
  },
];

export default navConfig; 
