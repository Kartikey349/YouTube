const GOOGLE_API_KEY = "AIzaSyADSHOY0nRVwBcK7lybmx9YxUX9chPu5Ww";

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=US&key=" + GOOGLE_API_KEY;


export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_VIDEO_BYID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=${GOOGLE_API_KEY}&id=`;

export const CATEGORY_API = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${GOOGLE_API_KEY}`