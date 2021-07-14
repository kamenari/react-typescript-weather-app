type ResultsPropsType = {
    results: {
        country : string;
        cityName : string;
        temperture : string;
        conditionText : string;
        icon : string;
    }
}

const Results = ({ results } : ResultsPropsType) => {
    const { cityName, country, temperture, conditionText, icon } =results;
    return (
        <>
            {cityName && 
                <div className="results-city">{cityName}</div>
            }
            {country && 
                <div className="results-country">{country}</div>
            }
            {temperture && 
                <div className="results-temp">{temperture} <span>°C</span></div>
            }
            {conditionText && 
                <div className="results-condition">
                    <img src={icon} alt="icon"/>
                    <span>{conditionText}</span>
                </div>
            }
        </>
    );
};

export default Results;