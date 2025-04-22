const { RtcTokenBuilder, RtcRole } = require('agora-token');

class AgoraService {
  constructor() {
    this.tokens = {}; // { channelName: { token, expiresAt } }
  }

  generateRTCToken(channelName, uid) {
    const appId = process.env.APP_ID;
    const appCertificate = process.env.APP_CERTIFICATE;
    const expirationTime = 3600; 
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTime;

    // Convert UID to number (Agora requirement)
    const numericUid = isNaN(uid) ? 
      parseInt(uid.toString().replace(/\D/g, '').slice(-10), 10) || 0 : 
      uid;

    const token = RtcTokenBuilder.buildTokenWithUid(
      appId,
      appCertificate,
      channelName,
      numericUid,
      RtcRole.PUBLISHER,
      privilegeExpiredTs
    );

    const tokenData = {
      token,
      expiresAt: new Date(privilegeExpiredTs * 1000), 
      generatedAt: new Date()
    };

    // Store token details
    this.tokens[channelName] = tokenData;

    return tokenData;
  }

  // Get existing valid token or generate new one if expired
  getValidToken(channelName, uid) {
    const existingToken = this.tokens[channelName];
    const now = new Date();

    if (existingToken && existingToken.expiresAt > now) {
      return existingToken;
    }
    return this.generateRTCToken(channelName, uid);
  }

  // Optional: Cleanup expired tokens
  cleanupExpiredTokens() {
    const now = new Date();
    Object.keys(this.tokens).forEach(channelName => {
      if (this.tokens[channelName].expiresAt <= now) {
        delete this.tokens[channelName];
      }
    });
  }
}

module.exports = new AgoraService();