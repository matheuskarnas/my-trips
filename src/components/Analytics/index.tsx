/* eslint-disable @next/next/next-script-for-ga */
const Analytics = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-1M5SBYWR7V"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING}');
      `
      }}
    />
  </>
)

export default Analytics
