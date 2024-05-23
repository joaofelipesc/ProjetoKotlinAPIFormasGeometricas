import React, { useState, useEffect } from 'react';
import "./Figuras.css";
import SketchCubo from './SketchCubo';
import SketchPyramidP5 from './SketchPyramidP5';
import SketchSphereP5 from './SketchSphereP5';
import SketchCylinderP5 from './SketchCylinderP5';

// import SketchCilindroP5 from './SketchCilindroP5';

function Figuras() {
  const [selectedFigura, setSelectedFigura] = useState('cubo');
  const [inputFields, setInputFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);
  const [figura, setFigura] = useState(false);

  useEffect(() => {
    const inputs = [];
    if (selectedFigura === 'cubo') {
      inputs.push({ id: 'lado', name: 'lado', placeholder: 'Lado do cubo', type: 'number' });
    } else if (selectedFigura === 'esfera') {
      inputs.push({ id: 'raio', name: 'raio', placeholder: 'Raio da esfera', type: 'number' });
    } else if (selectedFigura === 'piramide') {
      inputs.push({ id: 'base', name: 'base', placeholder: 'Base da pirâmide', type: 'number' });
      inputs.push({ id: 'altura', name: 'altura', placeholder: 'Altura da pirâmide', type: 'number' });
    } else if (selectedFigura === 'cilindro') {
      inputs.push({ id: 'raio', name: 'raio', placeholder: 'Raio do cilindro', type: 'number' });
      inputs.push({ id: 'altura', name: 'altura', placeholder: 'Altura do cilindro', type: 'number' });
    }
    setInputFields(inputs);
  }, [selectedFigura]);

  const handleChange = (e) => {
    setSelectedFigura(e.target.value);
    setFormData({});
    setResult(null);
    setInputFields([]);
    setFigura(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setFigura(false);
    setResult(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFigura(true);

    if(selectedFigura === 'cubo') {
      fetch('http://localhost:8080/cubo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ lado: formData.lado })
      })
        .then(response => response.json())
        .then(data => {
          setResult(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    else if(selectedFigura === 'esfera') {
      fetch('http://localhost:8080/esfera', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ raio: formData.raio })
      })
        .then(response => response.json())
        .then(data => {
          setResult(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    else if(selectedFigura === 'piramide') {
      fetch('http://localhost:8080/piramide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ largura: formData.base, altura: formData.altura })
      })
        .then(response => response.json())
        .then(data => {
          setResult(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    else if(selectedFigura === 'cilindro') {
      fetch('http://localhost:8080/cilindro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ raio: formData.raio, altura: formData.altura })
      })
        .then(response => response.json())
        .then(data => {
          setResult(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } 

    console.log('Form data:', formData)
  };

  const renderFigura = () => {
    if (selectedFigura === 'cubo'&& result && figura) {
      return SketchCubo(formData.lado);
    }
    else if(selectedFigura === 'piramide' && result && figura) {
      return SketchPyramidP5(formData.base, formData.altura);
    }
    else if(selectedFigura === 'esfera' && result && figura) {
      return SketchSphereP5(formData.raio);
    }
    else if(selectedFigura === 'cilindro' && result && figura) {
      return SketchCylinderP5(formData.raio, formData.altura);
    }

  };

  return (
    <div>
      <header>
        <h1>Formas Geométricas</h1>
        <nav>
          <ul>
          </ul>
        </nav>
      </header>
      <div id="principal">
        <form id="meuForm" onSubmit={handleSubmit}>
          <h1>Escolha a Figura</h1>
          <select id="figuras" name="figuras" onChange={handleChange} value={selectedFigura}>
            <option value="cubo">Cubo</option>
            <option value="esfera">Esfera</option>
            <option value="piramide">Pirâmide</option>
            <option value="cilindro">Cilindro</option>
          </select>
          <div id="inputs">
            {inputFields.map(input => (
              <input
                key={input.id}
                type={input.type}
                id={input.id}
                name={input.name}
                placeholder={input.placeholder}
                required
                onChange={handleInputChange}
              />
            ))}
          </div>
          <button type="submit">Enviar</button>
        </form>
        {result && (
          <div>
            <h2>Resultado:</h2>
            <p>Área: {Math.round(result.area)}Cm²</p>
            <p>Perímetro: {Math.round(result.perimetro)}Cm</p>
            <p>Volume: {Math.round(result.volume)}Cm³</p>
          </div>
        )}
        {renderFigura()}
      </div>
    </div>
  );
}

export default Figuras;