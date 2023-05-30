const nextTranslate = require("next-translate");

// noinspection JSValidateTypes,JSUnusedGlobalSymbols: IDE screams for no reason
module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
      cssProp: true,
    },
  },
  async redirects() {
    return [
      {
        source: "/learn",
        destination: "/learn/war",
        permanent: false,
      },
    ]
  },
});
