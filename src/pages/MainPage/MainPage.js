import React, { useState } from "react";
import CurrencyTable from "../../components/CurrencyTable/CurrencyTable";
import "./MainPage.css";

export default function MainPage() {
  const [page, setPage] = useState(1);

  return (
    <div className="main-page">
      <CurrencyTable page={page} />
    </div>
  );
}