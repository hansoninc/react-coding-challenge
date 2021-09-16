export default function () {
  return {
    getData: async() => {
      let url = 'https://random-data-api.com/api/device/random_device?size=20';
      try {
        let res = await fetch(url);
        return await res.json();
      } catch (error) {
        console.log(error);
      }
    }
  }
}
