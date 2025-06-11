import axios from "axios";

export const getAccessToken = (): string | null => {
  return (
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1] || null
  );
};

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
      delete config.headers['Content-Type'];
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

// member
export const createMember = async (data: { name: string; role: string; division: string; year: string; status: string }) => {
  return await api.post("/team/create", data);
};

export const fetchAllMembers = async () => {
  const res = await api.get("/team/all");
  return res.data.data;
};

export const updateMember = async (
  id: number,
  data: {
    name: string;
    role: string;
    division: string;
    year: string;
    status: string;
  }
) => {
  return await api.patch(`/team/update/${id}`, data);
};

export const deleteMember = async (id: number) => {
  return await api.delete(`/team/delete/${id}`);
};

// event
export const createEvent = async (data: FormData) => {
  return await api.post("/event/create", data);
};

export const fetchAllEvents = async () => {
  const res = await api.get("/event/all");
  return res.data.data;
};

export const updateEvent = async (id: number, data: FormData) => {
  return await api.patch(`/event/update/${id}`, data);
};

export const deleteEvent = async (id: number) => {
  return await api.delete(`/event/delete/${id}`);
};

// gallery
export const createGallery = async (data: FormData) => {
  return await api.post("/gallery/create", data);
};

export const fetchAllGalleries = async () => {
  const res = await api.get("/gallery/all");
  return res.data.data;
};

export const updateGallery = async (id: number, data: FormData) => {
  return await api.patch(`/gallery/update/${id}`, data);
};

export const deleteGallery = async (id: number) => {
  return await api.delete(`/gallery/delete/${id}`);
};
