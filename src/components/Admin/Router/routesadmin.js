import React from "react";
import Qc from "../../Qc/Qc";
import Reports from "../../Reports/Reports";
import GenerateReport from "../GenerateReport/GenerateReport";
import LeadGenerate from "../LeadGenerate/LeadGenerate";
import ReportBoard from "../ReportBoard/ReportBoard";
import TerritorySplit from "../TerritorySplit/TerritorySplit";
import UploadLead from "../UploadLead/UploadLead";
import ViewReports from "../ViewReports/ViewReports";
import DeleteLeads from "./../DeleteLeads/DeleteLeads";

const routesadmin = [
  {
    path: "/admin/uploadLead",
    exact: true,
    name: "Upload Lead",
    toolbar: () => <p>Upload Lead For Call</p>,
    main: () => <UploadLead />,
  },
  {
    path: "/admin/cep",
    exact: true,
    name: "Call QC",
    toolbar: () => <p>Call QC</p>,
    main: () => <Qc />,
  },
  {
    path: "/admin/export",
    exact: true,
    name: "Export CRM",
    toolbar: () => <p>Export Survey</p>,
    main: () => <Reports />,
  },
  {
    path: "/admin/delete",
    exact: true,
    name: "Delete Lead",
    toolbar: () => <p>Delete All Lead</p>,
    main: () => <DeleteLeads />,
  },
  {
    path: "/admin/addLead",
    exact: true,
    name: "Generate Lead",
    toolbar: () => <p>Delete All Lead</p>,
    main: () => <LeadGenerate />,
  },
  {
    path: "/admin/initialCalculations",
    exact: true,
    name: "Initial Calculation",
    toolbar: () => <p>Initial Calculation</p>,
    main: () => <ReportBoard />,
  },
  {
    path: "/admin/generateReport",
    exact: true,
    name: "Generate Report",
    toolbar: () => <p>Generate Report</p>,
    main: () => <GenerateReport />,
  },
  {
    path: "/admin/viewReports",
    exact: true,
    name: "View Reports",
    toolbar: () => <p>View Reports</p>,
    main: () => <ViewReports />,
  },
  // {
  //   path: "/admin/viewTmsTmr",
  //   exact: true,
  //   name: "View TMS/TMR Report",
  //   toolbar: () => <p>View TMS/TMR Report</p>,
  //   main: () => <ViewTmsTmrReport />,
  // },
  // {
  //   path: "/admin/viewTerritory",
  //   exact: true,
  //   name: "View Territory Report",
  //   toolbar: () => <p>View Territory Report</p>,
  //   main: () => <ViewTerritoryReport />,
  // },
  // {
  //   path: "/admin/viewMinusTerritory",
  //   exact: true,
  //   name: "View Territory Minus Report",
  //   toolbar: () => <p>View Territory Minus Report</p>,
  //   main: () => <TerritoryMinusReport />,
  // },
  // {
  //   path: "/admin/viewPlusTerritory",
  //   exact: true,
  //   name: "View Territory Plus Report",
  //   toolbar: () => <p>View Territory Plus Report</p>,
  //   main: () => <TerritoryPlusReport />,
  // },
  // {
  //   path: "/admin/viewCombineTerritory",
  //   exact: true,
  //   name: "View Territory Combine Report",
  //   toolbar: () => <p>View Territory Combine Report</p>,
  //   main: () => <TerritoryCombineReport />,
  // },
  // {
  //   path: "/admin/viewSummaryReport",
  //   exact: true,
  //   name: "View Territory Summary Report",
  //   toolbar: () => <p>View Territory Summary Report</p>,
  //   main: () => <SummaryReport />,
  // },
  {
    path: "/admin/splitReport",
    exact: true,
    name: "View Territory Split Report",
    toolbar: () => <p>View Territory Split Report</p>,
    main: () => <TerritorySplit />,
  },
];

export default routesadmin;
