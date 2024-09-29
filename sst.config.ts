/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "blog",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          profile: "personal",
        }
      },
    };
  },
  async run() {
    new sst.aws.Nextjs("Site");
  },
});
