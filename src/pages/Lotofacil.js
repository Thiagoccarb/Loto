import React, { useContext } from 'react';
import LotoContext from '../context/LotoContext.js';

function Lotofacil() {

  const { 
    numbers,
    check,
    selectedNumbers,
    setNumbers,
  } = useContext(LotoContext);
// criar component de cada numero e inserir na table usando map.
// utilizar stiled components;

  return (
    <>
      <section
        className="card"
      >
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          1
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          2
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          3
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          4
        </div>

        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          5
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          6
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          7
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          8
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          9
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          10
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          11
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          12
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          13
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          14
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          15
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          16
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          17
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          18
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          19
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          20
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          21
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          22
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          23
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          24
        </div>
        <div
          onClick={selectedNumbers}
        >
          <input type="ckeckbox" style={{ display: 'none' }} />
          25
        </div>
      </section>
      {
        numbers.length > 0
        && <span
          style={{ color: numbers.length > 14 ? 'green' : 'black' }}
        >{`${numbers.length} números marcados`}</span>
      }
      <button
        onClick={() => check(numbers)}
      >
        Verificar!
      </button>
      <button
        onClick={ () => {
          const inputs = document.querySelectorAll('input');
          inputs.forEach((el) => {
            el.checked = false;
            console.log(el.style.backgroundColor)
            el.style.backgroundColor = 'white';
          })
      }}
      >
        Limpar
      </button>
    </>
  );
};

export default Lotofacil;
