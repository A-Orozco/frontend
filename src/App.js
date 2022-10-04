import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
// functional component with hooks is more common
const App= () => {
  return (
    //output must be wrapped in only 1 element
    <>
      <Header />
      <main>  
        <h1>hai 2 u . com</h1>
      </main>
      <Footer />
    </> 
  );
}

export default App;
