import { NativeModules } from "react-native";

const { Multibundle: MultibundleNativeModule } = NativeModules;

class Multibundle {
  loadStartTimestamp = {};
  print() {}

  enableLogging() {
    this.print = (...args) => {
      console.log("Multibundle:", ...args);
    };
  }

  disableLogging() {
    this.print = () => {};
  }

  isBundleLoaded(bundleName) {
    return Boolean(global[bundleName]);
  }

  getBundleExport(bundleName) {
    if (!this.isBundleLoaded(bundleName)) {
      throw new Error(`Bundle ${bundleName} was not loaded`);
    }
    return global[bundleName].default;
  }

  async loadBundle(bundleName, sync = true) {
    this.loadStartTimestamp[bundleName] = Date.now();
    const isBundleLoaded = this.isBundleLoaded(bundleName);

    this.print(
      `request to load '${bundleName}' received at '${new Date(
        this.loadStartTimestamp[bundleName]
      ).toLocaleTimeString()}'`
    );

    if (isBundleLoaded) {
      this.print(`bundle '${bundleName}' already loaded`);
      return null;
    }

    if (!isBundleLoaded) {
      this.print(
        `bundle '${bundleName}' not available - loading ${
          sync ? "synchronously" : "asynchronously"
        }`
      );
      const bundleId = process.env.HAUL_BUNDLES[bundleName];

      if (typeof bundleId !== "number") {
        throw new Error(`Cannot find bundle id for bundle name ${bundleName}`);
      }

      await MultibundleNativeModule.loadBundle(bundleName, bundleId, sync);

      return bundleId;
    }
  }
}

export default new Multibundle();
