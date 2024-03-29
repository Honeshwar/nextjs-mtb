import clsx from "clsx";
import React, { useEffect, useState } from "react";

function DetailForm({
  CTA,
  states,
  setStates,
  setStep,
  lang,
}: {
  CTA: any;
  states: any;
  setStates: React.Dispatch<React.SetStateAction<any>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  lang: string;
}) {
  const [details, setDetails] = useState({
    name: "",
    age: "",
    gender: "",
    state: "",
    district: "",
  });
  const [districts, setDistricts] = useState([]);
  const [stateId, setStateId] = useState(-1);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  //   useEffect(() => {
  //     fetch(`https://mahathugbandhan.com/api/v1/get_district?language=${lang}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("get allstates ", data);
  //         if (data?.status >= 200 && data?.status < 300) {
  //           setStates(data.result);
  //         } else {
  //           console.log(data);
  //         }
  //       });
  //   }, []);
  useEffect(() => {
    if (
      JSON.stringify(details) !==
      '{"name":"","age":"","gender":"","state":"","district":""}'
    ) {
      const body = new FormData();
      body.append("name", details.name);
      body.append("age", details.age);
      body.append("gender", details.gender);
      body.append("state", details.state);
      body.append("district", details.district);
      body.append("mobile", localStorage.getItem("mobile_main")!);
      fetch(`https://mahathugbandhan.com/api/v1/user/update`, {
        method: "PATCH",
        body,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("submit details success ", data);
          if (data?.status >= 200 && data?.status < 300) {
            setStep(4);
          } else {
            console.log(data);
          }
        });
    }
  }, [details]);
  useEffect(() => {
    async function getDistrict(stateId: number) {
      console.log("click option");
      const response = await fetch(
        `https://mahathugbandhan.com/api/v1/get_ac_from_district?district_id=${stateId}&language=${lang}`
      );
      const responseData = await response.json();
      console.log("all districts", responseData);
      if (responseData.status >= 200 && responseData.status < 300) {
        setDistricts(responseData.result);
      } else {
        console.log(responseData);
      }
    }

    if (stateId !== -1) {
      getDistrict(stateId);
    }
  }, [stateId]);
  const submitDetailHandler = (e: any) => {
    e.preventDefault();
    console.log(name, age, gender, state, district);
    setError("");
    if (gender === "") {
      setError(lang === "hi" ? "** लिंग आवश्यक है!" : "** Select Gender!");
      return;
    } else if (state === "") {
      setError(lang === "hi" ? "** राज्य आवश्यक है!" : "** Select State!");
      return;
    } else if (district === "") {
      setError(lang === "hi" ? "** जिला आवश्यक है!" : "** Select District!");
      return;
    }

    setDetails({
      name: name,
      age: age,
      gender: gender,
      state: state,
      district: district,
    });
  };

  const stateHandler = (e: any) => {
    e.preventDefault();
    setError("");
    setStateId(e.target.value);
    setState(e.target.value);
  };

  return (
    <div
      id="detail-form"
      className=" overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full "
      style={{ backgroundColor: "#181844c0" }}
    >
      <div className="w-full h-full sm:w-fit sm:h-fit justify-center items-center">
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div
            className={clsx("relative bg-yellow-600 rounded-lg shadow  ", {
              "font-yatra": lang === "hi",
              "font-book": lang === "en",
            })}
          >
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-yellow-500">
              <h3 className=" font-semibold  text-white text-center font-[inherit] text-[1.2rem] sm:text-[1.5rem]">
                {/* रजिस्ट्रेशन की प्रक्रिया पूरी करने के लिए नीचे दिया फॉर्म भरें */}
                {CTA["form-3"].title}
              </h3>
              {/* <!-- close btn --> */}
            </div>

            {/* <!-- Modal body --> */}
            <form className="p-4 md:p-5" onSubmit={submitDetailHandler}>
              {/* <!-- show error --> */}
              {error && (
                <div
                  id="detail-form-error"
                  className="text-[red] font-bold flex justify-center"
                >
                  {error}
                </div>
              )}
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 ">
                  <label
                    htmlFor="name"
                    className="block mb-2  text-[1.2rem] sm:text-[1.5rem] font-medium  text-white font-[inherit]"
                  >
                    {CTA["form-3"]["input-1"].label}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-white-50 border border-white-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-[1.2rem] sm:text-[1.2rem] font-[inherit] text-yellow-600 font-[500]"
                    placeholder={CTA["form-3"]["input-1"].placeholder}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium  text-white font-[inherit]  text-[1.2rem] sm:text-[1.2rem]"
                  >
                    {/* आयु */}
                    {CTA["form-3"]["input-2"].label}
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    className="bg-white-50 border border-white-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-[1.2rem] sm:text-[1.2rem] font-[inherit] text-yellow-600 font-[500]"
                    placeholder={CTA["form-3"]["input-2"].placeholder}
                    required
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium  text-white font-[inherit]  text-[1.2rem] sm:text-[1.2rem]"
                  >
                    {/* लिंग */}
                    {CTA["form-3"]["input-3"].label}
                  </label>
                  <select
                    id="gender"
                    className="bg-white-50 border border-white-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 text-[1.2rem] sm:text-[1.2rem] font-inherit text-gray-400 font-[550]"
                    required
                    defaultValue={CTA["form-3"]["input-3"]["default-value"]}
                    onChange={(e) => {
                      setError("");
                      setGender(e.target.value);
                    }}
                  >
                    <option selected disabled className="font-[inherit]">
                      {/* अपना लिंग चुनें */}
                      {CTA["form-3"]["input-3"]["disabled-option"]}
                    </option>
                    {/* <option value="Male" className="font-[inherit]">
                      पुरुष
                    </option>
                    <option value="Female" className="font-[inherit]">
                      महिला
                    </option>
                    <option value="Others" className="font-[inherit]">
                      अन्य
                    </option> */}

                    {CTA["form-3"]["input-3"]["options"].map(
                      (option: string) => (
                        <option
                          key={option}
                          value={option}
                          className="font-[inherit] text-yellow-600 font-[500]"
                        >
                          {option}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="state"
                    className="block mb-2 text-sm font-medium  text-white font-[inherit]  text-[1.2rem] sm:text-[1.2rem]"
                  >
                    {/* राज्य */}
                    {CTA["form-3"]["input-4"].label}
                  </label>
                  <select
                    id="state"
                    className="bg-white-50 border border-white-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 text-[1.2rem] sm:text-[1.2rem] font-inherit text-gray-400 font-[550]"
                    required
                    defaultValue={CTA["form-3"]["input-4"]["disabled-option"]}
                    onChange={stateHandler}
                  >
                    <option selected disabled className="font-[inherit]">
                      {/* अपना राज्य चुनें */}
                      {CTA["form-3"]["input-4"]["disabled-option"]}
                    </option>
                    {states.map((state: any) => (
                      <option
                        value={state.id}
                        key={state.id}
                        className="text-yellow-600 font-[500]"
                      >
                        {state.district_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="district"
                    className="block mb-2 text-sm font-medium  text-white font-[inherit]  text-[1.2rem] sm:text-[1.2rem]"
                  >
                    {/* ज़िला */}
                    {CTA["form-3"]["input-5"].label}
                  </label>
                  <select
                    id="district"
                    className="bg-white-50 border border-white-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 text-[1.2rem] sm:text-[1.2rem] font-inherit text-gray-400 font-[550]"
                    required
                    defaultValue={CTA["form-3"]["input-5"]["disabled-option"]}
                    onChange={(e) => {
                      setError("");
                      setDistrict(e.target.value);
                    }}
                  >
                    <option selected disabled className="font-[inherit]">
                      {CTA["form-3"]["input-5"]["disabled-option"]}
                    </option>
                    {districts.map((district: any) => (
                      <option
                        value={district.id}
                        key={district.id}
                        className="text-yellow-600 font-[500]"
                      >
                        {district.ac_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-center pt-1 pb-2">
                <button
                  type="submit"
                  className="text-white inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2 pt-2 text-center font-[inherit]  text-[1rem] sm:text-[1.5rem]"
                >
                  {/* विवरण जमा करें */}
                  {CTA["form-3"]["submit-btn"]}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailForm;
