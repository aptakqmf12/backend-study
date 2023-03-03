module.exports = {
  apps: [
    {
      name: "app",
      script: "./server.js",
      instance: 0,
      exec_mode: "cluster",
    },
  ],
};
