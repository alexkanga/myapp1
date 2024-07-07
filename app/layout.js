import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="plugins/bootstrap/bootstrap.min.css" />

        <link rel="stylesheet" href="plugins/fontawesome/css/all.min.css" />

        <link rel="stylesheet" href="plugins/animate-css/animate.css" />

        <link rel="stylesheet" href="plugins/slick/slick.css" />
        <link rel="stylesheet" href="plugins/slick/slick-theme.css" />

        <link rel="stylesheet" href="plugins/colorbox/colorbox.css" />

        <link rel="stylesheet" href="css/style.css" />
      </head>
      <body>
        {children}
        {/* Javascript Files================================================== */}
        {/* initialize jQuery Library */}
        <Script src="plugins/jQuery/jquery.min.js" beforeInteractive ></Script>
        {/* Bootstrap jQuery */}
        <Script src="plugins/bootstrap/bootstrap.min.js" defer></Script>
        {/* Slick Carousel */}
        <Script src="plugins/slick/slick.min.js" defer></Script>
        <Script src="plugins/slick/slick-animation.min.js" defer></Script>
        {/* Color box */}
        <Script src="plugins/colorbox/jquery.colorbox.js" defer></Script>
        {/* shuffle */}
        <Script src="plugins/shuffle/shuffle.min.js" defer></Script>
        {/* Google Map API Key*/}
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcABaamniA6OL5YvYSpB3pFMNrXwXnLwU"
          defer
        ></Script>
        {/* Google Map Plugin*/}
        <Script src="plugins/google-map/map.js" defer></Script>
        {/* Template custom */}
        <Script src="js/script.js" defer></Script>
      </body>
    </html>
  );
}
