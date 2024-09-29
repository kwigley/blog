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
        },
        cloudflare: "5.39.1",
      },
    };
  },
  async run() {
    new sst.aws.Nextjs("Site", {
      domain: (() => {
        if ($app.stage === "production") {
          return {
            name: "kylewigs.com",
            redirects: ["www.kylewigs.com"],
            dns: sst.cloudflare.dns({
              zone: "1b803a1637ea5109fe7e3f2141291a96"
            })
          }
        }
      })()
    });
  },
});
