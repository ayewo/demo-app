import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ee.forgr.demoapp',
  appName: 'demoApp',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    CapacitorUpdater : {
      version: "1.0.0",
      autoUpdate: true,
      partialUpdate: true,
      partialUpdateBaseVersion: "1.0.0",

      // these setttings are only valid for local development with the CLI
      localS3: true,
      localHost: "http://localhost.proxyman.io:5173",
      localWebHost: "http://localhost.proxyman.io:5173",
      localSupa: "http://localhost.proxyman.io:54321",
      localSupaAnon: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0",

      // these URLs are only valid for local development with the plugin
      updateUrl: "https://localhost.proxyman.io:8881/updates",
      statsUrl: "https://localhost.proxyman.io:8881/stats",
      channelUrl: "https://localhost.proxyman.io:8881/channel_self"
    }    
  }
};

export default config;
