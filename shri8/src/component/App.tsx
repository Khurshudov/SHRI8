import * as React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component<any,any> {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
