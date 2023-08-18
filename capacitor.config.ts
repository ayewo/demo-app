import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ee.forgr.demoapp',
  appName: 'demoApp',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    CapacitorUpdater : {
      autoUpdate: true,
      version: "0.0.1",
      directUpdate: true
    }
  }
};

export default config;
