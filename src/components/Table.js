import React, { useContext } from 'react'
import LotoContext from '../context/LotoContext';
import '../styles/table.css';

function Table() {
  const { results } = useContext(LotoContext);
  const headers = ['acertos', 'concurso']
  const table = (
    <table>
      <thead>
        <tr>
          {
            headers.map((el, i) => (
              <th
                key={i}
              >
                {el}
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          results.map((e, ind) => (
            <tr
              key={ ind }
            >
              {
                Object.values(e).map((ele, index) => (
                  <td
                    key={ index }
                  >
                    {ele}
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table >
  )
  return (
    results.length > 0 && table
    // <table>
    //   <thead>
    //     <tr>
    //       {
    //         Object.keys(results[0]).map((el, i) => (
    //           <th
    //             key={i}
    //           >
    //             {el}
    //           </th>
    //         ))
    //       }
    //     </tr>
    //   </thead>
    // </table >
  )
}

export default Table;