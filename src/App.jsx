import "./App.css";
// import ContactList from "./components/ContactList/ContactList";
// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
import { Suspense, useEffect, lazy } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";
import RestrictedRoute from "./pages/RestrictedRoute";
import { refreshUser } from "./redux/auth/operations";
import { selectIsLoggedIn } from "./redux/auth/selectors";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [isLoggedIn]);

  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <RegistrationPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
