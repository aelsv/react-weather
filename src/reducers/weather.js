const FETCH_WEATHER = 'FETCH_WEATHER';
const FETCH_FAILURE = 'FETCH_FAILURE';

const API_KEY = '160fbb3243196b25c6802250eb628e96';
const rootURL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

const initialState = {
  queries: [],
  error: '',
  // isFething: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      const { id, name, sys, main, weather, error } = action.payload;
      return {
        ...state,
        error,
        queries: [{ id, name }, ...state.queries],
        briefDescription: weather[0].description,
        city: name,
        country: sys.country,
        temperature: {
          current: main.temp,
          min: main.temp_min,
          max: main.temp_max,
        },
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const fetchWeather = city => dispatch => ({
  types: [FETCH_WEATHER, FETCH_FAILURE],
  promise: fetch(`${rootURL}&q=${city}&units=metric`).then(res =>
    res
      .json()
      .then(json => ({
        ok: res.ok,
        json,
      }))
      .then(({ ok, json }) => {
        if (ok) {
          dispatch({
            type: FETCH_WEATHER,
            payload: json,
          });
        } else {
          dispatch({
            type: FETCH_FAILURE,
            payload: json.message || 'Something went wrong!',
          });
        }
      })
  ),
});
