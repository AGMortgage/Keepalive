import { dashboard } from "@/types/dashboard";
import { apiClient } from "../apiClient";

import { search } from "@/types/dashboard"

export const Summary = {
  getDashboard: async (): Promise<dashboard> => {
    const res = await apiClient.get("/Dashboard");
    return res.data;
  },

  getServices: async (): Promise<search[]> => {
    const res = await apiClient.get("/Services");
    return res.data;
  },
  getCategories: async(): Promise<string[]> =>{
    const res = await apiClient.get("/Services/categories");
    return res.data;
  },
  getByCategories: async(category: string): Promise<search[]>  =>{
    const res = await apiClient.get(`/Services/category/${category}`);
    
    return res.data;
  }
};

// export const Statistics = () => {
//   const [stats, setStats] = useState<dashboard | null>(null);
//   useEffect(() => {
//     const fetchSummary = () => {
//       Summary.getSummary().then(setStats);
//     };
//     fetchSummary();
//     const intervalId = setInterval(fetchSummary, 10000);
//     return () => clearInterval(intervalId);
//   }, []);
//   return stats;
// };
// export const Services = () => {
//   const [services, setServices] = useState<search[]>([]);

//   useEffect(() => {
//     const fetchServices = () => {
//       Summary.getServices().then(setServices);
//     };

//     fetchServices();

//     const intervalId = setInterval(fetchServices, 10000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return services;
// };
// export const fetchCategory =async () =>{
//    const Categories = await Summary.getCategories()
//    const data: [] = Categories
//    return data;
// };