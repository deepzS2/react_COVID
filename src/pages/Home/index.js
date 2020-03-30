import React, { useEffect, useState, useCallback } from "react";
import { Link } from 'react-router-dom';

// API
import api from '../../services/api';

// Assets
import bgImg from '../../assets/maskBlackBg.jpg';

// Components
import Autocomplete from './Autocomplete';
import Table from './Table';
import Counter from '../../components/Counter';
import Loading from '../../components/Loading';

import {
  Container, Title, Subtitle, ButtonContainer, Button, Counters
 } from "./styles";

export default function Home() {
  const [cases, setCases] = useState({});
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    let dataCases = await api.get(`all`);
    let dataRows = await api.get(`countries?sort=country`);

    dataCases = dataCases.data;
    dataRows = dataRows.data.reverse();

    setRows(dataRows);
    setCases(dataCases);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container bg={bgImg}>
        <Title>
          Covid-19
        </Title>
        <Subtitle>
          Tudo sobre a
        </Subtitle>
        <Subtitle>
          doença pandêmica
        </Subtitle>
        <ButtonContainer>
          <Button>
            <Link to="covid">
              Veja agora
            </Link>
          </Button>
        </ButtonContainer>
      </Container>
      <Counters>
        <Counter duration={4} suffix=" casos" end={cases.cases} />
        <Counter duration={4} suffix=" mortes" end={cases.deaths} />
        <Autocomplete suggestions={rows} />
        <Table rows={rows} />
      </Counters>
    </>
  );
}
