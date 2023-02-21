export const baseService = {};

baseService.post = async (url, endpoint, contractObj) => {
  try {
    const response = await fetch(`${url}/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(contractObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error.status);
  }
};

baseService.get = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error.status);
  }
};
