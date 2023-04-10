import axios from "axios";
import { ApiEndpoints } from "../api/api";

export const getUserLoggedActivity = () => {
  return axios.get(ApiEndpoints.USER.USER_LOGGED_ACTIVITY, {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWM0ZTU0YjYyZTMxZWFiODc3ODcwMzJlYTE3MDJiNDQ1NzJhNzczMjlhMmFiZGNiMGZlODQyMjI5MDI2YmQyYzNkZjBlZTQxN2UwNDBkNzMiLCJpYXQiOjE2ODA0MzQxODQuMDYwNzQ5LCJuYmYiOjE2ODA0MzQxODQuMDYwNzU4LCJleHAiOjE3MTIwNTY1ODIuODAxMTE0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.UBxeNKg53hPuhAv_6YYixYTBjyRKc39y5LZlwwQWn2NQacKNuLTOVeCRUtb24d1c0_genxw3_TaWvCaLQSvZCpc30l1tPoFNgWOjgeTfIb9jcvgw6SvIUFLOzyAtgvKYb_B0OiKZ-l3ZkL9xEyDSG303oXT5JzHJrWpMpFJNZPAeiOlSzjo3R4YYz6k9vdGY8Y6VDN2vp4JY8Z9J4kN_JocKihTuLc4VLN6cPXaQ9zboQLfAdT3Xr9xX3FeZ5oKxNiV5sumHI7aZDh9_bvvqurVRZgQ4aY8cEeTcumSqYUyZCRObR3NbT-gsMC-Qv9q37AAKVz0Ry9PeBRZPAAL0sjdLCURpm5hU9YpIPDtP-aCjFB70pdnQ3dftO7EEGUlZMbupr3l_BSKl4aVjnkk6odtjDzXT4h1MtsSwSxbs989mXffNKc-D_mQCFkJQgCDQTQzNsspJy1wjQnrPitrWmJPHC6SATY1frLwbKkl_6gSFQFEakVBp12ibneLlFQuZSIrPvPEFIOCdb_Q98Shfz-lrvtw3cgFoAKZmjVb687fObR-P0u1KNtV7iOqOnvkdqVQmRCs5P4ntPsdgrdQIJ3WGljdKQLOS7rxxHDDecMF4YcurdshthkJeXb40LxG7vGQ2dCNbkv41WNlbsT3lIYR1jBEjJlbDRAcCVaO5Um0"
    }
  });
};

export const getUserLevel = () => {
  return axios.get(ApiEndpoints.USER.USER_LEVEL, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  });
};
