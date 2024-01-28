const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "kartikmahajan5688",
        mongodb_password: "CQ53Z7T3o2Wb2BHP",
        mongodb_clustername: "cluster0",
        mongodb_database: "nextjs-blogs-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "kartikmahajan5688",
      mongodb_password: "CQ53Z7T3o2Wb2BHP",
      mongodb_clustername: "cluster0",
      mongodb_database: "nextjs-blogs",
    },
  };
};
