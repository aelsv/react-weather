const FETCH_WEATHER = 'FETCH_WEATHER';

const API_KEY = '160fbb3243196b25c6802250eb628e96';

const rootURL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

const initialState = {
  queries: [],
  temperature: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_WEATHER:
      const { id, name, sys, main, weather /* , cod, message */ } = action.payload;
      return {
        ...state,
        // ...action.payload,
        queries: !!id && !!name ? [{ id, name }, ...state.queries] : [...state.queries],
        icon: !!weather ? weather[0].icon : '',
        briefDescription: !!weather ? weather[0].description : '',
        city: name,
        country: !!sys ? sys.country : '',
        temperature: !!main
          ? {
              current: main.temp,
              min: main.temp_min,
              max: main.temp_max,
            }
          : {},
      };
    default:
      return state;
  }
};

export const fetchWeather = city => dispatch => ({
  // const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  // return {
  type: FETCH_WEATHER,
  // promise: fetch(URL)
  promise: fetch(`${rootURL}&q=${city}&units=metric`)
    .then(res => res.json())
    .then(json =>
      dispatch({
        type: FETCH_WEATHER,
        payload: json,
      })
    ),
  // .catch(error => console.log('error:', error)),
  // };
});
