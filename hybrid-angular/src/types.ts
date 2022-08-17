export interface HostedAppState {
  baseUrl: string;
  user: {
    id: string;
    name: string;
    email: string;
  }
}

export interface HostedRouter {
  push: (url: string) => void;
  replace: (url: string) => void;
}
