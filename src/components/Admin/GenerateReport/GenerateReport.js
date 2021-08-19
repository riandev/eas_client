import React, { useState } from "react";

const GenerateReport = () => {
  const [status, setStatus] = useState(false);
  const [getTerritoryStatus, setGetTerritoryStatus] = useState(false);
  const [counted, setCounts] = useState([]);
  console.log(counted);

  const handleTms = () => {
    fetch("http://192.168.10.11:5004/analyze_import")
      .then((res) => res.json())
      .then((data) => setStatus(data));
  };
  const getTerritoryData = () => {
    fetch("http://192.168.10.11:5004/reportTable")
      .then((res) => res.json())
      .then((data) => setCounts(data));
  };
  const handleTerritory = () => {
    let allData = counted.map((all) => {
      return {
        userID: all.userId,
        callDate: all.callDate,
        dataDate: all.dataDate,
        userName: all.userName,
        territoryID: all.territoryID,
        consumerNumber: all.consumerNumber,
        territory: all.teritory,
        target: all.target,
        tmContactNo: all.tmContactNo,
        lessContacted: all.target - all.valid_Data_count,
        lessContactPercentage: Math.round(
          ((all.target - all.valid_Data_count) / all.target) * 100
        ),
        dataRecived: all.valid_Data_count,
        dataReceivedPercent: Math.round(
          (all.valid_Data_count / all.target) * 100
        ),
        connectedCall: all.connected_Call_count,
        connectedCallPercentage: Math.round(
          (all.connected_Call_count / all.valid_Data_count) * 100
        ),
        truelyConnected: all.true_Contact_count,
        truelyConnectedPercentage: isNaN(
          Math.round((all.true_Contact_count / all.connected_Call_count) * 100)
        )
          ? 0
          : Math.round(
              (all.true_Contact_count / all.connected_Call_count) * 100
            ),
        notContacted: all.not_Contacted_count,
        notContactedPercentage: isNaN(
          Math.round((all.not_Contacted_count / all.connected_Call_count) * 100)
        )
          ? 0
          : Math.round(
              (all.not_Contacted_count / all.connected_Call_count) * 100
            ),
        wtgNonSOB: all.non_SOB1_count + all.non_SOB2_count,
        wtgNonSOBPercentage: isNaN(
          Math.round(
            ((all.non_SOB1_count + all.non_SOB2_count) /
              all.connected_Call_count) *
              100
          )
        )
          ? 0
          : Math.round(
              ((all.non_SOB1_count + all.non_SOB2_count) /
                all.connected_Call_count) *
                100
            ),
        extMSB: all.ext_MSB_count,
        extMSBPercentage: isNaN(
          Math.round((all.ext_MSB_count / all.connected_Call_count) * 100)
        )
          ? 0
          : Math.round((all.ext_MSB_count / all.connected_Call_count) * 100),
        falseContact: all.false_Contact_count,
        falseContactPercentage: isNaN(
          Math.round((all.false_Contact_count / all.connected_Call_count) * 100)
        )
          ? 0
          : Math.round(
              (all.false_Contact_count / all.connected_Call_count) * 100
            ),
        noFreeSample: all.no_Free_Sample,
        lessFreeSample: all.less_Free_Sample,
        noAndLessFreeSample: all.no_Free_Sample + all.less_Free_Sample,
        noAndLessFreeSamplePercentage: isNaN(
          Math.round(
            ((all.no_Free_Sample + all.less_Free_Sample) /
              all.connected_Call_count) *
              100
          )
        )
          ? 0
          : Math.round(
              ((all.no_Free_Sample + all.less_Free_Sample) /
                all.connected_Call_count) *
                100
            ),
        teaSnacks: all.teaSnaks,
        teaSnaksPercentage: isNaN(
          Math.round((all.teaSnaks / all.connected_Call_count) * 100)
        )
          ? 0
          : Math.round((all.teaSnaks / all.connected_Call_count) * 100),
        rentaintion: all.retention,
        rentaintionPercentage: isNaN(
          Math.round((all.retention / all.connected_Call_count) * 100)
        )
          ? 0
          : Math.round((all.retention / all.connected_Call_count) * 100),
        targetTrueContact: all.targetTrueContact,
        extrapulatedData: isNaN(
          (
            (all.true_Contact_count * all.valid_Data_count) /
            all.connected_Call_count
          ).toFixed(2)
        )
          ? 0.0
          : parseFloat(
              (
                (all.true_Contact_count * all.valid_Data_count) /
                all.connected_Call_count
              ).toFixed(2)
            ),
        extrapulatedPercentage: parseFloat(
          (
            ((all.true_Contact_count * all.valid_Data_count) /
              all.connected_Call_count /
              all.target) *
            100
          ).toFixed(2)
        ),
        LessMoreTrueContacted: isNaN(
          (
            (all.true_Contact_count * all.valid_Data_count) /
              all.connected_Call_count -
            all.targetTrueContact
          ).toFixed(2)
        )
          ? 0
          : parseFloat(
              (
                (all.true_Contact_count * all.valid_Data_count) /
                  all.connected_Call_count -
                all.targetTrueContact
              ).toFixed(2)
            ),
        PerConsumerAverage: parseFloat(all.avgExpense),
        ChargeAmount:
          ((all.true_Contact_count * all.valid_Data_count) /
            all.connected_Call_count -
            all.targetTrueContact) *
          all.avgExpense.toFixed(2),
      };
    });
    fetch("http://192.168.10.11:5004/reportDatas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => setGetTerritoryStatus(data));
  };
  return (
    <div>
      <div>
        <div>
          <h5 className="text-secondary mb-4">
            Click Here to Generate TMS/TMR Report
          </h5>
          <button onClick={handleTms} className="btn btn-primary">
            Generate TMS/TMR Report
          </button>
        </div>
        <div
          style={{ display: status === true ? "block" : "none" }}
          className="mt-4"
        >
          <h3 style={{ color: "green", fontWeight: "bold" }}>
            Congratulations!
          </h3>
          <h5>Successfully TMS/TMR Report generated</h5>
          <p className="text-secondary">
            For View Report Go Report View Section
          </p>
        </div>
      </div>
      <div>
        <div>
          <h5 className="text-secondary mb-4">
            Click Here to Get Territory Data
          </h5>
          <button onClick={getTerritoryData} className="btn btn-primary">
            Get Territory Data
          </button>
        </div>
        <div
          style={{ display: counted.length > 0 ? "block" : "none" }}
          className="mt-4"
        >
          <h3 style={{ color: "green", fontWeight: "bold" }}>
            Congratulations!
          </h3>
          <h5>Successfully Get Territory Data</h5>
          <p className="text-secondary">
            For View Report Go Report View Section
          </p>
        </div>
      </div>
      <div>
        <div>
          <h5 className="text-secondary mb-4">
            Click Here to Generate Territory Report
          </h5>
          <button onClick={handleTerritory} className="btn btn-primary">
            Generate Territory Report
          </button>
        </div>
        <div
          style={{ display: getTerritoryStatus === true ? "block" : "none" }}
          className="mt-4"
        >
          <h3 style={{ color: "green", fontWeight: "bold" }}>
            Congratulations!
          </h3>
          <h5>Successfully Territory Report generated</h5>
          <p className="text-secondary">
            For View Report Go Report View Section
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;
