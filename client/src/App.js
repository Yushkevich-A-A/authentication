import React from "react";
import AuthProvider from "./Providers/AuthProvider/AuthProvider";
import PageProvider from "./Pages/PageProvider/PageProvider";


function App() {
  return (
    <AuthProvider>
        <PageProvider/>
    </AuthProvider>
  );
}

export default App;
