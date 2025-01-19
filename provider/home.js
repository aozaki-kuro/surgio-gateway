module.exports = {
  type: 'custom',
  nodeList: [
    {
      enable: true,
      type: 'shadowsocks',
      nodeName: '🏠 Home',
      hostname: 'example.com',
      port: 12345,
      method: 'aes-256-gcm',
      password: 'example.password',
      udpRelay: true,
      testUrl: 'http://connectivitycheck.platform.hicloud.com/generate_204',
    },
  ],
}
