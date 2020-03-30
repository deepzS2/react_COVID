import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

// API
import api from '../../services/api';

// Components
import Loading from '../../components/Loading';
import Cards from './Cards';

import {
  Container, Flag, CountryName, CardsContainer
 } from "./styles";

export default function Country({
  match: {
    params: { name }
  }
}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    const res = await api.get(`countries/${name}`);

    setData(res.data);
    setLoading(false);
  }, [name]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Flag src={data.countryInfo.flag} alt={data.country} />
      <CountryName>
        {data.country}
      </CountryName>
      <CardsContainer>
        <Cards number={data.cases} text="casos" />
        <Cards number={data.todayCases} text="casos de hoje" />
        <Cards number={data.deaths} text="mortes" />
        <Cards number={data.todayDeaths} text="mortes de hoje" />
        <Cards number={data.recovered} text="recuperados" />
        <Cards number={data.active} text="infectados" />
        <Cards number={data.critical} text="críticos" />
        <Cards number={data.casesPerOneMillion} text="casos por 1 milhão" />
        <Cards
          number={data.deathsPerOneMillion}
          text="mortes por 1 milhão"
        />
      </CardsContainer>
    </Container>
  );
}

Country.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  })
};

Country.defaultProps = {
  match: {
    params: {
      name: ``
    }
  }
};
