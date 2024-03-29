const urlParams = new URLSearchParams(window.location.search),
  lang = urlParams.get("lang") || "hi",
  selectTranslations = {
    en: {
      state: "State",
      district: "District",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
    },
    hi: {
      state: "राज्य",
      district: "जिला",
      gender: "लिंग",
      male: "पुरुष",
      female: "महिला",
      other: "अन्य",
    },
    bn: {
      state: "রাজ্য",
      district: "জেলা",
      gender: "লিঙ্গ",
      male: "পুরুষ",
      female: "মহিলা",
      other: "অন্য",
    },
    te: {
      state: "రాష్ట్రం",
      district: "జిల్లా",
      gender: "లింగం",
      male: "మగ",
      female: "ఆడ",
      other: "ఇతర",
    },
  };
let genderOptions = `<option value='' selected="true" disabled="disabled">${selectTranslations[lang].gender}*</option>`;
(genderOptions += `<option value="male">${selectTranslations[lang].male}</option>`),
  (genderOptions += `<option value="female">${selectTranslations[lang].female}</option>`),
  (genderOptions += `<option value="other">${selectTranslations[lang].other}</option>`),
  $("#gender").html(genderOptions),
  $("#district").html(`  
<option value="" selected="true" disabled="disabled" style="color:grey;font-size: 14px;">
${selectTranslations[lang].district} *
</option>`);
let URL = "https://mahathugbandhan.com/api/v1/";
$(document).ready(function () {
  "l3" == localStorage.getItem("form") &&
    ($("#my_form").hide(), $("#otp_form").hide(), $("#form_l3").show());
});
let img_share = "";
const d = () => {
  fetch(`https://mahathugbandhan.com/api/v1/get_district?language=${lang}`)
    .then((e) => e.json())
    .then((e) => {
      let t = `  
        <option value="" selected="true" disabled="disabled" style="color:grey;font-size: 14px;">
            ${selectTranslations[lang].state}*
        </option>`;
      e.result.forEach((e) => {
        t += `
        <option value="${e.id}">${e.district_name}</option>`;
      }),
        $("#state").html(t);
    });
};

function getQueryParam(e) {
  return decodeURIComponent(
    window.location.search.replace(
      RegExp(
        "^(?:.*[&\\?]" +
          encodeURIComponent(e).replace(/[\.\+\*]/g, "\\$&") +
          "(?:\\=([^&]*))?)?.*$",
        "i"
      ),
      "$1"
    )
  );
}

function share(e) {
  var t = "https://mahathugbandhan.com/api/v1/metamaker_" + e,
    a = t;
  if (screen.width > 750)
    var s = "https://web.whatsapp.com/send?url=" + t + "&text=" + a;
  else var s = "https://wa.me/?url=" + t + "&text=" + a;
  document.getElementById("share").innerHTML =
    '<div><p style ="margin-bottom:0px !important;padding-bottom: 10px;font-weight:700;color:white"><span><a href="' +
    s +
    '" class="social_thank" target="_blank" style="color:black"> <img src="whatsapp.svg" alt="whatsapp logo"></a> </span> <span> <a href = "https://twitter.com/intent/tweet?url=' +
    t +
    '" class="social_thank" style="color:black" target="_blank"> <img src="twt-x-logo.svg" alt = "twitter logo" style="    background-color: black;padding: 3px;border-radius: 50%;"> </a> </span> <span> <a href = "http://www.facebook.com/sharer/sharer.php?u=' +
    t +
    '" target="_blank" class="social_thank" style="color:black"> <img src="fb.svg" alt = "facebook logo"> </a> </span> <span> <a href="certificate.jpeg" class="social_thank" style="color:black" download> <i class="fa fa-download" aria-hidden="true"></i> </a> </span> </p> </center> </div>';
}

function counter(e) {
  console.log("herer"),
    $("#popupbutton").click(),
    (window.location.href = "#redirection-modal"),
    (t = a = 5);
  var t,
    a,
    s = setInterval(function a() {
      var n = Math.floor(t / 24 / 60 / 60),
        l = t % 60;
      let o = "";
      switch (lang) {
        case "hi":
          o =
            '<p class="" style="color:black;text-align:center">' +
            e +
            `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">आपको <span class="ps-2" id="countdown" style="">` +
            l +
            "</span> सेकंड में मुख्य वेबसाइट पर निर्देशित किया जा रहा है  </span></p>";
          break;
        case "mr":
          o =
            '<p class="" style="color:black;text-align:center">' +
            e +
            `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">तुम्हालाा <span class="ps-2" id="countdown" style="">` +
            l +
            "</span> सेकंदात मुख्य वेबसाईटवर निर्देशित करण्यात येत आहे  </span></p>";
          break;
        case "bn":
          o =
            '<p class="" style="color:black;text-align:center">' +
            e +
            `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">আপনাকে  <span class="ps-2" id="countdown" style="">` +
            l +
            "</span>  সেকেন্ডের মধ্যে মূল ওয়েবসাইটে নিয়ে যাওয়া হচ্ছে </span></p>";
          break;
        case "gu":
          o =
            '<p class="" style="color:black;text-align:center">' +
            e +
            `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">તમને  <span class="ps-2" id="countdown" style="">` +
            l +
            "</span>  સેંકન્ડમાં મુખ્ય વેબસાઇટ પર નિર્દેશિત કરવામાં આવી રહ્યાં છે. </span></p>";
          break;
        case "as":
          o =
            '<p class="" style="color:black;text-align:center">' +
            e +
            `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">আপোনাক  <span class="ps-2" id="countdown" style="">` +
            l +
            "</span>   ছেকেণ্ডৰ ভিতৰত মুখ্য ৱেবছাইটলৈ নিৰ্দেশিত কৰা হৈছে  </span></p>";
          break;
        case "or":
          o =
            '<p class="" style="color:black;text-align:center">' +
            e +
            `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">ଆପଣଙ୍କୁ  <span class="ps-2" id="countdown" style="">` +
            l +
            "</span>  ସେକେଣ୍ଡ ରେ ମୁଖ୍ୟ ୱେବସାଇଟ୍ କୁ ନିର୍ଦ୍ଦେଶିତ କରା ଯାଉଛି. </span></p>";
          break;
        case "pa":
          o =
            '<p class="" style="color:black;text-align:center">' +
            e +
            `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">ਤੁਹਾਨੂੰ   <span class="ps-2" id="countdown" style="">` +
            l +
            "</span>  ਸਕਿੰਟਾਂ ਵਿੱਚ ਮੁੱਖ ਵੈੱਬਸਾਈਟ 'ਤੇ ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ	</span></p>";
          break;
        case "kn":
          o =
            '<p class="" style="color:black;text-align:center">' +
            e +
            '</p> <p class=" text-center"> <span class="" style="color:black;text-align:center"> <span class="ps-2" id="countdown" style="">' +
            l +
            "</span>  ಸೆಕೆಂಡುಗಳಲ್ಲಿ ನಿಮ್ಮನ್ನು ಮುಖ್ಯ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಮರು ಪ್ರವೇಶಿಸಲಾಗುವುದು	</span></p>";
          break;
        case "te":
          o =
            '<p class="" style="color:black;text-align:center">' +
            e +
            `</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">మీరు <span class="ps-2" id="countdown" style="">` +
            l +
            "</span>  సెకన్లలో ప్రధాన వెబ్‌సైట్‌కి మళ్ళించబడతారు	</span></p>";
          break;
        case "en":
          o =
            '<p class="" style="color:black;text-align:center">' +
            e +
            '</p> <p class=" text-center"> <span class="" style="color:black;text-align:center">You are being redirected to the main website in  <span class="ps-2" id="countdown" style="">' +
            l +
            "</span> sec </span></p>";
          break;
        case "ml":
          o =
            '<p class="" style="color:black;text-align:center">' +
            e +
            '</p> <p class=" text-center"> <span class="" style="color:black;text-align:center"> <span class="ps-2" id="countdown" style="">' +
            l +
            "</span> സെക്കൻഡിനുള്ളിൽ  നിങ്ങളെ പ്രധാന വെബ്‌സൈറ്റിലേക്ക് തിരിച്ചുവിടുന്നതാണ്	</span></p>";
          break;
        case "ta":
          o =
            '<p class="" style="color:black;text-align:center">' +
            e +
            '</p> <p class=" text-center"> <span class="" style="color:black;text-align:center"> <span class="ps-2" id="countdown" style="">' +
            l +
            "</span>   வினாடிகளில் முதன்மை இணையதளத்திற்கு திருப்பி விடப்படுவீர்கள்	</span></p>";
          break;
        default:
          o =
            '<p class="" style="color:black;text-align:center">' +
            e +
            '</p> <p class="text-center"> <span class="" style="color:red;text-align:center">You are being redirected to the main website in  <span class="ps-2" id="countdown" style="">' +
            l +
            "</span> sec </span></p>";
      }
      if (((document.getElementById("redirect").innerHTML = o), 0 === t)) {
        clearInterval(s);
        let r = "";
        switch (lang) {
          case "hi":
          case "mr":
          case "gu":
            r = "index.html";
            break;
          case "bn":
            r = "en/index.html";
            break;
          case "as":
            r = "index.html";
          case "or":
          case "pa":
            r = "index.html";
            break;
          default:
            r = "en/index.html";
        }
        location.replace(r), localStorage.setItem("page", "landingpage");
      } else t--;
    }, 1e3);
}

function user_report_download() {
  window.location.href = "#demo-modal1";
}

function download_certificate() {
  var e = localStorage.getItem("mobile");
  window.location.href =
    "https://mahathugbandhan.com/api/v1/get_certificate/" + e;
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function drop() {
  document.getElementById("myDropdown").classList.toggle("show");
}
d(),
  $("#state").on("change", (e) => {
    fetch(
      `https://mahathugbandhan.com/api/v1/get_ac_from_district?district_id=${e.target.value}&language=${lang}`
    )
      .then((e) => e.json())
      .then((e) => {
        let t = `  
        <option value="" selected="true" disabled="disabled" style="color:grey;font-size: 14px;">
        ${selectTranslations[lang].district} *
        </option>`;
        e.result.forEach((e) => {
          t += `
        <option value="${e.id}">${e.ac_name}</option>`;
        }),
          $("#district").html(t);
      });
  }),
  d(),
  $("#my_form").submit(function (e) {
    e.preventDefault();
    // if (e.preventDefault(), $("#my_form_msg").hide(), console.log(new Date(localStorage.getItem("date"))), new Date >= new Date(localStorage.getItem("date")) || "" === localStorage.getItem("date") || "undefined" === localStorage.getItem("date") || void 0 === localStorage.getItem("date") || "null" === localStorage.getItem("date") || null === localStorage.getItem("date")) {
    $("#my_form_msg").hide();
    let t = new FormData();
    new URLSearchParams(window.location.search);
    let a = getQueryParam("utm_source"),
      s = getQueryParam("utm_medium"),
      n = getQueryParam("utm_campaign");
    t.append("utm_source", a),
      t.append("utm_medium", s),
      t.append("utm_campaign", n),
      t.append("mobile", $("#mob").val()),
      fetch(URL + "user", {
        method: "post",
        body: t,
      })
        .then((e) => e.json())
        .then((e) => {
          console.log(e),
            "Mobile Number already registered." === e.result
              ? ($("#already_register").show(),
                localStorage.setItem("mobile", $("#mob").val()),
                fetch(
                  URL +
                    `generate_certificate/${$("#mob").val()}?language=${lang}`
                )
                  .then((e) => e.json())
                  .then((e) => {
                    localStorage.setItem("mobile", $("#mob").val()),
                      console.log(e),
                      localStorage.setItem("ceritificate", e.certificate_url),
                      (window.location.href = `thankyou.html?lang=${lang}`);
                  }))
              : fetch(URL + `user/send_otp?language=${lang}`, {
                  method: "PATCH",
                  body: t,
                })
                  .then((e) => e.json())
                  .then((e) => {
                    $("#my_form").hide(),
                      $("#otp_form").show(),
                      localStorage.setItem("mobile", $("#mob").val());
                    // var t = new Date(Date.now() + 6e4);
                    // localStorage.setItem("date", t)
                  });
        });
  }),
  $("#otp_form").submit(function (e) {
    e.preventDefault();
    let t = new FormData();
    t.append("otp", $("#otp").val()),
      t.append("mobile", localStorage.getItem("mobile")),
      fetch(URL + `user/verify_otp?language=${lang}`, {
        method: "PATCH",
        body: t,
      })
        .then((e) => e.json())
        .then((e) => {
          console.log(e),
            $("#my_form").hide(),
            $("#form_l3").hide(),
            (console.log("ssssss"), (window.location.href = "#name_modal"));
        });
  }),
  $("#name_submit").submit(function (e) {
    e.preventDefault();
    let t = new FormData();
    t.append("name", $("#name").val()),
      t.append("mobile", localStorage.getItem("mobile")),
      fetch(URL + "user/update", {
        method: "PATCH",
        body: t,
      })
        .then((e) => e.json())
        .then((e) => {
          fetch(
            URL +
              `generate_certificate/${localStorage.getItem(
                "mobile"
              )}?language=${lang}`
          )
            .then((e) => e.json())
            .then((e) => {
              localStorage.setItem("ceritificate", e.certificate_url),
                console.log(e),
                localStorage.setItem("name", $("#name").val()),
                $("#otp_form").hide(),
                d();
              window.location.href = `thankyou.html?lang=${lang}`;
            });
        });
  }),
  $("#form_l3").submit(function (e) {
    e.preventDefault();
    let t = new FormData();
    t.append("mobile", localStorage.getItem("mobile")),
      t.append("assemblies_id", $("#district").val()),
      t.append("districts_id", $("#state").val()),
      t.append("age", $("#age").val()),
      t.append("gender", $("#gender").val()),
      fetch(URL + "user/update", {
        method: "PATCH",
        body: t,
      })
        .then((e) => e.json())
        .then((e) => {
          console.log(
            e,
            "updateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          ),
            $("#my_form").hide(),
            $("#otp_form").hide(),
            $("#form_l3").trigger("reset"),
            (window.location.href = "#thankyou"),
            localStorage.setItem("form", "");
        });
  });
