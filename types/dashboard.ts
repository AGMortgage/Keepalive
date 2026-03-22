

export interface dashboard {
  totalServices: number
  totalChecks: number
  latestChecks: latestCheck[]
  services: Service[];
}
export type latestCheck = {
  id: string
  service_id: string
  status: string
  response_time: number
  status_code: number | null
  error_message: string | null
  checked_at: string
  service: Service
}
export type search = {
  id: number;
  name: string;
  status: string;
  category: string;
  last_ping: string;
  response_time: string;
 url: string;
 
}
export type Service = {
  id: string
  name: string
  url: string
  category: string
  status: string
  response_time: number
  last_ping: string
  is_active: boolean
  created_at: string
  updated_at: string
  pingHistories: []
}
type User = {
  id: number;
  name: string;

};

export type filter = {
  data: User[];
};

