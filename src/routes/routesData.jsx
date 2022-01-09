import LoginPage from "../components/SharedPages/LoginPage/LoginPage"
import UserDetails from "../components/SharedPages/UserDetails/UserDetails"
import NotificationsPage from "../components/SharedPages/NotificationsPage/NotificationsPage"
import MessagesPage from "../components/SharedPages/MessagesPage/MessagesPage"
import HelpPage from "../components/SharedPages/HelpPage/HelpPage"
import ProfilePage from "../components/SharedPages/ProfilePage/ProfilePage"
import SettingsPage from "../components/SharedPages/SettingsPage/SettingsPage"
import ErrorPage from "../components/SharedPages/ErrorPage/ErrorPage"
import AdminHomePage from "../components/AdminUser/Admin_HomePage/Admin_HomePage"
import AdminDoctorsPage from "../components/AdminUser/Admin_DoctorsPage/Admin_DoctorsPage"
import AdminPatientsPage from "../components/AdminUser/Admin_PatientsPage/Admin_PatientsPage"
import AdminAdminsPage from "../components/AdminUser/Admin_AdminsPage/Admin_AdminsPage"

const routesData = [
    // Non Authorizated Routes
    {
        path: "/login",
        component: <LoginPage />
    },

    // Authorizated Routes
    // Admin Routes
    {
        path: "/homepage",
        component: <AdminHomePage />
    },
    {
        path: "/doctors",
        component: <AdminDoctorsPage />
    },
    {
        path: "/patients",
        component: <AdminPatientsPage />
    },
    {
        path: "/admins",
        component: <AdminAdminsPage />
    },

    // Shared Routes
    {
        path: "/user-details/:username",
        component: <UserDetails />
    },
    {
        path: "/notifications",
        component: <NotificationsPage />
    },
    {
        path: "/messages",
        component: <MessagesPage />
    },
    {
        path: "/help",
        component: <HelpPage />
    },
    {
        path: "/profile",
        component: <ProfilePage />
    },
    {
        path: "/settings",
        component: <SettingsPage />
    }, {
        path: "*",
        component: <ErrorPage />
    }
]

export default routesData