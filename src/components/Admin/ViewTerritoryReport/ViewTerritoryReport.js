import React, { useEffect, useState } from "react";
import aktcl from "../../../images/aktcl.png";
import fifotech from "../../../images/logo_s.png";

const ViewTerritoryReport = () => {
  const [territoryRport, setTerritoryReport] = useState([]);
  const [tmstmr, setTmstmr] = useState({});
  console.log(tmstmr);
  useEffect(() => {
    fetch("http://localhost:5004/territoryReports")
      .then((res) => res.json())
      .then((data) => setTerritoryReport(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5004/reportTable")
      .then((res) => res.json())
      .then((data) => setTmstmr(data[0]));
  }, []);
  const totalTarget = territoryRport[0]?.grandTarget;
  const totalValid = territoryRport[0]?.grandValiddata;
  const totalLessContact = totalTarget - totalValid;
  const lessConnectedPercentage = Math.round(
    (totalLessContact / totalTarget) * 100
  );
  const validPercentage = Math.round((totalValid / totalTarget) * 100);
  const totalConnected = territoryRport[0]?.grandConnectedCall;
  const connectedPercentage = Math.round((totalConnected / totalValid) * 100);
  const totalTruelyConnected = territoryRport[0]?.grandTrueContact;
  const TruelyConnectedPercentage = Math.round(
    (totalTruelyConnected / totalConnected) * 100
  );
  const totalNotConnected = territoryRport[0]?.grandNotContacted;
  const notConnectedPercentage = Math.round(
    (totalNotConnected / totalConnected) * 100
  );
  const totalwtgnonSOB =
    territoryRport[0]?.grandNonSOB1 + territoryRport[0]?.grandNonSOB2;
  const wtgnonsobPercentage = Math.round(
    (totalwtgnonSOB / totalConnected) * 100
  );
  const totalextMSB = territoryRport[0]?.grandextMSB;
  const extmsbPercentage = Math.round((totalextMSB / totalConnected) * 100);
  const totalFalseContact = territoryRport[0]?.grandFalseContact;
  const falseContactPercentage = Math.round(
    (totalFalseContact / totalConnected) * 100
  );
  const totalnoFreeSample = territoryRport[0]?.grandNoFreeSample;
  const totallessFreeSample = territoryRport[0]?.grandLessFreeSample;
  const totalnoandlessSample = totalnoFreeSample + totallessFreeSample;
  const nolessPercentage = Math.round(
    (totalnoandlessSample / totalConnected) * 100
  );
  const totalTeasnaks = territoryRport[0]?.grandTeaSnaks;
  const teasnaksPercentage = Math.round((totalTeasnaks / totalConnected) * 100);
  const totalretention = territoryRport[0]?.grandRetention;
  const retentionPercentage = Math.round(
    (totalretention / totalConnected) * 100
  );
  const targetTrueContactGrand = territoryRport[0]?.grandTrueTarget;
  const grandAvgTerritoryExpense = territoryRport[0]?.grandAvgTerritoryExpense;
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
            {territoryRport.map((query, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{query.userId}</td>
                <td>{query.sumTarget}</td>

                <td>{query.sumTarget - query.sumValiddata}</td>
                <td>
                  {isNaN(
                    (
                      ((query.sumTarget - query.sumValiddata) /
                        query.sumTarget) *
                      100
                    ).toFixed(2)
                  )
                    ? 0
                    : (
                        ((query.sumTarget - query.sumValiddata) /
                          query.sumTarget) *
                        100
                      ).toFixed(2) + "%"}
                </td>
                <td>{query.sumValiddata}</td>
                <td>
                  {isNaN((query.sumValiddata / query.sumTarget) * 100)
                    ? 0
                    : ((query.sumValiddata / query.sumTarget) * 100).toFixed(
                        2
                      ) + "%"}
                </td>

                <td>{query.sumConnectedCall}</td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumConnectedCall / query.sumValiddata) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumConnectedCall / query.sumValiddata) * 100
                      ) + "%"}
                </td>

                <td>{query.sumTrueContact}</td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumTrueContact / query.sumConnectedCall) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumTrueContact / query.sumConnectedCall) * 100
                      ) + "%"}
                </td>

                <td>{query.sumNotContacted}</td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumNotContacted / query.sumConnectedCall) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumNotContacted / query.sumConnectedCall) * 100
                      ) + "%"}
                </td>

                <td>{query.sumNonSOB1 + query.sumNonSOB2}</td>
                <td>
                  {isNaN(
                    Math.round(
                      ((query.sumNonSOB1 + query.sumNonSOB2) /
                        query.sumConnectedCall) *
                        100
                    )
                  )
                    ? 0
                    : Math.round(
                        ((query.sumNonSOB1 + query.sumNonSOB2) /
                          query.sumConnectedCall) *
                          100
                      ) + "%"}
                </td>
                <td>{query.sumextMSB}</td>
                <td>
                  {isNaN(
                    Math.round((query.sumextMSB / query.sumConnectedCall) * 100)
                  )
                    ? 0
                    : Math.round(
                        (query.sumextMSB / query.sumConnectedCall) * 100
                      ) + "%"}
                </td>
                <td>{query.sumFalseContact}</td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumFalseContact / query.sumConnectedCall) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumFalseContact / query.sumConnectedCall) * 100
                      ) + "%"}
                </td>

                <td>{query.sumNoFreeSample}</td>
                <td>{query.sumLessFreeSample}</td>
                <td>{query.sumNoFreeSample + query.sumLessFreeSample}</td>
                <td>
                  {isNaN(
                    Math.round(
                      ((query.sumNoFreeSample + query.sumLessFreeSample) /
                        query.sumConnectedCall) *
                        100
                    )
                  )
                    ? 0
                    : Math.round(
                        ((query.sumNoFreeSample + query.sumLessFreeSample) /
                          query.sumConnectedCall) *
                          100
                      ) + "%"}
                </td>
                <td>{query.sumTeaSnaks}</td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumTeaSnaks / query.sumConnectedCall) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumTeaSnaks / query.sumConnectedCall) * 100
                      ) + "%"}
                </td>

                <td>{query.sumRetention}</td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumRetention / query.sumConnectedCall) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumRetention / query.sumConnectedCall) * 100
                      ) + "%"}
                </td>
                {/* Sum of Target True Contact */}
                <td>{query.sumTrueTarget}</td>
                {/* ExtraPulated Data */}
                <td>
                  {(
                    (query.sumTrueContact * query.sumValiddata) /
                    query.sumConnectedCall
                  ).toFixed(2)}
                </td>
                {/* Less/More True Contacted */}
                <td>
                  {(
                    (query.sumTrueContact * query.sumValiddata) /
                      query.sumConnectedCall -
                    query.sumTrueTarget
                  ).toFixed(2)}
                </td>
                {/* Per Consumer Average */}
                <td>{query.sumAvgTerritoryExpense.toFixed(2)}</td>
                {/* Charge Amount */}
                <td>
                  {(
                    (query.sumTrueContact * query.sumValiddata) /
                    query.connected_Call_count
                  ).toFixed(2) >= query.targetTrueContact
                    ? ((query.sumTrueContact * query.sumValiddata) /
                        query.sumConnectedCall -
                        query.sumTrueTarget) *
                      query.sumAvgTerritoryExpense *
                      0
                    : (
                        ((query.sumTrueContact * query.sumValiddata) /
                          query.sumConnectedCall -
                          query.sumTrueTarget) *
                        query.sumAvgTerritoryExpense
                      ).toFixed(2)}
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
                {totalTarget}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalLessContact}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {lessConnectedPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalValid}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {validPercentage + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalConnected}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {connectedPercentage + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalTruelyConnected}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "yellow" }}>
                {TruelyConnectedPercentage + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalNotConnected}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {notConnectedPercentage + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalwtgnonSOB}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {wtgnonsobPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalextMSB}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {extmsbPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "yellow" }}>
                {totalFalseContact}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {falseContactPercentage + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalnoFreeSample}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totallessFreeSample}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalnoandlessSample}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {nolessPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalTeasnaks}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {teasnaksPercentage + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalretention}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {retentionPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {targetTrueContactGrand}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {Math.round(
                  (totalTruelyConnected * totalValid) / totalConnected
                )}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {Math.round(
                  (totalTruelyConnected * totalValid) / totalConnected
                ) - targetTrueContactGrand}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {Math.round(grandAvgTerritoryExpense)}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {Math.round(
                  (totalTruelyConnected * totalValid) / totalConnected
                ) >= targetTrueContactGrand
                  ? Math.round(
                      (totalTruelyConnected * totalValid) / totalConnected -
                        targetTrueContactGrand
                    ) *
                    Math.round(grandAvgTerritoryExpense / totalValid) *
                    0
                  : Math.round(
                      (totalTruelyConnected * totalValid) / totalConnected -
                        targetTrueContactGrand
                    ) * Math.round(grandAvgTerritoryExpense / totalValid)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ViewTerritoryReport;
