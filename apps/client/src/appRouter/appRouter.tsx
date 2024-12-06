// Routing
import { createBrowserRouter } from 'react-router-dom'

// Pages
import { HomePage } from '@/pages/Home'
import { TestPage } from '@/pages/Test'
import NotFound from '@/pages/NotFound'
import RegistrationPage from '@/pages/auth/register'

// Layouts
import AuthLayout from '@/layouts/AuthLayout'

/**
 * Sets up the routing config for the application
 */
const appRouter = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'register',
        element: <RegistrationPage />,
      },
      { index: true, element: <NotFound /> },
    ],
  },
  { path: '/test', element: <TestPage /> },
  {
    // Catch-all route for undefined paths
    path: '*',
    element: <NotFound />,
  },
])

export default appRouter
