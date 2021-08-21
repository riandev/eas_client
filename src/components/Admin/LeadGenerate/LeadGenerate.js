import React, { useState } from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import { CSVLink } from "react-csv";

const LeadGenerate = () => {
  const [initialLeads, setInitialLeads] = useState([]);
  console.log(initialLeads);
  const [regenerate, setRegenerate] = useState([]);

  const [initialUpdateStatus, setInitialUpdateStatus] = useState(false);
  const [regenerateUpdateStatus, setRegenerateUpdateStatus] = useState(false);

  const [initialDate, setInitialDate] = useState("");
  const [regenDate, setRegenDate] = useState("");

  const [leadName, setLeadName] = useState(null);
  const [leadId, setLeadId] = useState(null);
  const [isActive, setIsActive] = useState(null);

  const [regenleadName, setRegenLeadName] = useState(null);
  const [regenleadId, setRegenLeadId] = useState(null);
  const [regenisActive, setRegenIsActive] = useState(null);

  // const [createStatus, setCreateStatus] = useState(false);
  // const [createStatusReg, setCreateStatusReg] = useState(false);

  // const [dialerUpdateStatus, setdialerUpdate] = useState(false);
  // const [dialerRegenUpdateStatus, setdialerRegnUpdate] = useState(false);

  const manageInitialDate = (e) => {
    const d = new Date(e.target.value);
    let dt = d.getDate();
    let mn = d.getMonth();
    mn++;
    let yy = d.getFullYear();
    setInitialDate(dt + "/" + mn + "/" + yy);
  };

  const manageRegenDate = (e) => {
    const d = new Date(e.target.value);
    let dt = d.getDate();
    let mn = d.getMonth();
    mn++;
    let yy = d.getFullYear();
    setRegenDate(dt + "/" + mn + "/" + yy);
  };

  const generateInitial = () => {
    fetch("http://localhost:5004/initialLead?initDate=" + initialDate)
      .then((res) => res.json())
      .then((data) => {
        setInitialLeads(
          data
            .map((x) => {
              return [...x.initLeads];
            })
            .flat()
            .map((a) => {
              return { ...a, for_d: "d" };
            })
        );
      });
  };

  let headers = [
    { label: "DIID", key: "diid" },
    { label: "data_date", key: "data_date" },
    { label: "r_name", key: "r_name" },
    { label: "Consumer_No", key: "Consumer_No" },
  ];

  // const handleCRM = () => {
  //   initialLeads.forEach((element) => {
  //     fetch(
  //       `http://192.168.1.70/vicidial/non_agent_api.php?source=test&user=admin&pass=F1f0t3ch&function=add_lead&phone_number=${element.Consumer_No}&phone_code=1&list_id=${leadId}&dnc_check=N&first_name=${element.r_name}&last_name=$l_name&address1=${element.data_date}&postal_code=${element.diid}&comments=sample`,
  //       {
  //         headers: { "Access-Control-Allow-Origin": "*" },
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //     setdialerUpdate(true);
  //   });
  // };

  // const handleRegenCRM = () => {
  //   regenerate.forEach((element) => {
  //     fetch(
  //       `http://192.168.1.70/vicidial/non_agent_api.php?source=test&user=admin&pass=F1f0t3ch&function=add_lead&phone_number=${element.Consumer_No}&phone_code=1&list_id=${regenleadId}&dnc_check=N&first_name=${element.r_name}&last_name=$l_name&address1=${element.data_date}&postal_code=${element.diid}&comments=sample`,
  //       {
  //         headers: { "Access-Control-Allow-Origin": "*" },
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   });
  //   setdialerRegnUpdate(true);
  // };

  const updateInitialLeads = () => {
    fetch("http://localhost:5004/updateInitialLead", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(initialLeads),
    })
      .then((res) => res.json())
      .then((data) => setInitialUpdateStatus(data));
  };

  const regenerateLeads = () => {
    fetch("http://localhost:5004/regenerate?regenDate=" + regenDate)
      .then((res) => res.json())
      .then((data) => {
        setRegenerate(
          data
            .map((x) => {
              return [...x.newLead];
            })
            .flat()
            .map((a) => {
              return { ...a, for_d: "d" };
            })
        );
      });
  };

  const regenerateUpdate = () => {
    fetch("http://localhost:5004/regenerateUpdate", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(regenerate),
    })
      .then((res) => res.json())
      .then((data) => setRegenerateUpdateStatus(data));
  };

  // const leadListName = (e) => {
  //   setLeadName(e.target.value);
  // };
  // const leadListId = (e) => {
  //   setLeadId(e.target.value);
  // };
  // const LeadActiveStatus = (e) => {
  //   setIsActive(e.target.value);
  // };

  // const RegenleadListName = (e) => {
  //   setRegenLeadName(e.target.value);
  // };
  // const RegenleadListId = (e) => {
  //   setRegenLeadId(e.target.value);
  // };
  // const RegenLeadActiveStatus = (e) => {
  //   setRegenIsActive(e.target.value);
  // };

  // const createList = () => {
  //   fetch(
  //     `http://192.168.1.70/vicidial/non_agent_api.php?source=test&function=add_list&user=admin&pass=F1f0t3ch&list_id=${leadId}&list_name=${leadName}&campaign_id=13_AKTCL&active=${isActive}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  //   setCreateStatus(true);
  // };

  // const createRegenList = () => {
  //   fetch(
  //     `http://192.168.1.70/vicidial/non_agent_api.php?source=test&function=add_list&user=admin&pass=F1f0t3ch&list_id=${regenleadId}&list_name=${regenleadName}&campaign_id=13_AKTCL&active=${regenisActive}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  //   setCreateStatusReg(true);
  // };

  return (
    <div className="d-flex justify-content-around">
      <div>
        <h4 className="text-secondary">Process For Initial Lead</h4>
        <div className="mt-2">
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              {/* <div className="d-flex justify-content-between">
                <h4 className="text-secondary">Create Lead List</h4>
                <p style={{ color: createStatus === true ? "green" : "red" }}>
                  {createStatus === true ? "Done" : "Pending"}
                </p>
              </div>
              <input
                onChange={leadListName}
                className="form-control"
                placeholder="Lead List Name"
                type="text"
                required
              />
              <input
                onChange={leadListId}
                className="form-control mt-1"
                placeholder="Lead List ID"
                type="number"
                required
              />
              <div>
                <h4 className="text-secondary mt-2">Is Active?</h4>
                <Form.Group onChange={LeadActiveStatus} as={Row}>
                  <Form.Control as="select" className="w-50 ml-3">
                    <option>...</option>
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                  </Form.Control>
                </Form.Group>
              </div> */}
              {/* <button onClick={createList} className="btn btn-success">
                Create Lead
              </button> */}
              <h5 className="mt-3">Generate Initial Leads</h5>
              <input
                onChange={manageInitialDate}
                className="form-control"
                placeholder="dd/mm/yyyy"
                name="date"
                type="date"
                required
              />
              <div className="mt-3 d-flex justify-content-between">
                <button onClick={generateInitial} className="btn btn-primary">
                  Generate
                </button>
                <p style={{ color: initialLeads.length > 0 ? "green" : "red" }}>
                  {initialLeads.length > 0 ? "Done" : "Pending"}
                </p>
              </div>
              <h5 className="mt-3">Update Initial Leads For CRM</h5>
              <div
                onClick={updateInitialLeads}
                className="mt-3 d-flex justify-content-between"
              >
                <button className="btn btn-info">Update</button>
                <p
                  style={{
                    color:
                      initialUpdateStatus.message === true ? "green" : "red",
                  }}
                >
                  {initialUpdateStatus.message === true ? "Done" : "Pending"}
                </p>
              </div>
              <h5 className="mt-3">Download Initial Leads For Dialer</h5>
              <div className="mt-3 d-flex justify-content-between">
                <button className="btn btn-outline-primary">
                  <CSVLink
                    headers={headers}
                    title="Export data to CSV"
                    filename="AKTCL_EAS_InitialLead.csv"
                    data={initialLeads}
                  >
                    Download
                  </CSVLink>
                </button>
                <p style={{ color: initialLeads.length > 0 ? "green" : "red" }}>
                  {initialLeads.length > 0 ? "Ready" : "Pending"}
                </p>
                {/* <button onClick={handleCRM} className="btn btn-outline-primary">
                  Dialer Update
                </button>
                <p
                  style={{
                    color: dialerUpdateStatus === true ? "green" : "red",
                  }}
                >
                  {dialerUpdateStatus === true ? "Ready" : "Pending"}
                </p> */}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* Regenerate Leads */}
      <div>
        <h4 className="text-secondary">Process For Regenerate Lead</h4>
        <div className="mt-2">
          <Card style={{ width: "28rem" }}>
            <Card.Body>
              {/* <div className="d-flex justify-content-between"> */}
              {/* <h4 className="text-secondary">Create Regen Lead List</h4>
                <p
                  style={{ color: createStatusReg === true ? "green" : "red" }}
                >
                  {createStatusReg === true ? "Done" : "Pending"}
                </p>
              </div>
              <input
                onChange={RegenleadListName}
                className="form-control"
                placeholder="Lead List Name"
                type="text"
                required
              />
              <input
                onChange={RegenleadListId}
                className="form-control mt-1"
                placeholder="Lead List ID"
                type="number"
                required
              />
              <div>
                <h4 className="text-secondary mt-2">Is Active?</h4>
                <Form.Group onChange={RegenLeadActiveStatus} as={Row}>
                  <Form.Control as="select" className="w-50 ml-3">
                    <option>...</option>
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <button onClick={createRegenList} className="btn btn-success">
                Create Regen Lead
              </button> */}
              <h5 className="mt-3">Regenerate Leads</h5>
              <input
                onChange={manageRegenDate}
                className="form-control"
                placeholder="dd/mm/yyyy"
                name="date"
                type="date"
                required
              />
              <div className="mt-3 d-flex justify-content-between">
                <button onClick={regenerateLeads} className="btn btn-primary">
                  Regenerate
                </button>
                <p style={{ color: regenerate.length > 0 ? "green" : "red" }}>
                  {regenerate.length > 0 ? "Done" : "Pending"}
                </p>
              </div>
              <h5 className="mt-3">Update Regenerated Leads For CRM</h5>
              <div className="mt-3 d-flex justify-content-between">
                <button onClick={regenerateUpdate} className="btn btn-info">
                  Update
                </button>
                <p
                  style={{
                    color:
                      regenerateUpdateStatus.message === true ? "green" : "red",
                  }}
                >
                  {regenerateUpdateStatus.message === true ? "Done" : "Pending"}
                </p>
              </div>
              <h5 className="mt-3">Download Regenerated Leads For Dialer</h5>
              <div className="mt-3 d-flex justify-content-between">
                {/* <button
                  onClick={handleRegenCRM}
                  className="btn btn-outline-primary"
                >
                  Dialer Update
                </button> */}
                {/* <div className="mt-3 d-flex justify-content-between"> */}
                <button className="btn btn-outline-primary">
                  <CSVLink
                    headers={headers}
                    title="Export data to CSV"
                    filename="AKTCL_EAS_regenerateLead.csv"
                    data={regenerate}
                  >
                    Download
                  </CSVLink>
                </button>
                <p style={{ color: regenerate.length > 0 ? "green" : "red" }}>
                  {regenerate.length > 0 ? "Ready" : "Pending"}
                </p>
                {/* </div> */}
                {/* <p
                  style={{
                    color: dialerRegenUpdateStatus === true ? "green" : "red",
                  }}
                >
                  {dialerRegenUpdateStatus === true ? "Ready" : "Pending"}
                </p> */}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LeadGenerate;
