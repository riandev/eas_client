import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { createContext } from "react";
import { useState } from "react";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Reports from "./components/Reports/Reports";
import Qc from "./components/Qc/Qc";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import PrivateRouteAdmin from "./components/Admin/PrivateRouteAdmin/PrivateRouteAdmin";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import AdminSignUp from "./components/Admin/AdminSignUp/AdminSignUp";
import SummaryReport from "./components/Admin/SummaryReport/SummaryReport";
import SplitData from "./components/Admin/SplitData/SplitData";
import ViewTmsTmrReport from "./components/Admin/ViewTmsTmrReport/ViewTmsTmrReport";
import TerritoryMinusReport from "./components/Admin/TerritoryMinusReport/TerritoryMinusReport";
import TerritoryPlusReport from "./components/Admin/TerritoryPlusReport/TerritoryPlusReport";
import TerritoryCombineReport from "./components/Admin/TerritoryCombineReport/TerritoryCombineReport";
import TerritoryCombineReportAll from "./components/Admin/TerritoryCombineReportAll/TerritoryCombineReportAll";
import TmsTmrCombineReport from "./components/Admin/TmsTmrCombineReport/TmsTmrCombineReport";

export const userContext = createContext();
export const adminContext = createContext();

function App() {
  const [loginInfo, setLoginInfo] = useState([]);
  const [adminInfo, setAdminInfo] = useState([]);

  return (
    <adminContext.Provider value={[adminInfo, setAdminInfo]}>
      <userContext.Provider value={[loginInfo, setLoginInfo]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRouteAdmin exact path="/admin/cep">
              <AdminDashboard></AdminDashboard>
            </PrivateRouteAdmin>
            <Route exact path="/admin/uploadLead">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/admin/export">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/admin/delete">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/admin/addLead">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/admin/initialCalculations">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/admin/generateReport">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/admin/viewTmsTmr">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/admin/viewTerritory">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/admin/viewMinusTerritory">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/admin/viewPlusTerritory">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/admin/viewReports">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/admin/finalViewTMS">
              <ViewTmsTmrReport></ViewTmsTmrReport>
            </Route>
            <Route exact path="/admin/finalViewTMSCombine">
              <TmsTmrCombineReport></TmsTmrCombineReport>
            </Route>
            <Route exact path="/admin/finalViewMinus">
              <TerritoryMinusReport></TerritoryMinusReport>
            </Route>
            <Route exact path="/admin/finalViewPlus">
              <TerritoryPlusReport></TerritoryPlusReport>
            </Route>
            <Route exact path="/admin/finalViewCombine">
              <TerritoryCombineReport></TerritoryCombineReport>
            </Route>
            <Route exact path="/admin/finalViewCombineAll">
              <TerritoryCombineReportAll></TerritoryCombineReportAll>
            </Route>
            <Route exact path="/admin/finalViewSummary">
              <SummaryReport></SummaryReport>
            </Route>
            <Route exact path="/admin/viewCombineTerritory">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/admin/viewSummaryReport">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/admin/viewSummaryReportSingle">
              <SummaryReport></SummaryReport>
            </Route>
            <Route exact path="/admin/splitReport">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/admin/login">
              <AdminLogin></AdminLogin>
            </Route>
            <Route exact path="/admin/signup">
              <AdminSignUp></AdminSignUp>
            </Route>
            <Route exact path="/dashboard/crm">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/admin/cep">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route exact path="/dashboard/report">
              <Reports></Reports>
            </Route>
            <Route exact path="/admin/split-data">
              <SplitData></SplitData>
            </Route>
            <Route exact path="/dashboard/qc">
              <Qc></Qc>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </adminContext.Provider>
  );
}

export default App;
