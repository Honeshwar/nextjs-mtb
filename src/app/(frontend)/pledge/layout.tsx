import { Inter } from "next/font/google";
import Head from "next/head";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <Head>
        {/* <!-- Required meta tags --> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" property="og:title" content="" />
        <meta name="description" property="og:description" content="" />
        <meta name="image" property="og:image" content="" />
        <meta property="og:url" content="https://mahathugbandhan.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:image" content="" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title id="title" className="translate">
          महाठगबंधन
        </title>

        {/* Add your script tag here , this function add as text script tag*/}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({
                "gtm.start": new Date().getTime(),
                event: "gtm.js"
              });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-MHZNQBKL");
          `,
          }}
        />
      </Head>
      <body className={inter.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MHZNQBKL" height="0" width="0"
              style="display: none; visibility: hidden"></iframe>
        `,
          }}
        />

        {/* <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script> */}
        {/* <script src="translations.js"></script>
<script src="join.js"></script> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: ` $(document).ready(function () {
      let e = new URLSearchParams(window.location.search),
        s = e.get("lang") || "hi",
        n = ["bn", "te", "as", "gu", "kn", "ml", "or", "ta", "pa"].includes(
          s
        );
      n &&
        ($(window).width() > 768 ?
          ($(".form_head").css("font-size", "28px"),
            $(".form_head").css("line-height", "1.4em")) :
          ($(".form_head").css("font-size", "25px"),
            $(".form_head").css("line-height", "1.4em")));
    });`,
          }}
        /> */}
        {children}
        {/* <script src="./s.js"> </script> */}
      </body>
    </html>
  );
}
