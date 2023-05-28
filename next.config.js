const nextTranslate = require("next-translate");

// noinspection JSValidateTypes,JSUnusedGlobalSymbols: IDE screams for no reason
module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      cssProp: true,
    },
  },
  async redirects() {
    return [
      {
        source: "/learn",
        destination: "/learn/post-office",
        permanent: false,
      },
    ]
  },
});
