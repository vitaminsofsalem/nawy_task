import api from "../api";

export async function fetchApartmentDetails(id) {
  try {
    const result = await api.get(`/apartment/${id}`);
    console.log("Fetched apartment details");
    return result.data;
  } catch (err) {
    console.log("Error occurred when fetching apartment details:", err);
  }
}
