import React, { useState } from "react";

const ReportBoard = () => {
  const [reportDate, setReportDate] = useState("");
  const manageReportDate = (e) => {
    const d = new Date(e.target.value);
    let dt = d.getDate();
    let mn = d.getMonth();
    mn++;
    let yy = d.getFullYear();
    setReportDate(dt + "/" + mn + "/" + yy);
  };
  const [condition1, setCondition1] = useState([]);
  const [trueContact, setTrueContact] = useState([]);
  const [sob1, setSOB1] = useState([]);
  const [sob2, setSOB2] = useState([]);
  const [extMSB, setextMSB] = useState([]);
  const [notContacted1, setnotContacted1] = useState([]);
  const [notContacted2, setnotContacted2] = useState([]);
  const [notContacted3, setnotContacted3] = useState([]);
  const [notContacted4, setnotContacted4] = useState([]);
  const [finalNotContacted, setFinalNotContacted] = useState([]);
  const [finalPureNotContacted, setFinalPureNotContacted] = useState([]);
  const [falseContact, setFalseContact] = useState([]);
  const [verifyTrueContact, setverifyTrueContact] = useState([]);
  const [noFreeSample, setNoFreeSample] = useState([]);
  const [lessFreeSample, setLessFreeSample] = useState([]);
  const [teaSnaks, setTeaSnaks] = useState([]);
  const [retention, setRetention] = useState([]);

  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [status6, setStatus6] = useState(false);
  const [status7, setStatus7] = useState(false);
  const [status8, setStatus8] = useState(false);
  const [status9, setStatus9] = useState(false);
  const [status10, setStatus10] = useState(false);
  const [status11, setStatus11] = useState(false);
  const [status12, setStatus12] = useState(false);
  const [status13, setStatus13] = useState(false);
  const [status14, setStatus14] = useState(false);
  const [status15, setStatus15] = useState(false);
  const [status16, setStatus16] = useState(false);
  const [status17, setStatus17] = useState(false);
  const [status18, setStatus18] = useState(false);

  console.log(finalPureNotContacted);

  const handleConnected = () => {
    fetch("http://localhost:5004/updateConnectCall?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setCondition1([
          ...data.map((d) => ({
            _id: d._id,
            connectedCall: 1,
          })),
        ])
      );
  };
  const handleCondition1 = () => {
    fetch("http://localhost:5004/update1", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(condition1),
    })
      .then((res) => res.json())
      .then((data) => setStatus1(data));
  };
  const handleTrueContact = () => {
    fetch("http://localhost:5004/getTrueContact?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setTrueContact([...data.map((d) => ({ _id: d._id, trueContact: 1 }))])
      );
  };
  const updateTrueContact = () => {
    fetch("http://localhost:5004/updateTrueContact", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trueContact),
    })
      .then((res) => res.json())
      .then((data) => setStatus2(data));
  };
  const handleSOB1 = () => {
    fetch("http://localhost:5004/nonSOB1?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setSOB1([...data.map((d) => ({ _id: d._id, nonSOB1: 1 }))])
      );
  };
  const updateSOB1 = () => {
    fetch("http://localhost:5004/updatenonSOB1", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sob1),
    })
      .then((res) => res.json())
      .then((data) => setStatus3(data));
  };
  const handleSOB2 = () => {
    fetch("http://localhost:5004/nonSOB2?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setSOB2([...data.map((d) => ({ _id: d._id, nonSOB2_Final: 1 }))])
      );
  };
  const updateSOB2 = () => {
    fetch("http://localhost:5004/updatenonSOB2", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sob2),
    })
      .then((res) => res.json())
      .then((data) => setStatus4(data));
  };
  const handleExtMSB = () => {
    fetch("http://localhost:5004/extMSB?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setextMSB([...data.map((d) => ({ _id: d._id, extMSB: 1 }))])
      );
  };
  const updateExtMSB = () => {
    fetch("http://localhost:5004/updateextMSB", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(extMSB),
    })
      .then((res) => res.json())
      .then((data) => setStatus6(data));
  };
  const handleNotContacted1 = () => {
    fetch("http://localhost:5004/notContacted1?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setnotContacted1([
          ...data.map((d) => ({ _id: d._id, notContacteda: 1 })),
        ])
      );
  };
  const updateNotContacted1 = () => {
    fetch("http://localhost:5004/updateNotContacted1", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notContacted1),
    })
      .then((res) => res.json())
      .then((data) => setStatus7(data));
  };
  const handleNotContacted2 = () => {
    fetch("http://localhost:5004/notContacted2?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setnotContacted2([
          ...data.map((d) => ({ _id: d._id, notContactedb: 1 })),
        ])
      );
  };
  const updateNotContacted2 = () => {
    fetch("http://localhost:5004/updateNotContacted2", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notContacted2),
    })
      .then((res) => res.json())
      .then((data) => setStatus8(data));
  };
  const handleNotContacted3 = () => {
    fetch("http://localhost:5004/notContacted3?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setnotContacted3([
          ...data.map((d) => ({ _id: d._id, notContactedc: 1 })),
        ])
      );
  };
  const updateNotContacted3 = () => {
    fetch("http://localhost:5004/updateNotContacted3", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notContacted3),
    })
      .then((res) => res.json())
      .then((data) => setStatus9(data));
  };
  const handleNotContacted4 = () => {
    fetch("http://localhost:5004/notContacted4?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setnotContacted4([
          ...data.map((d) => ({ _id: d._id, notContactedd: 1 })),
        ])
      );
  };
  const updateNotContacted4 = () => {
    fetch("http://localhost:5004/updateNotContacted4", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notContacted4),
    })
      .then((res) => res.json())
      .then((data) => setStatus10(data));
  };
  const handleNotContacted = () => {
    fetch("http://localhost:5004/finalNotContacted?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setFinalNotContacted([
          ...data.map((d) => ({ _id: d._id, notContacted: 1 })),
        ])
      );
  };
  const updateNotContacted = () => {
    fetch("http://localhost:5004/updateFinalNotContacted", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalNotContacted),
    })
      .then((res) => res.json())
      .then((data) => setStatus11(data));
  };
  const handlePureNotContacted = () => {
    fetch("http://localhost:5004/pureNotContacted?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setFinalPureNotContacted([
          ...data.map((d) => ({ _id: d._id, notContacted: 0 })),
        ])
      );
  };
  const updatePureNotContacted = () => {
    fetch("http://localhost:5004/updateFinalPureNotContacted", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalPureNotContacted),
    })
      .then((res) => res.json())
      .then((data) => setStatus12(data));
  };

  const handleFalseContact = () => {
    fetch("http://localhost:5004/falseContact?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setFalseContact([
          ...data.map((d) => ({ _id: d._id, falseContactFinal: 1 })),
        ])
      );
  };
  const updateFalseContact = () => {
    fetch("http://localhost:5004/updateFalseContact", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(falseContact),
    })
      .then((res) => res.json())
      .then((data) => setStatus13(data));
  };
  const handleVerifyTrueContact = () => {
    fetch("http://localhost:5004/verifyFalseContact?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setverifyTrueContact([
          ...data.map((d) => ({ _id: d._id, trueContact: 0 })),
        ])
      );
  };
  const updateVerifyTrueContact = () => {
    fetch("http://localhost:5004/updateVerifiedTrueContact", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(verifyTrueContact),
    })
      .then((res) => res.json())
      .then((data) => setStatus14(data));
  };
  const handlenoFreeSample = () => {
    fetch("http://localhost:5004/noFreeSample?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setNoFreeSample([...data.map((d) => ({ _id: d._id, noFreeSample: 1 }))])
      );
  };
  const updatenoFreeSample = () => {
    fetch("http://localhost:5004/updateNoFreeSample", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(noFreeSample),
    })
      .then((res) => res.json())
      .then((data) => setStatus15(data));
  };
  const handleLessFreeSample = () => {
    fetch("http://localhost:5004/lessFreeSample?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setLessFreeSample([
          ...data.map((d) => ({ _id: d._id, lessFreeSample: 1 })),
        ])
      );
  };
  const updateLessFreeSample = () => {
    fetch("http://localhost:5004/updateLessFreeSample", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lessFreeSample),
    })
      .then((res) => res.json())
      .then((data) => setStatus16(data));
  };
  const handleTeaSnaks = () => {
    fetch("http://localhost:5004/teaSnaks?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setTeaSnaks([...data.map((d) => ({ _id: d._id, teaSnaks: 1 }))])
      );
  };
  const updateTeaSnaks = () => {
    fetch("http://localhost:5004/updateTeaSnaks", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(teaSnaks),
    })
      .then((res) => res.json())
      .then((data) => setStatus17(data));
  };
  const handleRetention = () => {
    fetch("http://localhost:5004/retention?reportDate=" + reportDate)
      .then((res) => res.json())
      .then((data) =>
        setRetention([...data.map((d) => ({ _id: d._id, retention: 1 }))])
      );
  };
  const updateRetention = () => {
    fetch("http://localhost:5004/updateRetention", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(retention),
    })
      .then((res) => res.json())
      .then((data) => setStatus18(data));
  };
  return (
    <div className="text-center">
      <input
        onChange={manageReportDate}
        className="form-control"
        placeholder="dd/mm/yyyy"
        name="date"
        type="date"
        required
      />
      <div className="card w-75 container mt-2 p-3">
        <h4>Step 1</h4>
        <p>
          Update Status Of Connected Call: {status1 === true && <p>Done</p>}
        </p>
        <div className="d-flex justify-content-around">
          <button className="btn btn-danger" onClick={handleConnected}>
            Generate Connected Call
          </button>
          <h5>{condition1.length > 0 ? "Done" : "Not Done"}</h5>
        </div>
        <br />
        <div className="d-flex justify-content-around">
          <button onClick={handleCondition1} className="btn btn-danger">
            Update Connected Call
          </button>
          <h5>{status1.message === true ? "Done" : "Not Done"}</h5>
        </div>
      </div>
      <div className="card w-75 container mt-2 p-3">
        <div>
          <h4>Step 2</h4>
          <p>Update Status Of True Contact: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handleTrueContact}>
              Generate True Contact
            </button>
            <h5>{trueContact.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updateTrueContact} className="btn btn-danger">
              Update True Contact
            </button>
            <h5>{status2.message === true ? "Done" : "Not Done"}</h5>
          </div>
        </div>
      </div>
      <div className="card w-75 container mt-2 p-3">
        <div>
          <h4>Step 3</h4>
          <p>Update Status Of Update NonSOB1: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handleSOB1}>
              Generate NonSOB1
            </button>
            <h5>{sob1.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updateSOB1} className="btn btn-danger">
              Update NonSOB1
            </button>
            <h5>{status3.message === true ? "Done" : "Not Done"}</h5>
          </div>
        </div>
      </div>
      <div className="card w-75 container mt-2 p-3">
        <div>
          <h4>Step 4</h4>
          <p>Update Status Of Update NonSOB2: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handleSOB2}>
              Generate NonSOB2
            </button>
            <h5>{sob2.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updateSOB2} className="btn btn-danger">
              Update NonSOB2
            </button>
            <h5>{status4.message === true ? "Done" : "Not Done"}</h5>
          </div>
        </div>
      </div>
      <div className="card w-75 container mt-2 p-3">
        <div>
          <h4>Step 5</h4>
          <p>Update Status Of Update Ext MSB: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handleExtMSB}>
              Generate EXT MSB
            </button>
            <h5>{extMSB.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updateExtMSB} className="btn btn-danger">
              Update EXT MSB
            </button>
            <h5>{status6.message === true ? "Done" : "Not Done"}</h5>
          </div>
        </div>
      </div>
      <div className="card w-75 container mt-2 p-3">
        <div>
          <h4>Step 6</h4>
          <p>Update Status Of Update Not Contacted 1: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handleNotContacted1}>
              Generate Not Contacted 1
            </button>
            <h5>{notContacted1.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updateNotContacted1} className="btn btn-danger">
              Update Not Contacted 1
            </button>
            <h5>{status7.message === true ? "Done" : "Not Done"}</h5>
          </div>
          <p>Update Status Of Update Not Contacted 2: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handleNotContacted2}>
              Generate Not Contacted 2
            </button>
            <h5>{notContacted2.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updateNotContacted2} className="btn btn-danger">
              Update Not Contacted 2
            </button>
            <h5>{status8.message === true ? "Done" : "Not Done"}</h5>
          </div>
          <p>Update Status Of Update Not Contacted 3: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handleNotContacted3}>
              Generate Not Contacted 3
            </button>
            <h5>{notContacted3.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updateNotContacted3} className="btn btn-danger">
              Update Not Contacted 3
            </button>
            <h5>{status9.message === true ? "Done" : "Not Done"}</h5>
          </div>

          <p>Update Status Of Update Not Contacted 4: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handleNotContacted4}>
              Generate Not Contacted 4
            </button>
            <h5>{notContacted4.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updateNotContacted4} className="btn btn-danger">
              Update Not Contacted 4
            </button>
            <h5>{status10.message === true ? "Done" : "Not Done"}</h5>
          </div>
          <p>Update Status Of Update Final Not Contacted: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handleNotContacted}>
              Generate Not Contacted
            </button>
            <h5>{finalNotContacted.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updateNotContacted} className="btn btn-danger">
              Update Not Contacted
            </button>
            <h5>{status11.message === true ? "Done" : "Not Done"}</h5>
          </div>

          <p>Update Status Of Update Purefy Not Contacted: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handlePureNotContacted}>
              Generate Pure Not Contacted
            </button>
            <h5>{finalPureNotContacted.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updatePureNotContacted} className="btn btn-danger">
              Update Pure Not Contacted
            </button>
            <h5>{status12.message === true ? "Done" : "Not Done"}</h5>
          </div>
        </div>
      </div>
      <div className="card w-75 container mt-2 p-3">
        <div>
          <h4>Step 7</h4>
          <p>Update Status Of False Contact: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handleFalseContact}>
              Generate False Contact
            </button>
            <h5>{falseContact.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updateFalseContact} className="btn btn-danger">
              Update False Contact
            </button>
            <h5>{status13.message === true ? "Done" : "Not Done"}</h5>
          </div>
        </div>
      </div>
      <div className="card w-75 container mt-2 p-3">
        <div>
          <h4>Step 8</h4>
          <p>Verify True Contact: </p>
          <div className="d-flex justify-content-around">
            <button
              className="btn btn-danger"
              onClick={handleVerifyTrueContact}
            >
              Get True === False
            </button>
            <h5>{verifyTrueContact.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button
              onClick={updateVerifyTrueContact}
              className="btn btn-danger"
            >
              Update True === False
            </button>
            <h5>{status14.message === true ? "Done" : "Not Done"}</h5>
          </div>
        </div>
      </div>
      <div className="card w-75 container mt-2 p-3">
        <div>
          <h4>Step 9</h4>
          <p>Update no Free Sample: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handlenoFreeSample}>
              Get no Free Sample
            </button>
            <h5>{noFreeSample.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updatenoFreeSample} className="btn btn-danger">
              Update no Free Sample
            </button>
            <h5>{status15.message === true ? "Done" : "Not Done"}</h5>
          </div>
        </div>
      </div>
      <div className="card w-75 container mt-2 p-3">
        <div>
          <h4>Step 10</h4>
          <p>Update Less Free Sample: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handleLessFreeSample}>
              Get Less Free Sample
            </button>
            <h5>{lessFreeSample.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updateLessFreeSample} className="btn btn-danger">
              Update Less Free Sample
            </button>
            <h5>{status16.message === true ? "Done" : "Not Done"}</h5>
          </div>
        </div>
      </div>
      <div className="card w-75 container mt-2 p-3">
        <div>
          <h4>Step 11</h4>
          <p>Update teaSnaks: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handleTeaSnaks}>
              Get teaSnaks
            </button>
            <h5>{teaSnaks.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updateTeaSnaks} className="btn btn-danger">
              Update teaSnaks
            </button>
            <h5>{status17.message === true ? "Done" : "Not Done"}</h5>
          </div>
        </div>
      </div>
      <div className="card w-75 container mt-2 p-3">
        <div>
          <h4>Step 12</h4>
          <p>Update retention: </p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={handleRetention}>
              Get retention
            </button>
            <h5>{retention.length > 0 ? "Done" : "Not Done"}</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <button onClick={updateRetention} className="btn btn-danger">
              Update retention
            </button>
            <h5>{status18.message === true ? "Done" : "Not Done"}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportBoard;
