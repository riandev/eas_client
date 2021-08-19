import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import aktcl from "../../../images/aktcl.png";
import fifotech from "../../../images/logo_s.png";

const SummaryReport = () => {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    fetch("http://192.168.10.11:5004/territoryCombineReport")
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);

  const grandTarget = summary[0]?.grandSumTarget;
  const grandValidData = summary[0]?.grandSumValidData;
  // const grandLessContacted = summary[0]?.grandSumLessContacted;
  const grandConnectedCall = summary[0]?.grandSumConnectedCall;
  const grandTruelyConnected = summary[0]?.grandSumTruelyConnected;
  const grandNotConnected = summary[0]?.grandSumNotConnected;
  const grandWtgNonSOB = summary[0]?.grandSumWtgNonSOB;
  const grandExtMSB = summary[0]?.grandSumExtMSB;
  const grandFalseContact = summary[0]?.grandSumFalseContact;
  // const grandNoFreeSample = summary[0]?.grandSumNoFreeSample;
  // const grandLessFreeSample = summary[0]?.grandSumLessFreeSample;
  const grandNoAndLessFreeSample = summary[0]?.grandSumNoAndLessFreeSample;
  const grandTeaSnacks = summary[0]?.grandSumTeaSnacks;
  const grandRetaination = summary[0]?.grandSumRetaination;
  // const grandTargetTrueContact = summary[0]?.grandSumTargetTrueContact;
  // const grandExtrapulatedData = summary[0]?.grandSumExtrapulatedData;
  // const grandLessMoreTrueContacted = summary[0]?.grandSumLessMoreTrueContacted;
  // const grandAvgConsumerAmount = summary[0]?.grandAvgConsumerAmount;
  // const grandChargeAmount = summary[0]?.grandSumChargeAmount;
  // let grand = parseFloat(grandChargeAmount).toFixed(2);
  // const grandAvgConsumerCount = summary[0]?.grandAvgConsumerCount;

  return (
    <div className="m-3">
      <div className="d-flex justify-content-between">
        <img className="img-fluid image-design" src={aktcl} alt="" />
        <img className="img-fluid image-design" src={fifotech} alt="" />
      </div>
      <h4 className="text-center">Abdul Khair Tobacco Company Ltd.</h4>
      <h5 className="text-center">Call Center Verification Summary Report</h5>
      <div className="d-flex justify-content-around mt-4">
        <div>
          <h6>Date Of Contact By TMS/TMR: {summary[0]?.dataDate}</h6>
        </div>
        <div>
          <h6>Total Territory Count: {summary.length}</h6>
        </div>
        <div>
          <h6>Date Of Call: {summary[1]?.callDate1}</h6>
        </div>
      </div>
      <div className="text-center mt-3">
        <table className="table bordered table-hover">
          <thead>
            <tr>
              <th className="align-middle">ID</th>
              <th className="align-middle">TERITORY_NAME</th>

              <th className="align-middle">Contact Against Target</th>
              <th className="align-middle">True Contact</th>
              <th className="align-middle">Total False Contact</th>

              <th className="align-middle">
                Not Contacted (Logic:Name not mached, Non smoker, Not contacted,
                Contacted by other Company.)
              </th>
              <th className="align-middle">
                Non SOB (Logic:Rather than Derby, Pilot, Hollywood, Sheikh,
                Royals & MSB)
              </th>

              <th className="align-middle">
                Existing Marise Consumer Contacted
              </th>
              <th className="align-middle">Free sample not Or Less given</th>

              <th className="align-middle">Tea/ Snacks not given</th>
              <th className="align-middle">
                Retaintion (Retaintion/Actual contact)
              </th>
            </tr>
          </thead>
          <tbody>
            {summary.map((query, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{query.territoryName}</td>
                <td>{query.sumDataReceivedPercent + "%"}</td>
                <td>{query.sumTruelyConnectedPercentage + "%"}</td>
                <td>
                  {parseFloat(query.sumFalseContactPercentage).toFixed(2) + "%"}
                </td>
                <td>{query.sumNotContactedPercentage + "%"}</td>
                <td>
                  {parseFloat(query.sumWtgNonSOBPercentage).toFixed(2) + "%"}
                </td>

                <td>
                  {parseFloat(query.sumExtMSBPercentage).toFixed(2) + "%"}
                </td>
                <td>
                  {parseFloat(query.sumNoAndLessFreeSamplePercentage).toFixed(
                    2
                  ) + "%"}
                </td>
                <td>
                  {parseFloat(query.sumTeaSnaksPercentage).toFixed(2) + "%"}
                </td>
                <td>
                  {parseFloat(query.sumRentaintionPercentage).toFixed(2) + "%"}
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
                {((grandValidData / grandTarget) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "yellow" }}>
                {((grandTruelyConnected / grandConnectedCall) * 100).toFixed(
                  2
                ) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "yellow" }}>
                {((grandFalseContact / grandConnectedCall) * 100).toFixed(2) +
                  "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandNotConnected / grandConnectedCall) * 100).toFixed(2) +
                  "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandWtgNonSOB / grandConnectedCall) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandExtMSB / grandConnectedCall) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {(
                  (grandNoAndLessFreeSample / grandConnectedCall) *
                  100
                ).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandTeaSnacks / grandConnectedCall) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((grandRetaination / grandConnectedCall) * 100).toFixed(2) +
                  "%"}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SummaryReport;
