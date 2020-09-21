import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer jVpPBH_nwLoavdTbieETu8sq2cDwhkE1R8ZilaGZ5dFYPdubj_J1em7CLPdpWFXt0DHKUZKTXEFi6lydc6VWVm6Mg30VeDeJTTFsw-iyoFbm0MwjJWC4nmlMYl0aXXYx",
  },
});
