import axios from 'axios';
import { BASE_URL } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const getTimeline = async (id) => {
  const response = await axios.get(
    `${BASE_URL}timelines/${id}`,
  );

  return response.data;
};
