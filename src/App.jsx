import {Children, useEffect, useState} from "react";
import {Route, Routes, useLocation, Navigate} from "react-router-dom";
import Loader from "./common/Loader";
import PageTitle from "./components/PageTitle";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

import TermsAndCondition from "./pages/Dashboard/TermsAndCondition";
import PrivacyAndPolicy from "./pages/Dashboard/PrivacyAndPolicy";
import SignIn from "./pages/Authentication/SignIn";
import PrivateRoute from "./Private/PrivateRoutes";
import OrderManagement from "./pages/Dashboard/OrderManagement";

import ForgotPassword from "./pages/Authentication/ForgotPasswordForm";
import VerificationCode from "./pages/Authentication/OTPVerificationForm";
import ResetPasswordForm from "./pages/Authentication/ResetPasswordForm";
import Congratulations from "./pages/Authentication/Congratulations";

import EarningsTable from "./components/Dashboard/Table/EarningTable";
import UserList from "./components/Dashboard/Table/UserList";
import PersonalInformation from "./pages/Dashboard/PersonalInformation";
import ChangePasswordForm from "./pages/Dashboard/ChangePassword";
import Products from "./pages/products/Products";
import AboutUs from "./pages/Dashboard/AboutUs";

function Routers() {
     const [loading, setLoading] = useState(true);
     const {pathname} = useLocation();

     useEffect(() => {
          window.scrollTo(0, 0);
     }, [pathname]);

     useEffect(() => {
          const timer = setTimeout(() => setLoading(false), 1000);
          return () => clearTimeout(timer); // Cleanup the timeout on unmount
     }, []);

     if (loading) return <Loader />;

     return (
          <Routes>
               {/* Public Route */}
               <Route path="/auth/signin" element={<SignIn />} />
               <Route
                    path="/auth/forgetPassword"
                    element={<ForgotPassword />}
               />
               <Route path="/auth/verifyOTP" element={<VerificationCode />} />
               <Route
                    path="/auth/resetpassword"
                    element={<ResetPasswordForm />}
               />
               <Route
                    path="auth/congratulations"
                    element={<Congratulations />}
               />

               {/* Private Routes */}
               <Route
                    path="/"
                    element={
                         <PrivateRoute>
                              <DefaultLayout />
                         </PrivateRoute>
                    }>
                    <Route
                         index
                         element={
                              <>
                                   <PageTitle
                                        title={"DOGTAG _ADMIN DASHBOARD"}
                                   />
                                   <Dashboard />
                              </>
                         }
                    />

                    <Route
                         path="orderManagement"
                         element={
                              <>
                                   <PageTitle title="DOGTAG _ADMIN DASHBOARD| Order Management" />
                                   <OrderManagement />
                              </>
                         }
                    />

                    <Route
                         path="earnings"
                         element={
                              <>
                                   <PageTitle title="DOGTAG _ADMIN DASHBOARD|Earnings" />
                                   <EarningsTable />
                              </>
                         }
                    />

                    <Route
                         path="userlist"
                         element={
                              <>
                                   <PageTitle title="DOGTAG _ADMIN DASHBOARD|User List" />
                                   <UserList />
                              </>
                         }
                    />

                    <Route
                         path="product"
                         element={
                              <>
                                   <PageTitle title="User List" />
                                   <Products />
                              </>
                         }
                    />

                    <Route
                         path="personalInformation"
                         element={
                              <>
                                   <PageTitle title="PersonalInformation" />
                                   <PersonalInformation />
                              </>
                         }
                    />
                    <Route
                         path="changePassword"
                         element={
                              <>
                                   <PageTitle title="ChangPassword" />
                                   <ChangePasswordForm />
                              </>
                         }
                    />

                    <Route
                         path="settings/termsAndConditions"
                         element={
                              <>
                                   <PageTitle title="DOG TAG | Terms and Conditions" />
                                   <TermsAndCondition />
                              </>
                         }
                    />
                    <Route
                         path="settings/privacyAndPolicy"
                         element={
                              <>
                                   <PageTitle title="DOGTAG _ADMIN DASHBOARD |privacyAndPolicy " />
                                   <PrivacyAndPolicy />
                              </>
                         }
                    />
                    <Route
                         path="settings/aboutus"
                         element={
                              <>
                                   <PageTitle title="DOGTAG _ADMIN DASHBOARD |AboutUs " />
                                   <AboutUs />
                              </>
                         }
                    />
               </Route>

               {/* Fallback Route */}
               <Route path="*" element={<Navigate to="/auth/signin" />} />
          </Routes>
     );
}

export default Routers;
