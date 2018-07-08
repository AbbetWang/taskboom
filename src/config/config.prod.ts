export = {
    knexConfig: {
      client: "mysql",
      connection: {
        host: "140.143.194.238",
        user: "istar",
        password: "iStar12345@",
        database: "task"
      },
      useNullAsDefault: true
    },
    port: process.env.PORT || 3000
  } ;