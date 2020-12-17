import axios from 'axios';
import { BASE_URL } from '../constants';

export const getTimeline = async (id) => {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';

  const response = await axios.get(
    `${BASE_URL}timelines/${id}`,
  );

  return response.data;
};

export const updateTimeline = async (data) => {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';

  const response = await axios.patch(
    `${BASE_URL}timelines/${data.id}`,
    { state: [data.state] },
  );

  return response.data;
};
