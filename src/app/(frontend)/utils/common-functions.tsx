function image_download_count() {
  fetch("https://mahathugbandhan.com/api/v1/user/image_download_count")
    .then((response) => response.json())
    .then((result) => {
      console.log("image download count", result);
    });
}
function spin_wheel_count() {
  fetch("https://mahathugbandhan.com/api/v1/user/spin_wheel_count")
    .then((response) => response.json())
    .then((result) => {
      console.log("spin the wheel count", result);
    });
}
function image_share_count() {
  fetch("https://mahathugbandhan.com/api/v1/user/image_share_count")
    .then((response) => response.json())
    .then((result) => {
      console.log("image share count", result);
    });
}

function upload_count() {
  fetch("https://mahathugbandhan.com/api/v1/user/upload_count")
    .then((response) => response.json())
    .then((result) => {
      console.log("upload count", result);
    });
}
function video_share_count() {
  fetch("https://mahathugbandhan.com/api/v1/user/video_share_count")
    .then((response) => response.json())
    .then((result) => {
      console.log("video_share_count", result);
    });
}

function quiz_share_count() {
  fetch("https://mahathugbandhan.com/api/v1/user/score_share_count")
    .then((response) => response.json())
    .then((result) => {
      console.log("quiz_share_count", result);
    });
  // window.location.href = "#demo-modal";
}

//

function getQueryParam(key: string) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        "^(?:.*[&\\?]" +
          encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
          "(?:\\=([^&]*))?)?.*$",
        "i"
      ),
      "$1"
    )
  );
}

async function generateCertificate(
  mobile: string,
  lang: string,
  next: Function,
  setCertificateUrl: React.Dispatch<React.SetStateAction<string>>
) {
  const response = await fetch(
    "https://mahathugbandhan.com/api/v1/generate_certificate/" +
      mobile +
      "?language=" +
      lang
  );
  const responseData = await response.json();
  console.log("certificate", responseData, responseData.status === 200);
  if (responseData.status === 200) {
    console.log(responseData.certificate_url);
    localStorage.setItem(
      `certificate_url_${lang}`,
      responseData.certificate_url
    );
    setCertificateUrl(responseData.certificate_url);
    next();
  }
}

// share link generator
function generateShareLinks(
  link: string,
  text: string
): {
  w: string;
  f: string;
  t: string;
} {
  // shares links
  let twitter_link =
    "https://twitter.com/intent/tweet?url=" + link + "&text=" + text;
  let facebook_link =
    "http://www.facebook.com/sharer/sharer.php?u=" + link + "&text=" + text;

  let whatsapp_link = "";
  if (screen.width > 750)
    whatsapp_link =
      "https://web.whatsapp.com/send?url=" +
      link +
      "&text=" +
      link +
      " " +
      `%0A` +
      text;
  else
    whatsapp_link =
      "https://wa.me/?url=" + link + "&text=" + link + " " + `%0A` + text;

  return {
    w: whatsapp_link,
    f: facebook_link,
    t: twitter_link,
  };
}
// validate phoneNumber
function validationFirstDigit(number: string) {
  console.log("first", number);
  const firstDigit = parseInt(number.toString()[0]);
  return firstDigit >= 6 && firstDigit <= 9;
}
function validateMobileNumberOnInput(
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  event: any,
  setMobileNumber: React.Dispatch<React.SetStateAction<string>>
) {
  setError(false);
  //fetch input
  let phoneInput = event.target;

  const inputData = phoneInput.value.slice(0, 10);
  phoneInput.value = inputData;
  setMobileNumber(inputData);
}

export {
  image_download_count,
  spin_wheel_count,
  image_share_count,
  upload_count,
  video_share_count,
  quiz_share_count,
  getQueryParam,
  generateCertificate,
  generateShareLinks,
  validationFirstDigit,
  validateMobileNumberOnInput,
};
