import { Provider } from "react-redux";
import Body from "./JobPost/components/Body";
import store from "./JobPost/utils/redux/appStore";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Overview from "./JobPost/components/pages/Overview";
import Dashboard from "./JobPost/components/Dashboard/Dashboard";
import MainSetting from "./JobPost/components/pages/settings/MainSetting";
import Applications from "./JobPost/components/Applications"
import PostJobForm from "../src/JobPost/components/PostJobForm"
import CandidatePool from '../src/JobPost/components/CandidatePool'
import Header from "./JobPost/Header";
import Login from "./pages/auth/Login";
import Layout from "./pages/auth/Layout";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import DetailsPage from "./pages/auth/DetailsPage";

const Home = () => <h1>Home</h1>;
const FindCandidate = () => <h1>FindCandidate</h1>;
const MyJobs = () => <h1>MyJobs</h1>;
// const Applications = () => <h1>Applications</h1>;
const CustomerSupports = () => <h1>CustomerSupports</h1>;

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Body>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/find-candidate" element={<FindCandidate />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="overview" element={<Overview />} />
                <Route path="settings" element={<MainSetting />} />
              </Route>
              <Route path="/post-a-job" element={<PostJobForm />} />
              <Route path="/my-jobs" element={<CandidatePool />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/customer-supports" element={<CustomerSupports />} />
              
              {/* These are login components. 
                  They are currently commented out due to uncertainty about the routing. */}

              {/* <Route path="/" element={<Layout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgetPassword" element={<ForgetPassword />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
              <Route path="/detailspage" element={<DetailsPage />} /> */}
            </Routes>
          </Body>
        </Router>
      </Provider>
    </>
  );
}

export default App;
