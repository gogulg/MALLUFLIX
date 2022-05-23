//Here we include all urls for the component

import { API_KEY } from "./constant";

export const Orginals = `/discover/movie?api_key=${API_KEY}&with_original_language=ml&page=9`
export const Drama = `/discover/movie?api_key=${API_KEY}&with_original_language=ml&page=2`
export const Comedy = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=35&with_original_language=ml&with_watch_monetization_types=free`
export const Crime  = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80&with_original_language=ml&with_watch_monetization_types=free`
export const Actions = `discover/movie?api_key=fa3f14157f9ffda08da13922ef5bf0d4&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&with_genres=28&with_original_language=ml&with_watch_monetization_types=free`
export const Romance = `/discover/movie?api_key=fa3f14157f9ffda08da13922ef5bf0d4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10749&with_original_language=ml&with_watch_monetization_types=free`