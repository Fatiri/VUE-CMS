import axios from 'axios'
import {
  ResponseMessage,
  ResponseMessageValidate
} from "../misc/response";

// const DOMAIN = process.env.VUE_APP_DOMAIN_URL;
const DOMAIN = '';

export async function AxiosPOST(path, payload) {
  try {
    let res = await axios
      .post(
        `${DOMAIN}${path}`, payload, {
          headers: {
            Authorization: "Bearer " + getToken()
          }
        }
      )
    if (res.status === 200) {
      return res.data
    }
  } catch (err) {
    ResponseMessage('error', err.response.data.message.id)
  };
}

export async function AxiosPUT(path, id, payload) {
  const data = await ResponseMessageValidate("Anda yakin ingin mengupdate data ?", "Update")
  if (data) {
    try {
      let res = await axios
        .put(
          `${DOMAIN}${path}${id}`, payload, {
            headers: {
              Authorization: "Bearer " + getToken()
            }
          }
        )
      if (res.status === 200) {
        return ResponseMessage('success', 'Data berhasil diupdate')
      }
    } catch (err) {
      ResponseMessage('error', err.response.data.message.id)
    };
  }
}

export async function AxiosGET(path, ID) {
  try {
    let res = await axios
      .get(
        `${DOMAIN}${path}${ID}`, {
          headers: {
            Authorization: process.env.VUE_APP_TOKEN,
          }
        }
      )
    if (res.status === 200) {
      return res.data.message
    }
  } catch (err) {
    ResponseMessage('error', err.response.data.message.id)
  };
}

export async function AxiosGETS(path, payload) {
  let params = ""
  for (var key in payload) {
    if (params != "") {
      params += "&";
    }
    params += key + "=" + encodeURIComponent(payload[key]);
  }

  var URL = path + "?" + params;
  try {
    let res = await axios
      .get(
        `${DOMAIN}${URL}`, {
          headers: {
            Authorization: 'Bearer ',
          }
        }
      )
    if (res.status === 200) {
      return res.data.data
    }
  } catch (err) {
    ResponseMessage('error', err.response.data.message.id)
  };
}

export async function AxiosDELETE(path, ID) {
  const data = await ResponseMessageValidate("Anda yakin ingin menghapus data ?", "Delete")
  if (data) {
    try {
      let res = await axios
        .post(
          `${DOMAIN}${path}${ID}`, "", {
            headers: {
              Authorization: "Bearer " + getToken(),
            }
          }
        )
      if (res.status === 200) {
        ResponseMessage('success', 'Data berhasil dihapus')
        return true
      }
    } catch (err) {
      ResponseMessage('error', err.response.data.message.id)
    };
  }
}
