import React, { useState } from "react";
import aktcl from "../../../images/aktcl.png";
import fifotech from "../../../images/logo_s.png";

const SplitData = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("splitData"))
  );
  const targetSum = data
    .filter((x) => x.target)
    .map((x) => Number(x.target))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const lessContactSum = data
    .filter((x) => x.lessContacted)
    .map((x) => Number(x.lessContacted))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const dataRecivedSum = data
    .filter((x) => x.dataRecived)
    .map((x) => Number(x.dataRecived))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const connectedCallSum = data
    .filter((x) => x.connectedCall)
    .map((x) => Number(x.connectedCall))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const truelyConnectedSum = data
    .filter((x) => x.truelyConnected)
    .map((x) => Number(x.truelyConnected))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const notConnectedSum = data
    .filter((x) => x.notContacted)
    .map((x) => Number(x.notContacted))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const wtgNonSOBSum = data
    .filter((x) => x.wtgNonSOB)
    .map((x) => Number(x.wtgNonSOB))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const extMSBSum = data
    .filter((x) => x.extMSB)
    .map((x) => Number(x.extMSB))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const falseContactSum = data
    .filter((x) => x.falseContact)
    .map((x) => Number(x.falseContact))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const noFreeSampleSum = data
    .filter((x) => x.noFreeSample)
    .map((x) => Number(x.noFreeSample))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const lessFreeSampleSum = data
    .filter((x) => x.lessFreeSample)
    .map((x) => Number(x.lessFreeSample))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const noAndLessFreeSampleSum = data
    .filter((x) => x.noAndLessFreeSample)
    .map((x) => Number(x.noAndLessFreeSample))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const teaSnacksSum = data
    .filter((x) => x.teaSnacks)
    .map((x) => Number(x.teaSnacks))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const rentaintionSum = data
    .filter((x) => x.rentaintion)
    .map((x) => Number(x.rentaintion))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const targetTrueContactSum = data
    .filter((x) => x.targetTrueContact)
    .map((x) => Number(x.targetTrueContact))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const extrapulatedDataSum = data
    .filter((x) => x.extrapulatedData)
    .map((x) => Number(x.extrapulatedData))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const LessMoreTrueContactedSum = data
    .filter((x) => x.LessMoreTrueContacted)
    .map((x) => Number(x.LessMoreTrueContacted))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  const ChargeAmountSum = data
    .filter((x) => x.ChargeAmount < 0)
    .map((x) => Number(x.ChargeAmount))
    .reduce((sum, cv) => (sum += Number(cv)), 0);
  return (
    <div>
      {/* {data[0].ChargeAmount} */}
      <div className="text-center mt-3">
        <div className="d-flex justify-content-between">
          <img className="img-fluid image-design" src={aktcl} alt="" />
          <img className="img-fluid image-design" src={fifotech} alt="" />
        </div>
        <h4 className="text-center">Abdul Khair Tobacco Company Ltd.</h4>
        <h5 className="text-center">Call Center Verification Summary Report</h5>
        <div className="d-flex justify-content-around mt-4">
          <div>
            <h6>Date Of Contact By TMS/TMR: {data[0]?.dataDate}</h6>
          </div>
          <div>
            <h6>Total BR Count: {data.length}</h6>
          </div>
          <div>
            <h6>Date Of Call: {data[1]?.callDate1}</h6>
          </div>
        </div>
        <table className="table bordered table-hover">
          <thead>
            <tr>
              <th className="align-middle">ID</th>
              <th className="align-middle">TMS/TMR User Name</th>
              <th className="align-middle">TMS/TMR Name</th>
              <th className="align-middle">TMS/TMR Mobile No</th>
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
              <th className="align-middle">WTG Non SOB</th>
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
                Extrapulated Data (M*I/K) for Truly contacted Call
              </th>
              <th className="align-middle">
                Extrapulated Data for Truly contacted Call %
              </th>
              <th className="align-middle">
                Less/More truly contacted Call numbers than minimum True
                Contact-15 (AE-AD)
              </th>
              <th className="align-middle">
                Per consumer average Entertainment Expenditure
              </th>
              <th className="align-middle">
                Charged for deficit of minimum True Contact (Tk.)
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((query, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{query.userID}</td>
                <td>{query.userName}</td>
                <td>{query.tmContactNo}</td>
                <td>{query.territory}</td>
                <td>{query.target}</td>
                <td>{query.lessContacted}</td>
                <td>{query.lessContactPercentage + "%"}</td>
                <td>{query.dataRecived}</td>
                <td>{query.dataReceivedPercent + "%"}</td>
                <td>{query.connectedCall}</td>
                <td>{query.connectedCallPercentage + "%"}</td>
                <td>{query.truelyConnected}</td>
                <td>{query.truelyConnectedPercentage + "%"}</td>
                <td>{query.notContacted}</td>
                <td>{query.notContactedPercentage + "%"}</td>
                <td>{query.wtgNonSOB}</td>
                <td>{query.wtgNonSOBPercentage + "%"}</td>
                <td>{query.extMSB}</td>
                <td>{query.extMSBPercentage + "%"}</td>
                <td>{query.falseContact}</td>
                <td>{query.falseContactPercentage + "%"}</td>
                <td>{query.noFreeSample}</td>
                <td>{query.lessFreeSample}</td>
                <td>{query.noAndLessFreeSample}</td>
                <td>{query.noAndLessFreeSamplePercentage + "%"}</td>
                <td>{query.teaSnacks}</td>
                <td>{query.teaSnaksPercentage + "%"}</td>
                <td>{query.rentaintion}</td>
                <td>{query.rentaintionPercentage + "%"}</td>
                <td>{query.targetTrueContact}</td>
                <td>{query.extrapulatedData}</td>
                <td>{query.extrapulatedPercentage + "%"}</td>
                <td>{query.LessMoreTrueContacted}</td>
                <td>{query.PerConsumerAverage}</td>
                <td>
                  {parseFloat(query.ChargeAmount).toFixed(2) > 0
                    ? 0
                    : parseFloat(query.ChargeAmount).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                colspan="5"
              >
                Total
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {targetSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {lessContactSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((lessContactSum / targetSum) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {dataRecivedSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((dataRecivedSum / targetSum) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {connectedCallSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((connectedCallSum / dataRecivedSum) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {truelyConnectedSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((truelyConnectedSum / connectedCallSum) * 100).toFixed(2) +
                  "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {notConnectedSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((notConnectedSum / connectedCallSum) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {wtgNonSOBSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((wtgNonSOBSum / connectedCallSum) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {extMSBSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((extMSBSum / connectedCallSum) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {falseContactSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((falseContactSum / connectedCallSum) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {noFreeSampleSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {lessFreeSampleSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {noAndLessFreeSampleSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((noAndLessFreeSampleSum / connectedCallSum) * 100).toFixed(
                  2
                ) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {teaSnacksSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((teaSnacksSum / connectedCallSum) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {rentaintionSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((rentaintionSum / connectedCallSum) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {targetTrueContactSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {parseFloat(extrapulatedDataSum).toFixed(2)}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {((extrapulatedDataSum / targetSum) * 100).toFixed(2) + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {LessMoreTrueContactedSum}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {"-"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {parseFloat(ChargeAmountSum).toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SplitData;
