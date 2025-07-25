module.exports = {
  apps: [
    {
      cwd: './',
      name: 'CloudFinanceWeb',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      out_file: './logs/nuxt-app.out.log',
      error_file: './logs/nuxt-app.err.log',
    }
  ]
}
