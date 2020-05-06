import React, { useState, useEffect} from 'react';
import { Cards, Header, DatePicker, Chart } from "./components";
import { fetchPropertyData } from './api/';

import styles from './App.module.css';

function App() {
  const [dates, setDates] = useState({});
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const { data } = await fetchPropertyData();

      setDates(data);
    }

    fetchAPI();
  }, [])

  const handleDateChange = (date) => {
    setCurrentDate(date);
  }
  
  return (
    <div className={styles.container}>
      <Header />
      <Cards data={dates} currentDate={currentDate}/>
      <DatePicker handleDateChange={handleDateChange}/>
      <Chart data={dates} currentDate={currentDate}/>
    </div>
  );
}

export default App;
