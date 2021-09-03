export type Device = {
  id: number,
  uid: string,
  build_number: number,
  manufacturer: string,
  model: string,
  platform: string,
  serial_number: string,
  version: number
};

const DEVICE_API_URL = "https://random-data-api.com/api/device/random_device?size=20";

export default function() {
	return {
    getDashboardData: async function(): Promise<Device[]> {
		  try {
		    let response = await fetch(DEVICE_API_URL);
		    let json = await response.json();
		    return json;
      } catch(e) {
		    throw new Error("Unable to load data!");
      }
    }
	}
}
