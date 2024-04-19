import axios from 'axios';

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
const KEY = "Rzjb11MIGphoB4QB6Wt31UHKUWjReCwwYsGe250Sv4k";

export const fetchArcticles = async (searchQuery) => {
    const response = await axios.get("", {
        params: {
            query: searchQuery,
            client_id: KEY,
        }
    })

    return response.data.results;
}

