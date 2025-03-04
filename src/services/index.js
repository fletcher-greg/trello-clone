import axios from "axios";

// export const register = form => {
//   axios({
//     method: "post",
//     url: "http://localhost:3001/api/auth/register",
//     body: {
//       ...form
//     }
//   });
// };
let api = axios.create({
  baseURL: "/api"
});
export const register = async formData => {
  try {
    console.log(formData);
    let { data } = await api.post("/auth/register", {
      ...formData
    });

    console.log(data);
    return data;
  } catch (err) {
    console.log(err);

    return;
  }
};
export const login = async formData => {
  console.log(formData);
  try {
    let { data } = await api.post("/auth/login", {
      ...formData
    });

    console.log(data);
    return data;
  } catch (err) {
    console.log(err);

    return;
  }
};

export const subscribe = async email => {
  console.log(email);
  try {
    let message = await api.post("/auth/subscribe", {
      email: email
    });
    return message.data ? true : false;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const getInitData = async () => {
  try {
    let data = await api.get("/auth/user-data");
    console.log(data.data.cardData);

    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateDB = async data => {
  let result;
  try {
    result = await api.post("/auth/update-user-list", { data });

    return { message: result.data.message, payload: data.payload, id: data.id };
  } catch (err) {
    console.log(`custom error ${err}`);
    console.log(data);
    return {
      message: result.data.message,
      payload: data.payload,
      id: data.id,
      err: "disconnected"
    };
  }
};
