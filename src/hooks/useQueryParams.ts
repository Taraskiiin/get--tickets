/* eslint-disable react-hooks/rules-of-hooks */
import { useLocation } from 'react-router-dom';

export const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};
