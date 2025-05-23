import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAccessToken = (): string | null => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("access_token="))
    ?.split("=")[1] || null;
};

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

export const createMember = async (data: {
  name: string
  role: string
  division: string
  year: string
  status: string
}) => {
  return await api.post("/team/create", data)
}

export const fetchAllMembers = async () => {
  const res = await api.get("/team/all");
  return res.data.data;
};

export const updateMember = async (id: number, data: {
  name: string
  role: string
  division: string
  year: string
  status: string
}) => {
  return await api.patch(`/team/update/${id}`, data)
}

export const deleteMember = async (id: number) => {
  return await api.delete(`/team/delete/${id}`)
}