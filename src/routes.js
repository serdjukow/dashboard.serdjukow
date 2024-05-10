import { lazy } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { LOGIN_ROUTE, HOME_ROUTE, DASHBOARD_ROUTE } from "./utils/const"
const LoginPage = lazy(() => import("./Pages/LoginPage"))
const AppPages = lazy(() => import("./Pages/AppPages"))
const Dashboard = lazy(() => import("./Pages/Dashboard"))

const auth = true

export const useRoutes = () => {
  const PrivateRoutes = ({ children }) => {
    if (!auth) {
      return <Navigate to={LOGIN_ROUTE} />
    }
    return children
  }

  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<AppPages />}>
        <Route
          index
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
       
        {/* <Route
          path={DASHBOARD_ROUTE}
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        /> */}
        {/* <Route
          path={ADMIN_WORKS_ROUTE}
          element={
            <PrivateRoutes>
              <Works />
            </PrivateRoutes>
          }
        />
        <Route
          path={`${ADMIN_WORKS_ROUTE}/:id`}
          element={
            <PrivateRoutes>
              <EditPage />
            </PrivateRoutes>
          }
        /> */}

        <Route path={LOGIN_ROUTE} element={<LoginPage />} />
        <Route path="*" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}
