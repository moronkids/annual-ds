module.exports = (shipit) => {
  require("shipit-deploy")(shipit);
  require("shipit-shared")(shipit);

  const appName = "annual-landing-next";

  shipit.initConfig({
    default: {
      deployTo: "/var/www/annual-landing-next",
      repositoryUrl: "git@bitbucket.org:dsn-js/annual-landing-next.git",
      keepReleases: 3,
      //   key: "~/.ssh/config",
      branch: "feature/sulis",
    },
    staging: {
      servers: "root@137.59.126.106:8039",
    },
  });

  //   shipit.blTask("mv:dir", async () => {
  //     const command = `cp -rf tmp*/* ${shipit.releasePath} && rm -rf tmp*`;
  //     await shipit.remote(`cd ${shipit.releasePath} && ${command}`);
  //   });

  shipit.blTask("npm:install", async () => {
    await shipit.remote(`cd ${shipit.releasePath} && npm install`);
  });

  shipit.blTask("build:app", async () => {
    const command = "npm run build";
    await shipit.remote(`cd ${shipit.releasePath} && ${command}`);
  });

  shipit.blTask("pm2:start", async () => {
    const command = `pm2 start npm --name "${appName}" -- start`;
    await shipit.remote(`pm2 delete -s ${appName} || :`);
    await shipit.remote(`cd ${shipit.releasePath} && ${command}`);
  });

  shipit.on("updated", async () => {
    shipit.start("npm:install", "build:app");
  });

  shipit.on("published", () => {
    shipit.start("pm2:start");
  });
};
