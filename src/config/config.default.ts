export = {
      knexConfig: {
        client: 'mysql',
        connection: {
          host: '127.0.0.1',
          user: 'root',
          password: '',
          database: 'test'
        },
        useNullAsDefault: true
      },
      port: process.env.PORT || 4000
    } 