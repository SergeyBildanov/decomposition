import reactLogo from "./assets/react.svg"
import News from "./components/News"
import CurrencyList from "./components/CurrencyList"
import Weather from "./components/Weather"
import PopularList from "./components/PopularList"
import BroadcastList from "./components/BroadcastList"
import TVProgramms from "./components/TVPrograms"
import Map from "./components/Map"
import './App.css'
import SearchForm from "./components/SearchForm"

function App() {
  const newsArray = [{
    icon: reactLogo,
    text: "News text",
    link: "#0"
  }, {
    icon: reactLogo,
    text: "News text",
    link: "#0"
  },
  {
    icon: reactLogo,
    text: "News text",
    link: "#0"
  }, {
    icon: reactLogo,
    text: "News text",
    link: "#0"
  },
  {
    icon: reactLogo,
    text: "News text",
    link: "#0"
  } ];
  const currencyArray = [
    {
      text: "USD MOEX 63,52",
      rising: "+0,09"
    },
    {
      text: "USD MOEX 63,52",
      rising: "+0,09"
    },
    {
      text: "USD MOEX 63,52",
      rising: "+0,09"
    }
  ];
  const menuArray = [
    "Item",
    "Item",
    "Item",
    "Item",
    "Item",
    "Item",
    "Item",
  ];
  const popularsArray = [
    {
      category: "Недвижимость",
      text: "о сталинках"
    },
    {
      category: "Недвижимость",
      text: "о сталинках"
    },
    {
      category: "Недвижимость",
      text: "о сталинках"
    }
  ];
  const programmsArray = [
    {
      time: "02:00",
      name: "Programm",
      channel: "Channel"
    },
    {
      time: "02:00",
      name: "Programm",
      channel: "Channel"
    },
    {
      time: "02:00",
      name: "Programm",
      channel: "Channel"
    },
  ];
  const broadcastArray = [
    {
      name: "Programm",
      channel: "Channel"
    },
    {
      name: "Programm",
      channel: "Channel"
    },
    {
      name: "Programm",
      channel: "Channel"
    },
  ];
  return (
    <div className="page">
      <h2 className="header news-header">Сегодня в СМИ</h2>
      <News newsArray={newsArray}/>
      <CurrencyList currencyArray={currencyArray}/>
      <SearchForm icon={reactLogo} menuList={menuArray}/>
      <div className="under-search">
        <Weather icon={reactLogo} valueNow={"+17°"} info="утром +17°, днем -20°"/>
        <PopularList popularArray={popularsArray}/>
        <Map country={"Германии"}/>
        <TVProgramms programmsArray={programmsArray}/>
        <BroadcastList broadcastArray={broadcastArray}/>
      </div>
    </div>
  )
}

export default App
