declare global {
    // Main reducer
    interface AppStore {
      app: AppStoreState;
    }
  
    // App Reducer
    interface AppStoreState {
      user: any;
      isLoggedIn: Boolean;
      language: String;
    }
  
    // Interfaces
    interface User {
      name: String;
      email: String;
      phone: String;
      photo: String;
    }
  }
  
  export {};