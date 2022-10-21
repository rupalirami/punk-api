import React from 'react'
import './Filter.scss'

const Filter = (props) => {
    const { label, value, toggleChecked, filterId } = props;
    console.log("filterID in Filter=",filterId)

  return (
    <label className="filter-checkbox">
      <input
        type="checkbox"
        defaultChecked={value}
        onChange={(event) => toggleChecked(filterId)}
      />
      {label}
    </label>

  )
}

export default Filter;

// import "./Filter.scss";
// const Filter = (props) => {
//   const { label, value, onChange, filterId } = props;
//   return (
//     <label className="filter">
//       <input
//         type="checkbox"
//         checked={value}
//         onChange={(event) => onChange(filterId)}
//       />
//       {label}
//     </label>
//   );
// };

// export default Filter;
