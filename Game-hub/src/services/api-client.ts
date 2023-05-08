import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '359c0780f4d54d7e906f176a003921dd',
  },
});

