import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ee.forgr.demoapp',
  appName: 'demoApp',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    CapacitorUpdater : {
      version: "1.0.2",
      autoUpdate: true,
    }
  }
};

export default config;
