export default function () {
  return {
    getDevices: async () => {
      return await fetch('https://random-data-api.com/api/device/random_device?size=20');
    },
  };
}
