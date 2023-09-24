const TICKER_SYMBOL = "UBS";
const ALPHA_VANTAGE_API_KEY = "R8ZWDSILJAXLSMK6";

const dynamicHTMLElements = {
  "company-name": {
    ele: document.querySelector("#company-name"),
    key: "Name",
  },
  "ticker-symbol": {
    ele: document.querySelector("#ticker-symbol"),
    key: "Symbol",
  },
  "exchange": {
    ele: document.querySelector("#exchange"),
    key: "Exchange",
    prefix: ":",
  },
  "currency": {
    ele: document.querySelector("#currency"),
    key: "Currency",
  },
  "52-week-high": {
    ele: document.querySelector("#year-high"),
    key: "52WeekHigh",
  },
  "52-week-low": {
    ele: document.querySelector("#year-low"),
    key: "52WeekLow",
  },
  "market-capitalisation": {
    ele: document.querySelector("#market-capitalisation"),
    key: "MarketCapitalization",
  },
  "about-company-name": {
    ele: document.querySelector("#about-company-name"),
    key: "Name",
  },
  "company-information": {
    ele: document.querySelector("#company-information"),
    key: "Description",
  },

};

const getStockInformation = async () => {
  try {
    const response = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${TICKER_SYMBOL}&apikey=${ALPHA_VANTAGE_API_KEY}`);
    const stockInformation = await response.json();
    if (response) {
      const entries = Object.values(dynamicHTMLElements);
      for ([key, value] of Object.entries(entries)) {
        value.ele.innerHTML += value.prefix
          ? value.prefix + stockInformation[value.key]
          : stockInformation[value.key];
      }
    }
  } catch (e) {
    console.log(e);
  }
};

document.addEventListener("DOMContentLoaded", getStockInformation);
