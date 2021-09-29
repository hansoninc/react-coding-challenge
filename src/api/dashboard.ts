export default function() {

	return {
		getDashboardData: async () => {
      const apiUrl = "https://random-data-api.com/api/device/random_device?size=20";
      // Gets data from API endpoint
      const result = await fetch(apiUrl);
      // Gets the raw json data from the API responce
      const json = await result.json();
      return json;
		},
	}
}
