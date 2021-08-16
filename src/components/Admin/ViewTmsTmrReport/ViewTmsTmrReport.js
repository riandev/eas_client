import React, { useEffect, useState } from "react";
import aktcl from "../../../images/aktcl.png";
import fifotech from "../../../images/logo_s.png";
import "./ViewTmsTmrReport.css";

const ViewTmsTmrReport = () => {
  const [counted, setCounts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5004/reportTable")
      .then((res) => res.json())
      .then((data) => setCounts(data));
  }, []);
  const totalTarget = counted[0]?.target * counted.length;
  const totalValid = counted[0]?.valid_total;
  const totalLessContact = totalTarget - totalValid;
  const lessConnectedPercentage = Math.round(
    (totalLessContact / totalTarget) * 100
  );
  const validPercentage = Math.round((totalValid / totalTarget) * 100);
  const totalConnected = counted[0]?.connected_total;
  const connectedPercentage = Math.round((totalConnected / totalValid) * 100);
  const totalTruelyConnected = counted[0]?.true_total;
  const TruelyConnectedPercentage = Math.round(
    (totalTruelyConnected / totalConnected) * 100
  );
  const totalNotConnected = counted[0]?.notConnected_total;
  const notConnectedPercentage = Math.round(
    (totalNotConnected / totalConnected) * 100
  );
  const nonSOB1 = counted[0]?.noSOB1_total;
  const nonSOB2 = counted[0]?.nonSOB2_total;
  const totalwtgnonSOB = nonSOB1 + nonSOB2;
  console.log(nonSOB1, nonSOB2);
  const wtgnonsobPercentage = Math.round(
    (totalwtgnonSOB / totalConnected) * 100
  );
  const totalextMSB = counted[0]?.extMSB_total;
  const extmsbPercentage = Math.round((totalextMSB / totalConnected) * 100);
  const totalFalseContact = counted[0]?.falseContact_total;
  const falseContactPercentage = Math.round(
    (totalFalseContact / totalConnected) * 100
  );
  const totalnoFreeSample = counted[0]?.noFreeSample_total;
  const totallessFreeSample = counted[0]?.lessFreeSample_total;
  const totalnoandlessSample = totalnoFreeSample + totallessFreeSample;
  const nolessPercentage = Math.round(
    (totalnoandlessSample / totalConnected) * 100
  );
  const totalTeasnaks = counted[0]?.teaSnaks_total;
  const teasnaksPercentage = Math.round((totalTeasnaks / totalConnected) * 100);
  const totalretention = counted[0]?.retention_total;
  const retentionPercentage = Math.round(
    (totalretention / totalConnected) * 100
  );
  const targetTrueContactTotal = counted[0]?.targetTrueContact * counted.length;
  const perConsumeravgTotal = counted[0]?.grandAvgExpense;
  const sumResult = counted
    .map((d) =>
      (d.true_Contact_count * d.valid_Data_count) / d.connected_Call_count >=
      d.targetTrueContact
        ? ((d.true_Contact_count * d.valid_Data_count) /
            d.connected_Call_count -
            d.targetTrueContact) *
          d.avgExpense *
          0
        : ((d.true_Contact_count * d.valid_Data_count) /
            d.connected_Call_count -
            d.targetTrueContact) *
          d.avgExpense
    )
    .reduce((sum, cv) => (sum += Number(cv)), 0)
    .toFixed(2);
  console.log(sumResult);
  const generateTerritory = () => {
    counted.map((all) => {
      let allData = {
        userID: all.userId,
        userName: all.userName,
        territory: all.teritory,
        target: all.target,
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
      return console.log(allData);
    });
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={generateTerritory}>
        Generare Territory Report
      </button>
      <div className="m-3">
        <div className="d-flex justify-content-between">
          <img className="img-fluid image-design" src={aktcl} alt="" />
          <img className="img-fluid image-design" src={fifotech} alt="" />
        </div>
        <h4 className="text-center">Abdul Khair Tobacco Company Ltd.</h4>
        <h5 className="text-center mb-4">
          Call Center Verification TMS/TMR Report
        </h5>
        <div className="text-center">
          <table className="table bordered table-hover">
            <thead>
              <tr>
                <th
                  Style="color:blue;"
                  className="text-center"
                  colspan="5"
                  scope="colgroup"
                >
                  TMS and TMR Information
                </th>
                <th
                  colspan="4"
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
                  colspan="2"
                  scope="colgroup"
                  Style="color:blue;"
                  className="text-center"
                >
                  Not Contacted
                </th>
                <th
                  colspan="6"
                  scope="colgroup"
                  Style="color:blue;"
                  className="text-center"
                >
                  Wrong TG
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
                <th className="align-middle">TMS/TMR User Name</th>
                <th className="align-middle">TMS/TMR Name</th>
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

                <th className="align-middle">
                  Numbers of Truly contacted Call
                </th>

                <th className="align-middle">
                  Extrapulated Data (L*H/J) for Truly contacted Call
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
              {counted.map((query, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{query.userId}</td>
                  <td>{query.userName}</td>
                  <td>{query.teritory}</td>
                  <td>{query.target}</td>

                  <td>{query.target - query.valid_Data_count}</td>
                  <td>
                    {Math.round(
                      ((query.target - query.valid_Data_count) / query.target) *
                        100
                    ) + "%"}
                  </td>
                  <td>{query.valid_Data_count}</td>
                  <td>
                    {Math.round((query.valid_Data_count / query.target) * 100) +
                      "%"}
                  </td>

                  <td>{query.connected_Call_count}</td>
                  <td>
                    {Math.round(
                      (query.connected_Call_count / query.valid_Data_count) *
                        100
                    ) + "%"}
                  </td>

                  <td>{query.true_Contact_count}</td>
                  <td>
                    {isNaN(
                      Math.round(
                        (query.true_Contact_count /
                          query.connected_Call_count) *
                          100
                      )
                    )
                      ? 0 + "%"
                      : Math.round(
                          (query.true_Contact_count /
                            query.connected_Call_count) *
                            100
                        ) + "%"}
                  </td>

                  <td>{query.not_Contacted_count}</td>
                  <td>
                    {isNaN(
                      Math.round(
                        (query.not_Contacted_count /
                          query.connected_Call_count) *
                          100
                      )
                    )
                      ? 0 + "%"
                      : Math.round(
                          (query.not_Contacted_count /
                            query.connected_Call_count) *
                            100
                        ) + "%"}
                  </td>

                  <td>{query.non_SOB1_count + query.non_SOB2_count}</td>
                  <td>
                    {isNaN(
                      Math.round(
                        ((query.non_SOB1_count + query.non_SOB2_count) /
                          query.connected_Call_count) *
                          100
                      )
                    )
                      ? 0 + "%"
                      : Math.round(
                          ((query.non_SOB1_count + query.non_SOB2_count) /
                            query.connected_Call_count) *
                            100
                        ) + "%"}
                  </td>
                  <td>{query.ext_MSB_count}</td>
                  <td>
                    {isNaN(
                      Math.round(
                        (query.ext_MSB_count / query.connected_Call_count) * 100
                      )
                    )
                      ? 0 + "%"
                      : Math.round(
                          (query.ext_MSB_count / query.connected_Call_count) *
                            100
                        ) + "%"}
                  </td>
                  <td>{query.false_Contact_count}</td>
                  <td>
                    {isNaN(
                      Math.round(
                        (query.false_Contact_count /
                          query.connected_Call_count) *
                          100
                      )
                    )
                      ? 0 + "%"
                      : Math.round(
                          (query.false_Contact_count /
                            query.connected_Call_count) *
                            100
                        ) + "%"}
                  </td>

                  <td>{query.no_Free_Sample}</td>
                  <td>{query.less_Free_Sample}</td>
                  <td>{query.no_Free_Sample + query.less_Free_Sample}</td>
                  <td>
                    {isNaN(
                      Math.round(
                        ((query.no_Free_Sample + query.less_Free_Sample) /
                          query.connected_Call_count) *
                          100
                      )
                    )
                      ? 0 + "%"
                      : Math.round(
                          ((query.no_Free_Sample + query.less_Free_Sample) /
                            query.connected_Call_count) *
                            100
                        ) + "%"}
                  </td>
                  <td>{query.teaSnaks}</td>
                  <td>
                    {isNaN(
                      Math.round(
                        (query.teaSnaks / query.connected_Call_count) * 100
                      )
                    )
                      ? 0 + "%"
                      : Math.round(
                          (query.teaSnaks / query.connected_Call_count) * 100
                        ) + "%"}
                  </td>

                  <td>{query.retention}</td>
                  <td>
                    {isNaN(
                      Math.round(
                        (query.retention / query.connected_Call_count) * 100
                      )
                    )
                      ? 0 + "%"
                      : Math.round(
                          (query.retention / query.connected_Call_count) * 100
                        ) + "%"}
                  </td>
                  {/* Target True Contact */}
                  <td>{query.targetTrueContact}</td>
                  {/* ExtraPulated Data */}
                  <td>
                    {isNaN(
                      (
                        (query.true_Contact_count * query.valid_Data_count) /
                        query.connected_Call_count
                      ).toFixed(2)
                    )
                      ? 0.0
                      : (
                          (query.true_Contact_count * query.valid_Data_count) /
                          query.connected_Call_count
                        ).toFixed(2)}
                  </td>
                  {/* Extrapulated % */}
                  <td>
                    {(
                      ((query.true_Contact_count * query.valid_Data_count) /
                        query.connected_Call_count /
                        query.target) *
                      100
                    ).toFixed(2) + "%"}
                  </td>
                  {/* Less/More True Contacted */}
                  <td>
                    {isNaN(
                      (
                        (query.true_Contact_count * query.valid_Data_count) /
                          query.connected_Call_count -
                        query.targetTrueContact
                      ).toFixed(2)
                    )
                      ? 0
                      : (
                          (query.true_Contact_count * query.valid_Data_count) /
                            query.connected_Call_count -
                          query.targetTrueContact
                        ).toFixed(2)}
                  </td>
                  {/* Per Consumer Average */}
                  <td>{parseFloat(query.avgExpense)}</td>
                  {/* Charge Amount */}
                  <td>
                    {isNaN(
                      (
                        (query.true_Contact_count * query.valid_Data_count) /
                        query.connected_Call_count
                      ).toFixed(2) >= query.targetTrueContact
                        ? (
                            ((query.true_Contact_count *
                              query.valid_Data_count) /
                              query.connected_Call_count -
                              query.targetTrueContact) *
                            query.avgExpense *
                            0
                          ).toFixed(2)
                        : (
                            ((query.true_Contact_count *
                              query.valid_Data_count) /
                              query.connected_Call_count -
                              query.targetTrueContact) *
                            query.avgExpense
                          ).toFixed(2)
                    )
                      ? 0
                      : (
                          (query.true_Contact_count * query.valid_Data_count) /
                          query.connected_Call_count
                        ).toFixed(2) >= query.targetTrueContact
                      ? (
                          ((query.true_Contact_count * query.valid_Data_count) /
                            query.connected_Call_count -
                            query.targetTrueContact) *
                          query.avgExpense *
                          0
                        ).toFixed(2)
                      : (
                          ((query.true_Contact_count * query.valid_Data_count) /
                            query.connected_Call_count -
                            query.targetTrueContact) *
                          query.avgExpense
                        ).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                  colspan="4"
                >
                  Total
                </td>

                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {totalTarget}
                </td>

                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {totalLessContact}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {lessConnectedPercentage + "%"}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {totalValid}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {validPercentage + "%"}
                </td>

                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {totalConnected}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {connectedPercentage + "%"}
                </td>

                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {totalTruelyConnected}
                </td>
                <td style={{ fontWeight: "bold", backgroundColor: "yellow" }}>
                  {TruelyConnectedPercentage + "%"}
                </td>

                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {totalNotConnected}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {notConnectedPercentage + "%"}
                </td>

                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {totalwtgnonSOB}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {wtgnonsobPercentage + "%"}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {totalextMSB}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {extmsbPercentage + "%"}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {totalFalseContact}
                </td>
                <td style={{ fontWeight: "bold", backgroundColor: "yellow" }}>
                  {falseContactPercentage + "%"}
                </td>

                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {totalnoFreeSample}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {totallessFreeSample}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {totalnoandlessSample}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {nolessPercentage + "%"}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {totalTeasnaks}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {teasnaksPercentage + "%"}
                </td>

                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {totalretention}
                </td>
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {retentionPercentage + "%"}
                </td>
                {/* Target True Contact */}
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {targetTrueContactTotal}
                </td>
                {/* ExtraPulated Data */}
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {(
                    (totalTruelyConnected * totalValid) /
                    totalConnected
                  ).toFixed(2)}
                </td>
                {/* Total ExtraPulated % */}
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {(
                    ((totalTruelyConnected * totalValid) /
                      totalConnected /
                      totalTarget) *
                    100
                  ).toFixed(2) + "%"}
                </td>
                {/* Less/More True Contacted */}
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {(
                    (totalTruelyConnected * totalValid) / totalConnected -
                    targetTrueContactTotal
                  ).toFixed(2)}
                </td>
                {/* Per Consumer Average */}
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {(perConsumeravgTotal / totalValid).toFixed(2)}
                </td>
                {/* Charge Amount */}
                <td
                  style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  {sumResult}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewTmsTmrReport;
