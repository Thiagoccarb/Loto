import React, { useContext } from 'react'
import LotoContext from '../context/LotoContext';
import '../styles/table.css';

function Table() {
  const headers = ['acertos', 'concurso'];
  const { results, orderBy, sort } = useContext(LotoContext);
  const data = orderBy ? sort() : results;

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
    data.length > 0 && table
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