import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import aktcl from "../../../images/aktcl.png";
import fifotech from "../../../images/logo_s.png";

const TerritoryCombineReport = () => {
  const [combineTerritory, setCombineTerritory] = useState([]);
  const [minusTerritory, setMinusTerritory] = useState([]);
  useEffect(() => {
    fetch("http://192.168.10.11:5004/territoryCombineReport")
      .then((res) => res.json())
      .then((data) => setCombineTerritory(data));
  }, []);
  useEffect(() => {
    fetch("http://192.168.10.11:5004/territoryMinusReport")
      .then((res) => res.json())
      .then((data) => setMinusTerritory(data));
  }, []);

  const grandChargeAmount = minusTerritory[0]?.grandSumChargeAmount;
  let grand = parseFloat(grandChargeAmount).toFixed(2);

  const grandTarget = combineTerritory[0]?.grandSumTarget;
  const grandValidData = combineTerritory[0]?.grandSumValidData;
  const grandLessContacted = combineTerritory[0]?.grandSumLessContacted;
  const grandConnectedCall = combineTerritory[0]?.grandSumConnectedCall;
  const grandTruelyConnected = combineTerritory[0]?.grandSumTruelyConnected;
  const grandNotConnected = combineTerritory[0]?.grandSumNotConnected;
  const grandWtgNonSOB = combineTerritory[0]?.grandSumWtgNonSOB;
  const grandExtMSB = combineTerritory[0]?.grandSumExtMSB;
  const grandFalseContact = combineTerritory[0]?.grandSumFalseContact;
  const grandNoFreeSample = combineTerritory[0]?.grandSumNoFreeSample;
  const grandLessFreeSample = combineTerritory[0]?.grandSumLessFreeSample;
  const grandNoAndLessFreeSample =
    combineTerritory[0]?.grandSumNoAndLessFreeSample;
  const grandTeaSnacks = combineTerritory[0]?.grandSumTeaSnacks;
  const grandRetaination = combineTerritory[0]?.grandSumRetaination;
  const grandTargetTrueContact = combineTerritory[0]?.grandSumTargetTrueContact;
  const grandExtrapulatedData = combineTerritory[0]?.grandSumExtrapulatedData;
  const grandLessMoreTrueContacted =
    combineTerritory[0]?.grandSumLessMoreTrueContacted;
  const grandAvgConsumerAmount = combineTerritory[0]?.grandAvgConsumerAmount;
  // const grandChargeAmount = combineTerritory[0]?.grandSumChargeAmount;
  // let grand = parseFloat(grandChargeAmount).toFixed(2);
  const grandAvgConsumerCount = combineTerritory[0]?.grandAvgConsumerCount;
  return (
    <div className="m-3">
      <div className="d-flex justify-content-between">
        <img className="img-fluid image-design" src={aktcl} alt="" />
        <img className="img-fluid image-design" src={fifotech} alt="" />
      </div>
      <h4 className="text-center">Abdul Khair Tobacco Company Ltd.</h4>
      <h5 className="text-center mb-4">
        Call Center Verification Territory Report
      </h5>
      <div className="text-center">
        <table className="table bordered table-hover">
          <thead>
            <tr>
              <th
                Style="color:blue;"
                className="text-center"
                colspan="2"
                scope="colgroup"
              >
                Territory Information
              </th>
              <th
                colspan="5"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Data Info
              </th>
              <th
                colspan="2"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Connected Call
              </th>
              <th
                colspan="2"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Truly Contacted
              </th>
              <th
                colspan="8"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                False Contact
              </th>
              <th
                colspan="6"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Entertainment
              </th>
              <th
                colspan="2"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Retaintion
              </th>

              <th
                colspan="1"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Minimum True Contact
              </th>

              <th
                colspan="2"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Actual true contact (Based on call center report)
              </th>
            </tr>
            <tr>
              <th className="align-middle">ID</th>
              <th className="align-middle">TERITORY_NAME</th>

              <th className="align-middle">Target</th>
              <th className="align-middle">Less/More contacted</th>
              <th className="align-middle">%</th>
              <th className="align-middle">Data Received</th>
              <th className="align-middle">%</th>

              <th className="align-middle">Connected Call</th>
              <th className="align-middle">%</th>

              <th className="align-middle">Truly Contacted</th>
              <th className="align-middle">%</th>

              <th className="align-middle">Not Contacted</th>
              <th className="align-middle">%</th>

              <th className="align-middle">Non SOB</th>
              <th className="align-middle">%</th>
              <th className="align-middle">
                Existing Marise consumer contacted
              </th>
              <th className="align-middle">%</th>
              <th className="align-middle">Total False Contact</th>
              <th className="align-middle">%</th>

              <th className="align-middle">No Free Sample</th>
              <th className="align-middle">Less Free sample</th>
              <th className="align-middle">No and less Free Sample Given</th>
              <th className="align-middle">%</th>
              <th className="align-middle">Tea/ Snacks not given</th>
              <th className="align-middle">%</th>

              <th className="align-middle">Retaintion</th>
              <th className="align-middle">%</th>

              <th className="align-middle">Numbers of Truly contacted Call</th>

              <th className="align-middle">
                Extrapulated Data (L*H/J) for Truly contacted Call
              </th>
              <th className="align-middle">Extrapulated %</th>
              <th className="align-middle">
                Less/More truly contacted Call numbers than minimum True
                Contact-15 (AE-AD)
              </th>

              <th className="align-middle">
                Per consumer average Entertainment Expenditure
              </th>
              <th className="align-middle">
                Charged for deficit of minimum True Contact (Tk.) (AG*AF)
              </th>
            </tr>
          </thead>
          <tbody>
            {combineTerritory.map((query, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{query.territoryName}</td>
                <td>{query.sumTarget}</td>

                <td>{query.sumLessContacted}</td>
                <td>{query.sumlessContactPercentage.toFixed(2) + "%"}</td>
                <td>{query.sumValidData}</td>
                <td>{query.sumDataReceivedPercent + "%"}</td>

                <td>{query.sumConnectedCall}</td>
                <td>{query.sumConnectedCallPercentage + "%"}</td>

                <td>{query.sumTruelyConnected}</td>
                <td>{query.sumTruelyConnectedPercentage + "%"}</td>

                <td>{query.sumNotConnected}</td>
                <td>{query.sumNotContactedPercentage + "%"}</td>

                <td>{query.sumWtgNonSOB}</td>
                <td>{query.sumWtgNonSOBPercentage.toFixed(2) + "%"}</td>
                <td>{query.sumExtMSB}</td>
                <td>{query.sumExtMSBPercentage.toFixed(2) + "%"}</td>
                <td>{query.sumFalseContact}</td>
                <td>{query.sumFalseContactPercentage.toFixed(2) + "%"}</td>

                <td>{query.sumNoFreeSample}</td>
                <td>{query.sumLessFreeSample}</td>
                <td>{query.sumNoAndLessFreeSample}</td>
                <td>
                  {query.sumNoAndLessFreeSamplePercentage.toFixed(2) + "%"}
                </td>
                <td>{query.sumTeaSnacks}</td>
                <td>{query.sumTeaSnaksPercentage.toFixed(2) + "%"}</td>

                <td>{query.sumRetaination}</td>
                <td>{query.sumRentaintionPercentage.toFixed(2) + "%"}</td>
                {/* Sum of Target True Contact */}
                <td>{query.sumTargetTrueContact}</td>
                {/* ExtraPulated Data */}
                <td>{query.sumExtrapulatedData.toFixed(2)}</td>
                <td>{query.sumExtrapulatedPercentage.toFixed(2)}</td>
                {/* Less/More True Contacted */}
                <td>{query.sumLessMoreTrueContacted.toFixed(2)}</td>
                {/* Per Consumer Average */}
                <td>{query.avgConsumerAmount.toFixed(2)}</td>
                {/* Charge Amount */}
                <td>
                  {query.sumChargeAmount.toFixed(2) > 0
                    ? 0
                    : query.sumChargeAmount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                colspan="2"
              >
                Total
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grandTarget}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grandLessContacted}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandLessContacted / grandTarget) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grandValidData}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandValidData / grandTarget) * 100).toFixed(2) + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grandConnectedCall}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandConnectedCall / grandValidData) * 100).toFixed(2) + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grandTruelyConnected}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "yellow" }}>
                {((grandTruelyConnected / grandConnectedCall) * 100).toFixed(
                  2
                ) + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grandNotConnected}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandNotConnected / grandConnectedCall) * 100).toFixed(2) +
                  "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grandWtgNonSOB}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandWtgNonSOB / grandConnectedCall) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grandExtMSB}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandExtMSB / grandConnectedCall) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "yellow" }}>
                {grandFalseContact}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandFalseContact / grandConnectedCall) * 100).toFixed(2) +
                  "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grandNoFreeSample}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grandLessFreeSample}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grandNoAndLessFreeSample}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {(
                  (grandNoAndLessFreeSample / grandConnectedCall) *
                  100
                ).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grandTeaSnacks}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandTeaSnacks / grandConnectedCall) * 100).toFixed(2) + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grandRetaination}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandRetaination / grandConnectedCall) * 100).toFixed(2) +
                  "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grandTargetTrueContact}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {parseFloat(grandExtrapulatedData).toFixed(2)}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandExtrapulatedData / grandTarget) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {"-"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {"-"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {grand}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TerritoryCombineReport;
