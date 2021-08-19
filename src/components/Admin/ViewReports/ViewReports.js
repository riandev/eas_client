import React from "react";
import { NavLink } from "react-router-dom";

const ViewReports = () => {
  return (
    <div>
      <div>
        <NavLink
          className="btn btn-primary"
          to={{ pathname: "http://192.168.10.11:5004/admin/finalViewTMS" }}
          target="_blank"
        >
          TMR/TMS Report (Combine_All_Minus)
        </NavLink>
      </div>
      <div className="mt-3">
        <NavLink
          className="btn btn-primary"
          to={{
            pathname: "http://192.168.10.11:5004/admin/finalViewTMSCombine",
          }}
          target="_blank"
        >
          TMR/TMS Report (Combine)
        </NavLink>
      </div>
      <div className="mt-3">
        <NavLink
          className="btn btn-primary"
          to={{ pathname: "http://192.168.10.11:5004/admin/finalViewMinus" }}
          target="_blank"
        >
          View Territory Minus Report
        </NavLink>
      </div>
      <div className="mt-3">
        <NavLink
          className="btn btn-primary"
          to={{ pathname: "http://192.168.10.11:5004/admin/finalViewPlus" }}
          target="_blank"
        >
          View Territory Plus Report
        </NavLink>
      </div>
      <div className="mt-3">
        <NavLink
          className="btn btn-primary"
          to={{ pathname: "http://192.168.10.11:5004/admin/finalViewCombine" }}
          target="_blank"
        >
          View Territory Combine Report (Combine_All_Minus)
        </NavLink>
      </div>
      <div className="mt-3">
        <NavLink
          className="btn btn-primary"
          to={{
            pathname: "http://192.168.10.11:5004/admin/finalViewCombineAll",
          }}
          target="_blank"
        >
          View Territory Combine Report (Combine_All)
        </NavLink>
      </div>
      <div className="mt-3">
        <NavLink
          className="btn btn-primary"
          to={{ pathname: "http://192.168.10.11:5004/admin/finalViewSummary" }}
          target="_blank"
        >
          View Territory Summary Report
        </NavLink>
      </div>
    </div>
  );
};

export default ViewReports;
