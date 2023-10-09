import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,//nos permite darle estilos a la aplicacion
  Text,//nos permites escriber algun texto dentro de la aplicacion
  View,//nos permite que lo que esta dentro de esta etiqueta sea visible para el usuario
  TextInput,//nos permite ingresar input tipo texto
  TouchableOpacity,//este sirve para crear botones touch
  Image,
} from "react-native";

export default function App() {
  // Estado para mantener la expresión ingresada por el usuario osea este define si es resta o suma o etc
  const [expression, setExpression] = useState("");

  // Función para manejar el botón presionado (números y operadores)
  const handleButtonPress = (value) => {
    if (value === "C") {
      setExpression();
    } else if (value === "π") {
      setExpression(expression + "π");
    } else {
      setExpression(expression + value); // Agrega el valor a la expresión actual donde se guarda la expresion de suma o resta
    }
  };
  const handledelete = () => {
    if (expression.length > 0) {
      // Obtiene la expresión actual
      let nuevaExprecion = expression;
      // Elimina el último carácter de la expresión
      nuevaExprecion = expression.slice(0, -1);
      // Actualiza la expresión en el estado
      setExpression(nuevaExprecion);
    }
  };
  //funcion para calcular el porcentaje

  // Función para manejar el botón "Calcular"
  const handleCalculate = () => {
    try {
      // Verifica si la expresión contiene "tan("
      if (expression.includes("tan(")) {
        const angulo = parseFloat(
          expression.substring(4, expression.length - 1)
        );
        const tangente = Math.tan(angulo * (Math.PI / 180)); // Convierte el ángulo a radianes

        // Formatea la tangente con 12 decimales si no es un número entero
        if (Number.isInteger(tangente)) {
          setExpression(tangente.toString());
        } else {
          setExpression(tangente.toFixed(12));
        }
      } else if (expression.includes("cos(")) {
        const angulo = parseFloat(
          expression.substring(4, expression.length - 1)
        );
        const coseno = Math.cos(angulo * (Math.PI / 180));
        setExpression(coseno.toString());
      } else if (expression.includes("sin(")) {
        const angulo = parseFloat(
          expression.substring(4, expression.length - 1)
        );
        const seno = Math.sin(angulo * (Math.PI / 180));
        setExpression(seno.toString());
      }else if(expression.includes('log(')){
        const log= parseFloat(
          expression.substring(4, expression.length - 1)
        );
        const result= Math.log(log);
        setExpression(result.toString());

      } else if (expression.includes("π")) {
        // Reemplaza "pi" por el valor numérico correspondiente (Math.PI)
        const expressionWithPi = expression.replace(/π/g, Math.PI);
        // Evalúa la expresión modificada
        const result = eval(expressionWithPi);

        setExpression(result.toString());
      } else if (expression.includes("sqrt(")) {
        const numero = parseFloat(
          expression.substring(5, expression.length - 1)
        );
        if (!isNaN(numero)) {
          const raizcuadrada = Math.sqrt(numero);
          setExpression(raizcuadrada.toString());
        }
      } else if (expression.includes("^")) {
        const parts = expression.split("^");
        if (parts.length === 2) {
          const base = parseFloat(parts[0]);
          const exponente = parseFloat(parts[1]);
          const resultado = Math.pow(base, exponente);
          setExpression(resultado.toString());
        }
      } else if (expression.includes("%")) {
        const parts = expression.split("%");
        if (parts.length === 2) {
          const porcentaje = parseFloat(parts[0]);
          const numero = parseFloat(parts[1]);
          const resultado = (numero * porcentaje) / 100;
          setExpression(resultado.toString());
        }
      } else {
        // Si no contiene "tan(", evalúa la expresión completa
        let result = eval(expression);

        // Formatea el resultado con 12 decimales si no es un número entero
        if (Number.isInteger(result)) {
          setExpression(result.toString());
        } else {
          setExpression(result.toFixed(12));
        }
      }
    } catch (error) {
      setExpression("error");
    }
  };

  return (
    <View style={styles.container}>
      {/* Título de la calculadora */}
   <Image
   source={require('./assets/logo_icel.png')}
   style={styles.logo}
   ></Image>
   <Text
   style={styles.text}>CALCULADORA ICEL</Text>

      {/* Campo de entrada de texto */}
      <TextInput
        style={styles.input}
        onChangeText={(text) => setExpression(text)} // Actualiza el estado con el texto ingresado
        value={expression} // Muestra el valor actual del estado en el campo
      />

      {/* Fila de botones (1, 2, 3, +) */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("1")}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("2")}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("3")}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("+")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {
        /* FILA DE BOTONES (4,5,6,-) */
        <View style={styles.buttonRow1}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("4")}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("5")}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("6")}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("-")}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      }
      {
        /* fila de botones (7,8,9,÷) */
        <View style={styles.buttonRow2}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("7")}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("8")}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("9")}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("/")}
          >
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>
      }
      {
        /*fila de botones (0,.,borrado c , =)*/
        <View style={styles.buttonRow3}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("0")}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress(".")}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setExpression("")}
          >
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("*")}
          >
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
        </View>
      }

      {
        <View style={styles.buttonRow4}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("tan(")}
          >
            <Text style={styles.buttonText}>tan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("cos(")}
          >
            <Text style={styles.buttonText}>cos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("sin(")}
          >
            <Text style={styles.buttonText}>sen</Text>
          </TouchableOpacity>
          {/* Botón "Calcular" */}
          <TouchableOpacity style={styles.button} onPress={handleCalculate}>
            <Text style={styles.calculateButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      }
      {
        <View style={styles.buttonRow5}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("(")}
          >
            <Text style={styles.buttonText}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress(")")}
          >
            <Text style={styles.buttonText}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("^")}
          >
            <Text style={styles.buttonText}> ^</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handledelete}>
            <Text style={styles.buttonText}>DEL</Text>
          </TouchableOpacity>
        </View>
      }
      {
        <View style={styles.buttonRow6}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("sqrt(")}
          >
            <Text style={styles.buttonText}>sqrt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("%")}
          >
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("π")}
          >
            <Text style={styles.buttonText}>π</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("log(")}
          >
            <Text style={styles.buttonText}>log(</Text>
          </TouchableOpacity>
        </View>
      }
      {/* Barra de estado (no es necesario modificar esto) */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente
  },
  text: {
    fontSize: 28,
    color: "white",
    marginBottom: 10,
    position: "absolute",
    top: 50,
    left: 90
  },
  input: {
    width: 340,
    height: 70,
    borderColor: "rgb(6, 172, 255) ",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 40,
    color: "white",
    top: 7,
    fontSize: 30,
    backgroundColor: "rgba(6, 172, 255,.5) ",
  },
  buttonRow: {
    flexDirection: "row", // Alinea los botones en una fila horizontal
    marginBottom: 10,
  },
  buttonRow1: {
    flexDirection: "row",
    marginBottom: 12,
  },
  buttonRow2: {
    flexDirection: "row",
    marginBottom: 14,
  },
  buttonRow3: {
    flexDirection: "row",
    marginBottom: 16,
  },
  buttonRow4: {
    flexDirection: "row",
    marginBottom: 18,
  },
  buttonRow5: {
    flexDirection: "row",
    marginBottom: 20,
  },
  buttonRow6: {
    flexDirection: "row",
    marginBottom: 22,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    marginHorizontal: 5,
    height: 40,
  },
  buttonText: {
    fontSize: 25,
    color: "white",
  },

  calculateButtonText: {
    color: "white",
    fontSize: 30,
  },
  logo:{
    width:90,
    height:90,
    position:"absolute",
    top: 20,
    left:0,
    bottom:3
  }
});
