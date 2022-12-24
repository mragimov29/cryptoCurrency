import React, { useState } from "react";
import CurrencyTable from "../../components/CurrencyTable/CurrencyTable";
import Header from "../../components/Header/Header";
import "./MainPage.css";

export default function MainPage() {
  const [page, setPage] = useState(1);

  return (
    <div className="main-page">
      <Header />
      <CurrencyTable page={page} />
    </div>
  );
}