// background:
// "url(https://www.bjp.org/themes/bjp/images/bjplivebackground.jpeg) 50% 50% no-repeat",
// backgroundSize: "cover",

import BJPLiveWrapperDescendant from "./BJPLiveDescendant";

// height: "70vh",
export default async function BJPLive({
  lang,
  title,
}: {
  lang: string;
  title: string;
}) {
  let playBackId = "";
  try {
    // let url = "";
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/get_link");
    console.log("bjp live", response, response.status, response.ok);
    if (!response.ok) throw new Error("Network response was not ok");

    const responseData = await response.json();
    console.log("bjp live", responseData);

    playBackId = responseData.url.split("="); //https://www.youtube.com/watch?v=pLhF7VxESGw
    playBackId = playBackId[1];
    console.log("playback id", playBackId);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    // https://www.youtube.com/watch?v=pLhF7VxESGw
    // let a = "";
    let url = "https://youtu.be/pLhF7VxESGw";
    playBackId = "pLhF7VxESGw";
  }
  return (
    <>
      <BJPLiveWrapperDescendant playBackId={playBackId} title={title} />
    </>
  );
}

// https://www.youtube-nocookie.com/embed/pLhF7VxESGw?rel=0&showinfo=0

// live_video();

// function live_video() {
//     fetch("https://ekbaarphirsemodisarkar.com/api/v1/get_link", {
//             method: "GET"
//         })
//         .then(function (response) {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data.url);

//             let b = data.url.split('=');
//             console.log(b[1]);
//             document.getElementById("live_video").innerHTML =
//                 '<iframe src="https://www.youtube-nocookie.com/embed/' + b[1] +
//                 '?rel=0&amp;showinfo=0" width="100%" height="450" frameborder="0"></iframe>';

//             //                 document.getElementById("live_video").innerHTML =
//             // '<iframe src="https://www.youtube-nocookie.com/embed/' + +
//             // '?rel=0&amp;showinfo=0" width="100%" height="450" frameborder="0"></iframe>';

//             //                        let a = "https://youtu.be/pLhF7VxESGw";

//             //                     console.log(a.split("/"));

//             //                     let b = a.split('=');
//             //                     console.log(b[1]);

//             //                     let c = a.split("/");
//             //                     console.log(c[2]);

//             //                     if (c[2] == "www.youtube.com") {
//             //                         let b = a.split('=');
//             //                         console.log(b[1]);
//             //                         document.getElementById("live_video").innerHTML =
//             //                             '<iframe src="https://www.youtube-nocookie.com/embed/' + b[1] +
//             //                             '?rel=0&amp;showinfo=0" width="100%" height="450" frameborder="0"></iframe>';
//             //                     }
//             //                     else if(c[2] == "youtu.be"){
//             // console.log("ssss");
//             //                         // let d=a.split("/");
//             //                         document.getElementById("live_video").innerHTML =
//             //                             '<iframe src="https://www.youtube-nocookie.com/embed/' + d[3] +
//             //                             '?rel=0&amp;showinfo=0" width="100%" height="450" frameborder="0"></iframe>';

//             //                     }
//         })
//         .catch(function (error) {
//             console.error("There was a problem with the fetch operation:", error);

//             let a = "https://youtu.be/pLhF7VxESGw";

//             console.log(a.split("/"));

//             let b = a.split('=');
//             console.log(b[1]);

//             let c = a.split("/");
//             console.log(c[2]);

//             if (c[2] == "www.youtube.com") {
//                 let b = a.split('=');
//                 console.log(b[1]);
//                 document.getElementById("live_video").innerHTML =
//                     '<iframe src="https://www.youtube-nocookie.com/embed/' + b[1] +
//                     '?rel=0&amp;showinfo=0" width="100%" height="450" frameborder="0"></iframe>';
//             }

//             // else if(c[2] == ""){

//             // }

//         });
// }
