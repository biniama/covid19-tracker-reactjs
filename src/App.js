import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api'; // index doesn't need to be specified
import coronaImage from './images/image.png';

class App extends React.Component {

  state = {
    data: {},
    country: '',  // this value is used in all components. that's why we store it here.
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedDataForCountry = await fetchData(country);
    // fetch the data for the country and set the data state
    this.setState({ data: fetchedDataForCountry, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
