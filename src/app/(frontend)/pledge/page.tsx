"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./global.css";

export default function PledgePage() {
  const [setCustomValidity]: any = useState("");
  const [isMobile, setIsMobile]: any = useState(true);
  useEffect(() => {
    if (window.screen.width <= 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const counter = (s: string) => {};
  return (
    <div className="body">
      <div style={{ minHeight: "360px" }}>
        <Image
          width={1920}
          height={1080}
          id="master-image"
          className="mob-v"
          loading="eager"
          priority={true}
          src={
            isMobile ? "/assets/pledge/m_hi.webp" : "/assets/pledge/d_hi.webp"
          }
          //   srcSet="/assets/pledge/m_hi.webp 600w, /assets/pledge/d_hi.webp 1600w"
          //   sizes="(min-width: 768px) 768px,50vw"
          alt="mp pledge"
        />
      </div>
      <div
        className="container form_box py-1"
        style={{ padding: "0px 15px !important" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
        <form id="my_form" className="mt-md-2">
          <h6
            id="l1-heading"
            className="form_head mt-md-3 translate"
            style={{ textAlign: "center", fontFamily: "yatra", color: "white" }}
          >
            मेरा समर्थन मोदी को
          </h6>
          <div className="mb-2 my-md-5">
            <input
              type="tel"
              id="mob"
              name="mob"
              className="form-control translate-placeholder"
              placeholder="फ़ोन नंबर *"
              pattern="[6789][0-9]{9}"
              maxLength={10}
              minLength={10}
              onKeyPress={(event: any) =>
                event.charCode >= 48 && event.charCode <= 57
              }
              onInvalid={() =>
                setCustomValidity("कृपया सही मोबाइल नंबर दर्ज करें")
              }
              //   onValid={() => setCustomValidity("")}
              onInvalidCapture={() => setCustomValidity("")}
              onChange={() => setCustomValidity("")}
              required
            />
          </div>
          <p id="my_form_msg" style={{ color: "white", display: "none" }}>
            आपका मोबाइल नंबर पहले से पंजीकृत है
          </p>
          <center>
            <button
              id="l1-submit-button"
              type="submit"
              className="btn form-control mb-4 mb-md-3 mt-2 submit_button translate"
              style={{ backgroundColor: "red", fontFamily: "yatra" }}
            >
              <b
                style={{
                  fontFamily: "'yatra', sans-serif",
                  backgroundColor: "0D67A8",
                }}
              >
                संकल्प लें
              </b>
            </button>
          </center>
        </form>
        <form id="otp_form" style={{ display: "none" }}>
          <h6
            id="l2-heading"
            className="form_head mt-md-3 translate"
            style={{ textAlign: "center", fontFamily: "yatra" }}
          >
            मेरा समर्थन मोदी को
          </h6>
          <p
            id="l2-message"
            className="px-2 pt-md-1 px-md-1 mb-1 mb-md-2 otp_sub translate"
          >
            आपको OTP भेजा गया है। कृपया आपके मोबाइल पर भेजे गए OTP को दर्ज करें।
          </p>
          <div className="mb-2 mb-md-3" style={{ position: "relative" }}>
            <input
              type="tel"
              id="otp"
              name="otp"
              className="form-control"
              placeholder="OTP *"
              required
            />
          </div>
          <center>
            <button
              id="l2-submit-button"
              type="submit"
              className="btn form-control mb-4 mb-md-3 mt-1 submit_button translate"
            >
              <b style={{ fontFamily: "'yatra', sans-serif" }}>OTP दर्ज़ करें</b>
            </button>
          </center>
        </form>
        <form id="form_l3" className="mt-2 mx-2" style={{ display: "none" }}>
          <h6
            id="l3-heading"
            className="form_head mt-md-3 translate"
            style={{ textAlign: "center" }}
          >
            मेरा समर्थन मोदी को
          </h6>
          <div className="mb-3 mb-md-2 form-2">
            <select
              className="form-control"
              id="state"
              name="state"
              required
              defaultValue={"राज्य *"}
            >
              <option value="" disabled={true}>
                राज्य *
              </option>
            </select>
          </div>
          <div className="mb-3 mb-md-2 form-2">
            <select
              className="form-control"
              id="district"
              name="district"
              required
              defaultValue={"जिला *"}
            >
              <option value="" disabled={true}>
                जिला *
              </option>
            </select>
          </div>
          <div className="mb-3 mb-md-2 form-2">
            <input
              type="tel"
              id="age"
              minLength={2}
              maxLength={3}
              name="age"
              className="form-control translate-placeholder"
              placeholder="आयु *"
              required
            />
          </div>
          <div className="mb-3 mb-md-2 form-2">
            <select
              className="form-control"
              id="gender"
              name="gender"
              required
              defaultValue={"लिंग *"}
            >
              <option value="" disabled={true}>
                लिंग *
              </option>
              <option value="male">पुरुष</option>
              <option value="female">महिला</option>
              <option value="other">अन्य</option>
            </select>
          </div>
          <center>
            <button
              id="l3-submit-button"
              type="submit"
              className="btn form-control mb-4 mb-md-2 mt-2 submit_button translate"
              style={{ border: "2px solid white" }}
            >
              <b style={{ fontFamily: "'yatra', sans-serif" }}>सबमिट करें </b>
            </button>
          </center>
        </form>
      </div>
      {/* <div id="name_modal" className="modal">
        <div className="modal__content">
          <div id="popup" className="modal-body text-light p-2">
            <h4
              id="name-modal-heading"
              className="alert-heading text-center translate"
              style={{
                color: "red",
                fontWeight: "700",
                lineHeight: "2.2rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              निजीकृत संकल्प पत्र पानें के लिए, अपना नाम दर्ज करें
            </h4>
            <form id="name_submit">
              <div className="mb-2 mb-md-2">
                <input
                  type="text"
                  className="form-control translate-placeholder"
                  id="name"
                  name="name"
                  placeholder="नाम *"
                  required
                />
              </div>
              <center>
                <button
                  id="name-submit-button"
                  type="submit"
                  className="btn form-control mb-4 mb-md-2 mt-2 submit_button translate"
                >
                  <b style={{ fontFamily: "'yatra', sans-serif" }}>
                    नाम दर्ज करें{" "}
                  </b>
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
      <div id="thankyou" className="modal">
        <div className="modal__content">
          <div id="popup1" className="modal-body text-light p-2">
            <h4
              id="thank-modal-message-1"
              className="alert-heading text-center translate"
              style={{
                color: "red",
                fontWeight: "700",
                lineHeight: "2.2rem",
                fontSize: "25px",
                textAlign: "center",
              }}
            >
              भाजपा को जिताने का संकल्प लेने के लिए धन्यवाद
            </h4>
            <h4
              id="thank-modal-message-2"
              className="alert-heading text-center translate"
              style={{
                color: "red",
                fontWeight: "700",
                lineHeight: "2.2rem",
                fontSize: "25px",
                textAlign: "center",
              }}
            >
              भाजपा को जिताने का संकल्प लेने के लिए धन्यवाद
            </h4>
          </div>
          <a
            href="#"
            className="modal__close"
            onClick={() => counter("")}
            style={{ color: "#131313", fontSize: "20px" }}
          >
            &times;
          </a>
        </div>
      </div>
      <div id="redirection-modal" className="modal">
        <div className="modal__content">
          <div
            id="redirect"
            className="modal-body text-light p-2"
            style={{ height: "100%", textAlign: "center" }}
          ></div>
          <a href="#" className="modal__close">
            &times;
          </a>
        </div>
      </div> */}
    </div>
  );
}
