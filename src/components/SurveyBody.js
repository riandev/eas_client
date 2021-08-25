import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "antd/dist/antd.css";

const SurveyBody = () => {
  const [searchNumber, setSearchNumber] = useState(null);
  const [dList, setDlist] = useState([]);
  const [consumer, setConsumer] = useState(null);
  const [notFound, setNotFound] = useState(false);
  console.log(consumer);
  console.log(searchNumber);
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [q4, setQ4] = useState(null);
  const [q5, setQ5] = useState(null);
  const [q6, setQ6] = useState(null);
  const [q7, setQ7] = useState(null);
  const [q8, setQ8] = useState(null);
  const [q9, setQ9] = useState(null);
  const [q10, setQ10] = useState(null);
  const [q11, setQ11] = useState(null);

  const handleText = (e) => {
    setSearchNumber(e.target.value);
  };
  const handleSearch = () => {
    fetch(`http://192.168.10.11:5004/dMatched/${searchNumber}`)
      .then((res) => res.json())
      .then((data) => setConsumer(data));
    setNotFound(true);
  };
  const q1value = (e) => {
    setQ1(e.target.value);
  };
  const q2value = (e) => {
    setQ2(e.target.value);
  };
  const q3value = (e) => {
    console.log(e.target.value);
    setQ3(e.target.value);
  };
  const q4value = (e) => {
    setQ4(e.target.value);
  };
  const q5value = (e) => {
    setQ5(e.target.value);
  };
  const q6value = (e) => {
    setQ6(e.target.value);
  };
  const q7value = (e) => {
    console.log(e.target.value);
    setQ7(e.target.value);
  };
  const q8value = (e) => {
    setQ8(e.target.value);
  };
  const q9value = (e) => {
    setQ9(e.target.value);
  };
  const q10value = (e) => {
    setQ10(e.target.value);
  };
  const q11value = (e) => {
    setQ11(e.target.value);
  };
  const agent = sessionStorage.getItem("agent");
  console.log(agent);
  const handleSubmit = (e) => {
    const answer = {
      ans1: q1,
      ans2: q2,
      ans3: q3,
      ans4: q4,
      ans5: q5,
      ans6: q6,
      ans7: q7,
      ans8: q8,
      ans9: q9,
      ans10: q10,
      ans11: q11,
      agentID: agent,
      callDate: new Date().toLocaleDateString(),
      callTime: new Date().toLocaleTimeString(),
    };
    fetch(`http://192.168.10.11:5004/answers/${consumer?._id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(answer),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(answer);
    window.location.reload(false);
  };

  return (
    <div>
      <div style={{ display: consumer === null ? "block" : "none" }}>
        <input
          onChange={handleText}
          className="form-control w-50"
          type="text"
          name="serachNumber"
        />
        <br />
        <button onClick={handleSearch} className="btn btn-danger">
          Search
        </button>
      </div>
      <div
        style={{
          display: consumer === null ? "none" : "block",
        }}
      >
        <h6>
          ১.আসসালামুআলাইকুম, আমি <b>{agent}</b> বলছি একটি সিগারেট জরীপ কোম্পানি
          থেকে।আপনি কি <b>{consumer?.r_name}</b> স্যার বলছেন? আপনার কি কিছুক্ষন
          কথা বলার সময় হবে ?
        </h6>
        <Form.Group onChange={q1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
            <option value="busy">ব্যাস্ত</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q1 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>২.স্যার, আপনি কি ধুমপান করেন?</h6>
        <Form.Group onChange={q2value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q2 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>৩.আপনি বর্তমানে কোন ব্র্যান্ডের সিগারেট ধূমপান করেন?</h6>
        <Form.Group onChange={q3value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="marise">মেরিস</option>
            <option value="derby">ডার্বি</option>
            <option value="pilot">পাইলট</option>
            <option value="hollywood">হলিউড</option>
            <option value="sheikh">শেখ</option>
            <option value="k2">K2</option>
            <option value="real">রিয়েল</option>
            <option value="royals">রয়েলস</option>
            <option value="others">অন্যান্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q3 === "marise" ||
            q3 === "derby" ||
            q3 === "pilot" ||
            q3 === "hollywood" ||
            q3 === "sheikh" ||
            q3 === "royals" ||
            q3 === "k2" ||
            q3 === "real" ||
            q3 === "others"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৪.স্যার, কত দিন যাবত <b>{q3}</b> সিগারেট ধূমপান করছেন?
        </h6>
        <Form.Group onChange={q4value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="0days">০দিন</option>
            <option value="1days">১দিন</option>
            <option value="2days">২দিন</option>
            <option value="3days">৩দিন</option>
            <option value="4days">৪দিন</option>
            <option value="5days">৫দিন</option>
            <option value="6days">৬দিন</option>
            <option value="7days">৭দিন</option>
            <option value="8days">৮দিন</option>
            <option value="9days">৯দিন</option>
            <option value="10days">১০দিন</option>
            <option value="11days">১১দিন</option>
            <option value="12days">১২দিন</option>
            <option value="13days">১৩দিন</option>
            <option value="14days">১৪দিন</option>
            <option value="15days">১৫দিন</option>
            <option value="3week">৩সপ্তাহ</option>
            <option value="1month">১মাস</option>
            <option value="2month">২মাস</option>
            <option value="3month">৩মাস</option>
            <option value="4month">৪মাস</option>
            <option value="5month">৫মাস</option>
            <option value="6month">৬মাস</option>
            <option value="1year">১বছর</option>
            <option value="1yearplus">১বছরের বেশি</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q4 === "0days" ||
            q4 === "1days" ||
            q4 === "2days" ||
            q4 === "3days" ||
            q4 === "4days" ||
            q4 === "5days"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>৫.এর আগে কোন ব্র্যান্ডের সিগারেট ধূমপান করতেন?</h6>
        <Form.Group onChange={q5value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="marise">মেরিস</option>
            <option value="derby">ডার্বি</option>
            <option value="pilot">পাইলট</option>
            <option value="hollywood">হলিউড</option>
            <option value="sheikh">শেখ</option>
            <option value="k2">K2</option>
            <option value="real">রিয়েল</option>
            <option value="royals">রয়েলস</option>
            <option value="others">অন্যান্য</option>
            <option value="nonSmoker">Non Smoker</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q4 === "6days" ||
            q4 === "7days" ||
            q4 === "8days" ||
            q4 === "9days" ||
            q4 === "10days" ||
            q4 === "11days" ||
            q4 === "12days" ||
            q4 === "13days" ||
            q4 === "14days" ||
            q4 === "15days" ||
            q4 === "3week" ||
            q4 === "1month" ||
            q4 === "2month" ||
            q4 === "3month" ||
            q4 === "4month" ||
            q4 === "5month" ||
            q4 === "6month" ||
            q4 === "1year" ||
            q4 === "1yearplus" ||
            q5 === "marise" ||
            q5 === "derby" ||
            q5 === "pilot" ||
            q5 === "hollywood" ||
            q5 === "sheikh" ||
            q5 === "k2" ||
            q5 === "real" ||
            q5 === "royals" ||
            q5 === "others" ||
            q5 === "nonSmoker"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৬.স্যার গত ২/১ দিনের মধ্যে কি কোন সিগারেট কোম্পানির প্রতিনিধি আপনার
          কাছে এসেছিল? <b>({consumer?.data_date})</b>
        </h6>
        <p className="text-secondary">
          উত্তর গ্রহণের ক্ষেত্রে আমরা সর্বোচ্চ ৩দিন বিবেচনা করবো
        </p>
        <Form.Group onChange={q6value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q6 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>৭.কোন কোম্পানি থেকে এসেছিল?</h6>
        <Form.Group onChange={q7value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="marise">মেরিস</option>
            <option value="others">অন্যান্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q3 === "marise" &&
            q7 === "marise" &&
            (q4 === "1days" ||
              q4 === "2days" ||
              q4 === "3days" ||
              q4 === "4days" ||
              q4 === "5days")
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>৮.স্যার, আপনি কি উনি আসার পর থেকে মেরিস সিগারেট ধূমপান করছেন?</h6>
        <Form.Group onChange={q8value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div>
        <div
          style={{
            display:
              ((q3 === "derby" ||
                q3 === "marise" ||
                q3 === "pilot" ||
                q3 === "hollywood" ||
                q3 === "k2" ||
                q3 === "real" ||
                q3 === "sheikh" ||
                q3 === "royals" ||
                q3 === "others") &&
                (q7 === "marise" ? "block" : "none")) ||
              (q8 === "yes" || q8 === "no" ? "block" : "none"),
          }}
          className="mt-2"
        >
          <h6>৯.আপনাকে কি কোন সিগারেট দিয়েছিল টেস্ট করার জন্য?</h6>
          <Form.Group onChange={q9value} as={Row}>
            <Form.Control as="select" className="w-50 ml-3">
              <option>...</option>
              <option value="0">০</option>
              <option value="1">১</option>
              <option value="2">২</option>
              <option value="3">৩</option>
              <option value="4">৪</option>
              <option value="5">৫</option>
              <option value="6">৬</option>
              <option value="7">৭</option>
              <option value="8">৮</option>
              <option value="9">৯</option>
              <option value="10">১০</option>
              <option value="others">অন্যান্য</option>
            </Form.Control>
          </Form.Group>
        </div>
      </div>
      <div
        style={{
          display:
            q9 === "0" ||
            q9 === "1" ||
            q9 === "2" ||
            q9 === "3" ||
            q9 === "4" ||
            q9 === "5" ||
            q9 === "6" ||
            q9 === "7" ||
            q9 === "8" ||
            q9 === "9" ||
            q9 === "10" ||
            q9 === "others"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ১০.স্যার, আপনি তখন কত <b>({consumer?.no_of_pack})</b>
          প্যাকেট মেরিস সিগারেট কিনেছিলেন?
        </h6>
        <Form.Group onChange={q10value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="0packet">০প্যাকেট</option>
            <option value="1packet">১প্যাকেট</option>
            <option value="2packet">২প্যাকেট</option>
            <option value="3packet">৩প্যাকেট</option>
            <option value="4packet">৪প্যাকেট</option>
            <option value="5packet">৫প্যাকেট</option>
            <option value="packet_sales+swaping">প্যাকেট সেলস+সোয়াপিং</option>
            <option value="swaping">সোয়াপিং</option>
            <option value="others">অন্যান্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q10 === null ? "none" : "block" }}
        className="mt-2"
      >
        <h6>১১. স্যার, আপনাকে কি সিগারেট এর সাথে চা-নাস্তা পান করিয়েছে?</h6>
        <Form.Group onChange={q11value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      {/* Final Question */}
      <div
        style={{
          display:
            q1 === "no" || q1 === "busy" || q2 === "no" ? "block" : "none",
        }}
        className="mt-3"
      >
        <h5>আপনার মূল্যবান সময় দেওয়ার জন্য ধন্যবাদ।</h5>
        <br />
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
      <div
        style={{
          display:
            ((q3 === "derby" ||
              q3 === "pilot" ||
              q3 === "hollywood" ||
              q3 === "k2" ||
              q3 === "real" ||
              q3 === "sheikh" ||
              q3 === "royals" ||
              q3 === "others") &&
              q6 === "no") ||
            ((q3 === "derby" ||
              q3 === "pilot" ||
              q3 === "hollywood" ||
              q3 === "k2" ||
              q3 === "real" ||
              q3 === "sheikh" ||
              q3 === "royals" ||
              q3 === "others") &&
              q7 === "others") ||
            ((q3 === "derby" ||
              q3 === "pilot" ||
              q3 === "hollywood" ||
              q3 === "k2" ||
              q3 === "real" ||
              q3 === "sheikh" ||
              q3 === "royals" ||
              q3 === "others") &&
              (q11 === "yes" || q11 === "no"))
              ? "block"
              : "none",
        }}
        className="mt-3"
      >
        <h5>
          বাংলাদেশের সর্বাধিক জনপ্রিয় ব্রান্ড মেরিস এখনও ৪ টাকা শলাকা একই উন্নত
          স্বাদে। আপনার মূল্যবান সময় দেওয়ার জন্য ধন্যবাদ।
        </h5>
        <br />
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
      <div
        style={{
          display:
            q3 === "marise" && (q11 === "yes" || q11 === "no" || q6 === "no")
              ? "block"
              : "none",
        }}
        className="mt-3"
      >
        <h5>
          আপনার প্রিয় ব্র্যান্ড মেরিস এখনও ৪ টাকা শলাকা একই উন্নত স্বাদে। মেরিসে
          এর সাথে থাকার জন্য আপনাকে ধন্যবাদ।
        </h5>
        <br />
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
      <div
        style={{
          display:
            q3 === "marise" && q6 === "yes" && q7 === "others"
              ? "block"
              : "none",
        }}
        className="mt-3"
      >
        <h5>
          আপনার প্রিয় ব্র্যান্ড মেরিস এখনও ৪ টাকা শলাকা একই উন্নত স্বাদে। মেরিসে
          এর সাথে থাকার জন্য আপনাকে ধন্যবাদ।
        </h5>
        <br />
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyBody;
