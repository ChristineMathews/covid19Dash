import React from 'react';


import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/'

class App extends React.Component {
    async componentDidMount() {
        const data = await fetchData();
    
        this.setState({ data });
      }
    render() {
      return (
        <div className={styles.container}>
          <img className={styles.image} src={image} alt="COVID-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} /> 
        </div>
      );
    }
} 
export default App;