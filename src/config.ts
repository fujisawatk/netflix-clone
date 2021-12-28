type _Config = {
  apiKey: string;
};

const Config: _Config = {
  apiKey: process.env.REACT_APP_API_KEY || "",
};

export default Config;
