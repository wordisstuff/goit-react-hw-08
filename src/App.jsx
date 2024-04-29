import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { Suspense, useEffect, lazy } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import { useDispatch } from "react-redux";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
      <h1>
        <span style={{ color: "#9c9ef9aa" }}>P</span>h
        <span style={{ color: "#9cf9c0aa" }}>o</span>n
        <span style={{ color: "#61dafbaa" }}>e</span>b
        <span style={{ color: "#80945baa" }}>♾️</span>k
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
