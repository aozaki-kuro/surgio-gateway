module.exports = {
  apps: [
    /**
     * Surgio Subscription Management
     */
    {
      name: 'surgio',
      script: 'node gateway.js',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      autorestart: true,
      cwd: '.',
      watch: ['surgio.conf.js', './**/*.js', './**/*.tpl'],
      ignore_watch: ['node_modules', 'dist'],
      watch_options: {
        usePolling: true,
      },
      env: {
        TZ: 'Asia/Shanghai',
      },
    },
  ],
}
