import React from 'react';
import PropTypes from 'prop-types';
import statistic from "./Statistics.module.css"


const Statistics = ({title, stats}) => {
return (
    <section className={statistic.statistics}> 
        {title && <h2>{title}</h2>}
        <ul className={statistic.list}>
            {stats.map(({id,label,percentage}) =>(
                <li
                key={id}
                className={statistic.item}
                >
                    <span className={statistic.label}>{label}</span>
                    <span className={statistic.percentage}>{percentage}%</span>
                </li>

            ))} 
        </ul>
    </section>
)
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  
  export default Statistics;