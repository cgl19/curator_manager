import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const CalendarPage = lazy(() => import('src/pages/calendar'));
export const MediaPage = lazy(() => import('src/pages/media'));
export const ProfilePage = lazy(() => import('src/pages/profile'));

export const LoginPage = lazy(() => import('src/pages/login'));
export const SignupPage = lazy(() => import('src/pages/signup'));
export const AddAccounts = lazy(() => import('src/pages/accounts'));
export const OrganizationsPage = lazy(() => import('src/pages/organizations'));
export const GroupsPage = lazy(() => import('src/pages/groups'));
export const ScholarsPage = lazy(() => import('src/pages/scholars'));
export const DesignersPage = lazy(() => import('src/pages/designers'));
export const ClientsPage = lazy(() => import('src/pages/clients'));
export const UserPage = lazy(() => import('src/pages/user'));
export const PreferencesPage = lazy(() => import('src/pages/preferences'));
export const IntervalsPage = lazy(() => import('src/pages/intervals'));
export const SettingsPage = lazy(() => import('src/pages/settings'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const TasksPage = lazy(() => import('src/pages/tasks'));
export const Page404 = lazy(() => import('src/pages/page-not-found')); 

// ----------------------------------------------------------------------
export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'posts', element: <ProductsPage /> },
        { path: 'tasks', element: <TasksPage /> },
        { path: 'accounts', element: <AddAccounts /> },
        { path: 'organizations', element: <OrganizationsPage /> },
        { path: 'groups', element: <GroupsPage /> },
        { path: 'scholars', element: <ScholarsPage /> },
        { path: 'designers', element: <DesignersPage /> },
        { path: 'clients', element: <ClientsPage /> },
        { path: 'users', element: <UserPage /> },
        { path: 'preferences', element: <PreferencesPage /> },
        { path: 'intervals', element: <IntervalsPage /> },
        { path: 'calendar', element: <CalendarPage /> },
        { path: 'media', element: <MediaPage /> },
        { path: 'settings', element: <SettingsPage /> },
        { path: 'profile', element: <ProfilePage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignupPage />,
    },
    {
      path: 'logout',
      element: <SignupPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
