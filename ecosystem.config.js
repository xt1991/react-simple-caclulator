module.exports = {
  apps: [
    {
      name: 'SimpleCaculator',
      script: 'npx',
      interpreter: 'none',
      args: 'serve build -s -l 5051',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
