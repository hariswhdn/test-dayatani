import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const farmerSlice = createSlice({
  name: "farmer",
  initialState: {
    loading: false,
    farmers: [],
    farmer: {},
    error: null,
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setFarmers: (state, { payload }) => {
      state.loading = false;
      state.farmers = payload;
      state.error = null;
    },
    setFarmer: (state, { payload }) => {
      state.loading = false;
      state.farmer = payload;
      state.error = null;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const getFarmers =
  ({ offset = 0, limit = 10 }) =>
  async (dispatch) => {
    await dispatch(setLoading(true));
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/farmers?offset=${offset}&limit=${limit}`
      );
      if (response?.data?.farmers?.length > 1) {
        await dispatch(setFarmers(response.data?.farmers));
      }
      await dispatch(setLoading(false));
    } catch (error) {
      await dispatch(setError(error?.response?.status || 500));
    }
  };

export const getFarmer = (id) => async (dispatch) => {
  await dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/farmers/${id}`
    );
    if (response?.data) {
      await dispatch(setFarmer(response.data));
    }
    await dispatch(setLoading(false));
  } catch (error) {
    await dispatch(setError(error?.response?.status || 500));
  }
};

export const addFarmer = (data) => async (dispatch) => {
  await dispatch(setLoading(true));
  try {
    await axios.post(`${import.meta.env.VITE_BASE_URL}/farmers`, data, {
      auth: {
        username: "dayatani",
        password: import.meta.env.VITE_PASSWORD,
      },
    });
    await dispatch(setLoading(false));
    return true;
  } catch (error) {
    await dispatch(setError(error?.response?.status || 500));
  }
};

export const editFarmer = (data) => async (dispatch) => {
  await dispatch(setLoading(true));
  try {
    await axios.put(
      `${import.meta.env.VITE_BASE_URL}/farmers/${data.id}`,
      data,
      {
        auth: {
          username: "dayatani",
          password: import.meta.env.VITE_PASSWORD,
        },
      }
    );
    await dispatch(setLoading(false));
    return true;
  } catch (error) {
    await dispatch(setError(error?.response?.status || 500));
  }
};

export const deleteFarmer = (id) => async (dispatch) => {
  await dispatch(setLoading(true));
  try {
    await axios.delete(`${import.meta.env.VITE_BASE_URL}/farmers/${id}`, {
      auth: {
        username: "dayatani",
        password: import.meta.env.VITE_PASSWORD,
      },
    });
    await dispatch(setLoading(false));
    return true;
  } catch (error) {
    await dispatch(setError(error?.response?.status || 500));
  }
};

export const { setLoading, setFarmers, setFarmer, setError } =
  farmerSlice.actions;
export default farmerSlice.reducer;
