module.exports = {
  server: {
    port: 8080
  },
  mediasoup: {
    // mediasoup Server settings.
    logLevel: 'warn',
    logTags: [
      'info',
      'ice',
      'dtls',
      'rtp',
      'srtp',
      'rtcp',
      'rbe',
      'rtx'
    ],
    rtcIPv4: '10.130.50.227',
    rtcIPv6: true,
    rtcAnnouncedIPv4: '165.22.107.186',
    rtcAnnouncedIPv6: null,
    rtcMinPort: 40000,
    rtcMaxPort: 49999,
    // mediasoup Room codecs.
    mediaCodecs: [
      {
        kind: 'audio',
        name: 'opus',
        clockRate: 48000,
        channels: 2,
        parameters: {
          useinbandfec: 1
        }
      },
      {
        kind: 'video',
        name: 'VP8',
        clockRate: 90000
      },
      /*{
        kind: 'video',
        name: 'H264',
        clockRate: 90000,
        parameters: {
          'packetization-mode': 1
        }
      }*/
    ],
    // mediasoup per Peer max sending bitrate (in bps).
    maxBitrate: 500000
  }
};
