

import React, { useState } from "react";
import * as math from 'mathjs';

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,//nos permite darle estilos a la aplicacion
  Text,//nos permites escriber algun texto dentro de la aplicacion
  View,//nos permite que lo que esta dentro de esta etiqueta sea visible para el usuario
  TextInput,//nos permite ingresar input tipo texto
  TouchableOpacity,//este sirve para crear botones touch
  Image,
  Modal,
} from "react-native";

export default function App() {
  // Estado para mantener la expresión ingresada por el usuario osea este define si es resta o suma o etc
  const [expression, setExpression] = useState("");//expresion para hacer los calculos de la calculadora
  const [isAreaModalVisible, setIsAreaModalVisible] = useState(false); //constante reutilizable para los modales del area
  const [isPerimetroModalVisible, setIsPerimetroModalVisible] = useState(false);//constante reutilizable para los modales del perimetro
  const [ConverisionesModalVisible,setConversionesModalVisible]=useState(false);//constante para reutilizar el menu 
  const [base, setBase] = useState(''); // constante para guardar el valor de la base
  const [altura, setAltura] = useState('');//constante para guardar el valor de la altura
  const [area, setArea] = useState(0); //contate para guardar el valor del area
  const calcularAreaTriangulo = () => {
    // Realiza el cálculo del área del triángulo aquí
    const baseNum = parseFloat(base);
    const alturaNum = parseFloat(altura);
    const areaTriangulo = (baseNum * alturaNum) / 2;
    setArea(areaTriangulo.toFixed(2));}
//termino del trioangulo
//calculo del area del triangulo
const [ladoCuadrado, setLadoCuadrado] = useState('');
const [areaCuadrado, setAreaCuadrado] = useState(0);
const calcularAreaCuadrado = () =>{
  const ladoNum = parseFloat(ladoCuadrado);
  const areaCuadradoCaculada= ladoNum*ladoNum;
  setAreaCuadrado(areaCuadradoCaculada.toFixed(2));

}
//termino
//calculo del area del circulo
const [radiocirculo,setRadiocirculo] = useState('');
const [areaCirculo,setAreaCirculo] = useState(0);
const calcularAreaCirculo = () =>{
  const radioNum = parseFloat(radiocirculo);
  const areaCirculo = Math.PI * Math.pow(radioNum, 2);
  setAreaCirculo(areaCirculo.toFixed(2));
}
//termino del calculo del circulo
//calculo del area del rectangulo 
const [baseRectangulo, setBaserectangulo] = useState('');
const [alturaRectangulo, setalturaRectangulo] = useState('');
const [areaRectangulo, setAreaRectangulo] = useState(0);
const calcularAreaRectangulo = () =>{

  const base = parseFloat(baseRectangulo);
  const altura = parseFloat(alturaRectangulo);
  const areaRectangulo = base*altura;
  setAreaRectangulo(areaRectangulo.toFixed(2));
}
//termino del calculo 
//calculo del area de un rombo
const [diagonalMayor,setDiagonalMayor] = useState('');
const [diagonalMenor,setDiagonalMenor] = useState('');
const [areaRombo,setAreaRombo] = useState(0);
const calcularAreaRombo = () =>{
const mayor = parseFloat(diagonalMayor);
const menor = parseFloat(diagonalMenor);
const areaRombo = (mayor * menor)/2;
setAreaRombo(areaRombo.toFixed(2)); 

}
//termino del calculo
//menu de perimetros
const [isMenuVisibleP,setIsMenuVisibleP]= useState(false);
const [selectedMenuItemP,setSelectedMenuItemP] = useState(null);
const openMenuP = (menuItemP) =>{
  setSelectedMenuItemP(menuItemP);
  setIsMenuVisibleP(true);
}
//temrmino de menu de perimetros
//menu de areas 
    const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  
  const openMenu = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setIsMenuVisible(true);
  };  //termino
  //funcion de menu de conversiones
  const[isMenuVisibleC,setIsMenuVisibleC]=useState(false);
  const [selectedMenuItemC,setSelectedMenuItemC]=useState(null);
const openMenuConverisones = (menuItemConver) =>{
         setSelectedMenuItemC(menuItemConver);
         setIsMenuVisibleC(true);

}
  //termino de menu 
  // Función para manejar el botón presionado (números y operadores)
  const handleButtonPress = (value) => {
    if (value === "C") {
      setExpression("");
    } else if (value === "π") {
      setExpression(expression + "π");
    } else if (value === "%") {
      // Calcula el porcentaje dividiendo por 100
      setExpression(expression + "%*");
    } else {
      setExpression(expression + value);
    }
 
  };
//funcion para calcular perimetro triangulo
const [lado1,setlado1]= useState('');
const [lado2,setlado2]= useState('');
const [lado3,setlado3]= useState('');
const [perimetroTriangulo,setPerimetroTriangulo]= useState(0);
const calcularPerimetroTriangulo = () =>{
const onelado = parseFloat(lado1);
const twolado = parseFloat(lado2);
const threelado = parseFloat(lado3);
const perimetroTriangulo = onelado + twolado + threelado;
setPerimetroTriangulo(perimetroTriangulo.toFixed(2));

}
//termino
//funcion para calcular el perimetro de un cuadrado
const [ladocua,setladocua]=useState('');
const [perimetroCuadrado,setPerimetroCuadrado]=useState(0);
const calcularPerimetroCuadrado = () =>{
  const ladocuadrado= parseFloat(ladocua);
  const perimetroCuadrado=ladocuadrado + ladocuadrado + ladocuadrado + ladocuadrado ;
  setPerimetroCuadrado(perimetroCuadrado);
}
//termino del calculo
//funcion para calcular el perimetro de circulo
const [diametro,setdiametro]=useState('');
const [perimetroCirculo,setPerimetroCirculo]= useState(0);
const calcularPerimetroCirculo = () =>{
  const diametroc = parseFloat(diametro);
  const perimetroCirculo= Math.PI*diametroc;
  setPerimetroCirculo(perimetroCirculo.toFixed(2));
}
//termino del calculo
//FUNCION PARA CALCULAR PERIMETRO DEL RECTANGULO
const [baseRec,setBaseRec]=useState('');
const [alturaRec,setAlturaRec]=useState('');
const [perimetroRectangulo,setPerimetroRectangulo]=useState(0);
const calcularPerimetroRectangulo = () =>{
  const rectbase = parseFloat(baseRec);
  const rectalt = parseFloat(alturaRec);
  const perimetroRectangulo = rectbase + rectbase + rectalt +rectalt; 
  setPerimetroRectangulo(perimetroRectangulo);
}
//TERMINO DEL CALCULO PERIMETRO DEL RECTANGULO
//FUNCION PARA CALCULAR PERIMETRO DEL ROMBO
const [angulo,setangulo]=useState('');
const [perimetroRombo,setPerimetroRombo]=useState(0);
const calcularPerimetroRombo = () =>{
  const ladoangulo= parseFloat(angulo);
  const perimetroRombo = ladoangulo * 4;
  setPerimetroRombo(perimetroRombo.toFixed(2));

}
//TERMINO DEL CALCULO
// FUNCION PARA LA CONVERCION DE FARENHEIT A CELCIUS Y VICEVERSA
const [faren,setFaren]=useState('');
const [conversionFaren,serConversionFaren]=useState(0);
const [conversionCel,setConversionCel]=useState(0);
const conversionFarent = () =>{
  const f = parseFloat(faren);
  const conversionFaren= (f-32)/1.8;
  const conversionCel= (1.8*f)+32;
  serConversionFaren(conversionFaren.toFixed(4));
  setConversionCel(conversionCel.toFixed(4));
}
//TERMINO DE LA FUNCION
  //funcion para sacar el factorial de un numero
  const factorial = (n)=>{
    if(n===0 || n===1){
      return 1;
    }else if(n<0){
      return "error";
  
    }else{
      let result = 1;
      for(let i =2; i<=n; i++){
        result *=i;
      }
      return result;
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
// Función para calcular el resultado
const handleCalculate = () => {
  try {
    let calculatedExpression = expression;

    calculatedExpression = calculatedExpression.replace(/factorial\(([^)]+)\)/g, function(match, value) {
      const number = parseInt(value);
      if (number < 0) {
        return "Error"; // Maneja números negativos
      }
      return factorial(number);
    });

  // Reemplaza "%" seguido de un número por el resultado del porcentaje
  calculatedExpression = calculatedExpression.replace(/%/g, "*0.01");
    // Reemplaza "π" por el valor numérico correspondiente (Math.PI)
    calculatedExpression = calculatedExpression.replace(/π/g, Math.PI);

    // Reemplaza "tan(" seguido de un número en grados por el resultado de la tangente
    calculatedExpression = calculatedExpression.replace(/tan\(([^)]+)\)/g, function(match, degree) {
      const radians = parseFloat(degree) * (Math.PI / 180);
      return Math.tan(radians);
    });

    // Reemplaza "cos(" seguido de un número en grados por el resultado del coseno
    calculatedExpression = calculatedExpression.replace(/cos\(([^)]+)\)/g, function(match, degree) {
      const radians = parseFloat(degree) * (Math.PI / 180);
      return Math.cos(radians);
    });

    // Reemplaza "sin(" seguido de un número en grados por el resultado del seno
    calculatedExpression = calculatedExpression.replace(/sin\(([^)]+)\)/g, function(match, degree) {
      const radians = parseFloat(degree) * (Math.PI / 180);
      return Math.sin(radians);
    });

    // Reemplaza "sqrt(" seguido de un número por la raíz cuadrada
    calculatedExpression = calculatedExpression.replace(/sqrt\(([^)]+)\)/g, function(match, value) {
      const number = parseFloat(value);
      if (number < 0) {
        return "Error"; // Maneja raíces cuadradas de números negativos
      }
      return Math.sqrt(number);
    });
    // funcio para calcular log
    calculatedExpression = calculatedExpression.replace(/log\(([^)]+)\)/g, function(match, value) {
      const number = parseFloat(value);
      if (number <= 0) {
        return "Error"; // Maneja logaritmos de números no positivos
      }
      return Math.log10(number);
    });
    // Evalúa la expresión utilizando math.evaluate
    const result = math.evaluate(calculatedExpression);

    // Formatea el resultado con 12 decimales si no es un número entero
    if (Number.isInteger(result)) {
      setExpression(result.toString());
    } else {
      setExpression(result.toFixed(12));
    }
  } catch (error) {
    setExpression("Error");
  }
};

 



  return (
    <View style={styles.container}>
      {//modal trinagunlo

        <Modal
        animationType="slide"
        transparent={true}
        visible={isAreaModalVisible && selectedMenuItem === "Triangulo"}
        onRequestClose={() => setIsAreaModalVisible(false)}
      >
        <View style={[styles.areaModalContainer, { zIndex: 2, position: 'absolute' }]}>
          {/* Contenido para el cálculo del área del triangulo */}
          {/* datos a pedir */}
          <Text style={styles.areaModalTitle}>Calcular Área del triangulo</Text>
          <TextInput
            placeholder="Base"
            value={base}
            onChangeText={text => setBase(text)}
            keyboardType="numeric"
            color="white"
            backgroundColor="blue"
            width="40%"
            placeholderTextColor={"white"}
            marginBottom="10%"

          />
           <TextInput
            placeholder="Altura"
            value={altura}
            onChangeText={text => setAltura(text)}
            keyboardType="numeric"
            color="white"
            backgroundColor="blue"
            width="40%"
            placeholderTextColor={"white"}
            marginBottom="10%"

          />
          <TouchableOpacity
             style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
         onPress={calcularAreaTriangulo}>
  <Text style={{ color: 'white', fontSize: 16 }}>Calcular</Text>
</TouchableOpacity>
          <Text style={{ fontSize: 16, marginTop: 20, color:"white" }}>
            Área del triángulo: {area}
          </Text>
          {/* Agrega elementos para el cálculo del área */}
          {/* Por ejemplo, campos de entrada, botón de calcular, resultados, etc. */}
          <TouchableOpacity onPress={() => setIsAreaModalVisible(false)}>
            <Text style={styles.closeButton}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      }
    {//modal cuadrado

<Modal
animationType="slide"
transparent={true}
visible={isAreaModalVisible && selectedMenuItem === "Cuadrado"}
onRequestClose={() => setIsAreaModalVisible(false)}
>
<View style={[styles.areaModalContainer, { zIndex: 2, position: 'absolute' }]}>
  {/* Contenido para el cálculo del área del triangulo */}
  {/* datos a pedir */}
  <Text style={styles.areaModalTitle}>Calcular Área CUADRADO</Text>
  <TextInput
    placeholder="lado "
    value={ladoCuadrado}
    onChangeText={text => setLadoCuadrado(text)}
    keyboardType="numeric"
    color="white"
    backgroundColor="blue"
    width="40%"
    placeholderTextColor={"white"}
    marginBottom="10%"

  />
  
  <TouchableOpacity
     style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
 onPress={calcularAreaCuadrado}>
<Text style={{ color: 'white', fontSize: 16 }}>Calcular</Text>
</TouchableOpacity>
  <Text style={{ fontSize: 16, marginTop: 20, color:"white" }}>
    Área del cuadrado: {areaCuadrado}
  </Text>
  {/* Agrega elementos para el cálculo del área */}
  {/* Por ejemplo, campos de entrada, botón de calcular, resultados, etc. */}
  <TouchableOpacity onPress={() => setIsAreaModalVisible(false)}>
    <Text style={styles.closeButton}>Cerrar</Text>
  </TouchableOpacity>
</View>
</Modal>
}

  {//modal circulo

<Modal
animationType="slide"
transparent={true}
visible={isAreaModalVisible && selectedMenuItem === "Circulo"}
onRequestClose={() => setIsAreaModalVisible(false)}
>
<View style={[styles.areaModalContainer, { zIndex: 2, position: 'absolute' }]}>
  {/* Contenido para el cálculo del área del triangulo */}
  {/* datos a pedir */}
  <Text style={styles.areaModalTitle}>Calcular Área CIRCULO</Text>
  <TextInput
    placeholder="RADIO"
    value={radiocirculo}
    onChangeText={text => setRadiocirculo(text)}
    keyboardType="numeric"
    color="white"
    backgroundColor="blue"
    width="40%"
    placeholderTextColor={"white"}
    marginBottom="10%"

  />
  
  <TouchableOpacity
     style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
 onPress={calcularAreaCirculo}>
<Text style={{ color: 'white', fontSize: 16 }}>Calcular</Text>
</TouchableOpacity>
  <Text style={{ fontSize: 16, marginTop: 20, color:"white" }}>
    Área del circulo: {areaCirculo}
  </Text>
  {/* Agrega elementos para el cálculo del área */}
  {/* Por ejemplo, campos de entrada, botón de calcular, resultados, etc. */}
  <TouchableOpacity onPress={() => setIsAreaModalVisible(false)}>
    <Text style={styles.closeButton}>Cerrar</Text>
  </TouchableOpacity>
</View>
</Modal>
}
  {//modal rectangulo

<Modal
animationType="slide"
transparent={true}
visible={isAreaModalVisible && selectedMenuItem === "Rectangulo"}
onRequestClose={() => setIsAreaModalVisible(false)}
>
<View style={[styles.areaModalContainer, { zIndex: 2, position: 'absolute' }]}>
  {/* Contenido para el cálculo del área del triangulo */}
  {/* datos a pedir */}
  <Text style={styles.areaModalTitle}>Calcular Área Rectangulo</Text>
  <TextInput
    placeholder="base "
    value={baseRectangulo}
    onChangeText={text => setBaserectangulo(text)}
    keyboardType="numeric"
    color="white"
    backgroundColor="blue"
    width="40%"
    placeholderTextColor={"white"}
    marginBottom="10%"

  />
    <TextInput
    placeholder="altura "
    value={alturaRectangulo}
    onChangeText={text => setalturaRectangulo(text)}
    keyboardType="numeric"
    color="white"
    backgroundColor="blue"
    width="40%"
    placeholderTextColor={"white"}
    marginBottom="10%"

  />
  
  <TouchableOpacity
     style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
 onPress={calcularAreaRectangulo}>
<Text style={{ color: 'white', fontSize: 16 }}>Calcular</Text>
</TouchableOpacity>
  <Text style={{ fontSize: 16, marginTop: 20, color:"white" }}>
    Área del Rectangulo: {areaRectangulo}
  </Text>
  {/* Agrega elementos para el cálculo del área */}
  {/* Por ejemplo, campos de entrada, botón de calcular, resultados, etc. */}
  <TouchableOpacity onPress={() => setIsAreaModalVisible(false)}>
    <Text style={styles.closeButton}>Cerrar</Text>
  </TouchableOpacity>
</View>
</Modal>
}
 {//modal trinagunlo

        <Modal
        animationType="slide"
        transparent={true}
        visible={isAreaModalVisible && selectedMenuItem === "Triangulo"}
        onRequestClose={() => setIsAreaModalVisible(false)}
      >
        <View style={[styles.areaModalContainer, { zIndex: 2, position: 'absolute' }]}>
          {/* Contenido para el cálculo del área del triangulo */}
          {/* datos a pedir */}
          <Text style={styles.areaModalTitle}>Calcular Área del triangulo</Text>
          <TextInput
            placeholder="Base"
            value={base}
            onChangeText={text => setBase(text)}
            keyboardType="numeric"
            color="white"
            backgroundColor="blue"
            width="40%"
            placeholderTextColor={"white"}
            marginBottom="10%"

          />
           <TextInput
            placeholder="Altura"
            value={altura}
            onChangeText={text => setAltura(text)}
            keyboardType="numeric"
            color="white"
            backgroundColor="blue"
            width="40%"
            placeholderTextColor={"white"}
            marginBottom="10%"

          />
          <TouchableOpacity
             style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
         onPress={calcularAreaTriangulo}>
  <Text style={{ color: 'white', fontSize: 16 }}>Calcular</Text>
</TouchableOpacity>
          <Text style={{ fontSize: 16, marginTop: 20, color:"white" }}>
            Área del triángulo: {area}
          </Text>
          {/* Agrega elementos para el cálculo del área */}
          {/* Por ejemplo, campos de entrada, botón de calcular, resultados, etc. */}
          <TouchableOpacity onPress={() => setIsAreaModalVisible(false)}>
            <Text style={styles.closeButton}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      }
       {//modal ROMBO

<Modal
animationType="slide"
transparent={true}
visible={isAreaModalVisible && selectedMenuItem === "ROMBO"}
onRequestClose={() => setIsAreaModalVisible(false)}
>
<View style={[styles.areaModalContainer, { zIndex: 2, position: 'absolute' }]}>
  {/* Contenido para el cálculo del área del triangulo */}
  {/* datos a pedir */}
  <Text style={styles.areaModalTitle}>Calcular Área del ROMBO</Text>
  <TextInput
    placeholder="DIAGONAL MAYOR"
    value={diagonalMayor}
    onChangeText={text => setDiagonalMayor(text)}
    keyboardType="numeric"
    color="white"
    backgroundColor="blue"
    width="40%"
    placeholderTextColor={"white"}
    marginBottom="10%"

  />
   <TextInput
    placeholder="DIAGONAL MENOR"
    value={diagonalMenor}
    onChangeText={text => setDiagonalMenor(text)}
    keyboardType="numeric"
    color="white"
    backgroundColor="blue"
    width="40%"
    placeholderTextColor={"white"}
    marginBottom="10%"

  />
  <TouchableOpacity
     style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
 onPress={calcularAreaRombo}>
<Text style={{ color: 'white', fontSize: 16 }}>Calcular</Text>
</TouchableOpacity>
  <Text style={{ fontSize: 16, marginTop: 20, color:"white" }}>
    Área del Rombo: {areaRombo}
  </Text>
  {/* Agrega elementos para el cálculo del área */}
  {/* Por ejemplo, campos de entrada, botón de calcular, resultados, etc. */}
  <TouchableOpacity onPress={() => setIsAreaModalVisible(false)}>
    <Text style={styles.closeButton}>Cerrar</Text>
  </TouchableOpacity>
</View>
</Modal>
}
      {
       // menu
<Modal
  animationType="slide"
  transparent={true}
  visible={isMenuVisible}
  onRequestClose={() => setIsMenuVisible(false)}
>
  <View style={styles.menuContainer}>
    <Text style={styles.menuTitle}>CALCULAR AREAS</Text>
    <TouchableOpacity
  onPress={() => {
    openMenu("Triangulo"); // Abre el modal del triangulo
    setIsAreaModalVisible(true);
  }}
>
  <Text style={styles.menuItem}>TRIANGULO</Text>
</TouchableOpacity>
<TouchableOpacity
  onPress={() => {
    openMenu("Cuadrado"); // Abre el modal del cuadrado
    setIsAreaModalVisible(true);
  }}
>
  <Text style={styles.menuItem}>CUADRADO</Text>
</TouchableOpacity>
    <TouchableOpacity onPress={() =>{
      openMenu("Circulo");//abre modal del circulo
      setIsAreaModalVisible(true);
    } 
    }>
      <Text style={styles.menuItem}>CIRCULO</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() =>{
      openMenu("Rectangulo");//abre modal del circulo
      setIsAreaModalVisible(true);
    } 
    }>
      <Text style={styles.menuItem}>RECTANGULO</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() =>{
      openMenu("ROMBO");//abre modal del circulo
      setIsAreaModalVisible(true);
    } 
    }>
      <Text style={styles.menuItem}>ROMBO</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setIsMenuVisible(false)}>
      <Text style={styles.closeButton}>Close</Text>
    </TouchableOpacity>
  </View>
</Modal>
}
{//menu del perimetro
<Modal
animationType="slide"
transparent={true}
visible={isMenuVisibleP}
onRequestClose={()=> setIsMenuVisibleP(false)}
>
  <View style={styles.menuContainer}>
    <Text style={styles.menuTitle}>CALCULAR PERIMETROS</Text>
    <TouchableOpacity onPress={() =>{
      openMenuP("TRIANGULO");//abre modal del TRIANGULO 
      setIsPerimetroModalVisible(true);
    } 
    }>
      <Text style={styles.menuItem}>TRIANGULO</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
      openMenuP("CUADRADO");//abre modal cuadrado
      setIsPerimetroModalVisible(true);
    }}>
      <Text style={styles.menuItem}>CUADRADO</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
      openMenuP("CIRCULO");//abre el modal circulo
      setIsPerimetroModalVisible(true);
    }}
    >
      <Text style={styles.menuItem}>CIRCULO</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
      openMenuP("RECTANGULO");//ABRE MODAL DEL RECTANGULO
      setIsPerimetroModalVisible(true);
    }}
    >
      <Text style={styles.menuItem}>RECTANGULO</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
      openMenuP("ROMBO");
      setIsPerimetroModalVisible(true);
    }}>
      <Text style={styles.menuItem}>ROMBO</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setIsMenuVisibleP(false)}>
      <Text style={styles.closeButton}>Close</Text>
    </TouchableOpacity>
  </View>
</Modal>

}
{//modal trinagunlo

<Modal
animationType="slide"
transparent={true}
visible={isPerimetroModalVisible && selectedMenuItemP=== "TRIANGULO"}
onRequestClose={() => setIsPerimetroModalVisible(false)}
>
<View style={[styles.areaModalContainer, { zIndex: 2, position: 'absolute' }]}>
  {/* Contenido para el cálculo del área del triangulo */}
  {/* datos a pedir */}
  <Text style={styles.areaModalTitle}>Calcular PERIMETRO del triangulo</Text>
  <TextInput
    placeholder="lado 1"
    value={lado1}
    onChangeText={text => setlado1(text)}
    keyboardType="numeric"
    color="white"
    backgroundColor="blue"
    width="40%"
    placeholderTextColor={"white"}
    marginBottom="10%"

  />
   <TextInput
    placeholder="lado 2"
    value={lado2}
    onChangeText={text => setlado2(text)}
    keyboardType="numeric"
    color="white"
    backgroundColor="blue"
    width="40%"
    placeholderTextColor={"white"}
    marginBottom="10%"

  />
  <TextInput
  placeholder="lado 3"
  value={lado3}
  onChangeText={text => setlado3(text)}
  keyboardType="numeric"
  color="white"
  backgroundColor="blue"
  width="40%"
  placeholderTextColor={"white"}
  marginBottom="10%"
  />
  <TouchableOpacity
     style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
 onPress={calcularPerimetroTriangulo}>
<Text style={{ color: 'white', fontSize: 16 }}>Calcular</Text>
</TouchableOpacity>
  <Text style={{ fontSize: 16, marginTop: 20, color:"white" }}>
    PERIEMTRO DEL triángulo: {perimetroTriangulo}
  </Text>

  <TouchableOpacity onPress={() => setIsPerimetroModalVisible(false)}>
    <Text style={styles.closeButton}>Cerrar</Text>
  </TouchableOpacity>
</View>
</Modal>
}
{//modal perimetro cuadrado

<Modal
animationType="slide"
transparent={true}
visible={isPerimetroModalVisible && selectedMenuItemP=== "CUADRADO"}
onRequestClose={() => setIsPerimetroModalVisible(false)}
>
<View style={[styles.areaModalContainer, { zIndex: 2, position: 'absolute' }]}>
  {/* Contenido para el cálculo del área del triangulo */}
  {/* datos a pedir */}
  <Text style={styles.areaModalTitle}>Calcular PERIMETRO del CUADRADO</Text>
  <TextInput
    placeholder="lado 1"
    value={ladocua}
    onChangeText={text => setladocua(text)}
    keyboardType="numeric"
    color="white"
    backgroundColor="blue"
    width="40%"
    placeholderTextColor={"white"}
    marginBottom="10%"

  />
  
  <TouchableOpacity
     style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
 onPress={calcularPerimetroCuadrado}>
<Text style={{ color: 'white', fontSize: 16 }}>Calcular</Text>
</TouchableOpacity>
  <Text style={{ fontSize: 16, marginTop: 20, color:"white" }}>
    PERIMETRO DEL CUADRADO: {perimetroCuadrado}
  </Text>

  <TouchableOpacity onPress={() => setIsPerimetroModalVisible(false)}>
    <Text style={styles.closeButton}>Cerrar</Text>
  </TouchableOpacity>
</View>
</Modal>
}
{//modal perimetro circulo

<Modal
animationType="slide"
transparent={true}
visible={isPerimetroModalVisible && selectedMenuItemP=== "CIRCULO"}
onRequestClose={() => setIsPerimetroModalVisible(false)}
>
<View style={[styles.areaModalContainer, { zIndex: 2, position: 'absolute' }]}>
  {/* Contenido para el cálculo del área del triangulo */}
  {/* datos a pedir */}
  <Text style={styles.areaModalTitle}>Calcular PERIMETRO del CIRCULO</Text>
  <TextInput
    placeholder="DIAMETRO"
    value={diametro}
    onChangeText={text => setdiametro(text)}
    keyboardType="numeric"
    color="white"
    backgroundColor="blue"
    width="40%"
    placeholderTextColor={"white"}
    marginBottom="10%"

  />
  
  <TouchableOpacity
     style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
 onPress={calcularPerimetroCirculo}>
<Text style={{ color: 'white', fontSize: 16 }}>Calcular</Text>
</TouchableOpacity>
  <Text style={{ fontSize: 16, marginTop: 20, color:"white" }}>
    PERIMETRO DEL CIRCULO: {perimetroCirculo}
  </Text>

  <TouchableOpacity onPress={() => setIsPerimetroModalVisible(false)}>
    <Text style={styles.closeButton}>Cerrar</Text>
  </TouchableOpacity>
</View>
</Modal>
}

 {//modal rectangunlo

<Modal
animationType="slide"
transparent={true}
visible={isPerimetroModalVisible && selectedMenuItemP === "RECTANGULO"}
onRequestClose={() => setIsPerimetroModalVisible(false)}
>
<View style={[styles.areaModalContainer, { zIndex: 2, position: 'absolute' }]}>
  {/* Contenido para el cálculo del área del triangulo */}
  {/* datos a pedir */}
  <Text style={styles.areaModalTitle}>Calcular PERIMETRO DEL RECTANGULO</Text>
  <TextInput
    placeholder="BASE"
    value={baseRec}
    onChangeText={text => setBaseRec(text)}
    keyboardType="numeric"
    color="white"
    backgroundColor="blue"
    width="40%"
    placeholderTextColor={"white"}
    marginBottom="10%"

  />
   <TextInput
    placeholder="altura"
    value={alturaRec}
    onChangeText={text => setAlturaRec(text)}
    keyboardType="numeric"
    color="white"
    backgroundColor="blue"
    width="40%"
    placeholderTextColor={"white"}
    marginBottom="10%"

  />
  <TouchableOpacity
     style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
 onPress={calcularPerimetroRectangulo}>
<Text style={{ color: 'white', fontSize: 16 }}>Calcular</Text>
</TouchableOpacity>
  <Text style={{ fontSize: 16, marginTop: 20, color:"white" }}>
    PERIOMETRO DEL RECTANGULO: {perimetroRectangulo}
  </Text>
  {/* Agrega elementos para el cálculo del área */}
  {/* Por ejemplo, campos de entrada, botón de calcular, resultados, etc. */}
  <TouchableOpacity onPress={() => setIsPerimetroModalVisible(false)}>
    <Text style={styles.closeButton}>Cerrar</Text>
  </TouchableOpacity>
</View>
</Modal>
}
{//modal perimetro rombo

<Modal
animationType="slide"
transparent={true}
visible={isPerimetroModalVisible && selectedMenuItemP=== "ROMBO"}
onRequestClose={() => setIsPerimetroModalVisible(false)}
>
<View style={[styles.areaModalContainer, { zIndex: 2, position: 'absolute' }]}>
  {/* Contenido para el cálculo del área del triangulo */}
  {/* datos a pedir */}
  <Text style={styles.areaModalTitle}>Calcular PERIMETRO del ROMBO</Text>
  <TextInput
    placeholder="INGRESA UNO DE SUS LADOS"
    value={angulo}
    onChangeText={text => setangulo(text)}
    keyboardType="numeric"
    color="white"
    backgroundColor="blue"
    width="40%"
    placeholderTextColor={"white"}
    marginBottom="10%"

  />
  
  <TouchableOpacity
     style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
 onPress={calcularPerimetroRombo}>
<Text style={{ color: 'white', fontSize: 16 }}>Calcular</Text>
</TouchableOpacity>
  <Text style={{ fontSize: 16, marginTop: 20, color:"white" }}>
    PERIMETRO del ROMBO: {perimetroRombo}
  </Text>

  <TouchableOpacity onPress={() => setIsPerimetroModalVisible(false)}>
    <Text style={styles.closeButton}>Cerrar</Text>
  </TouchableOpacity>
</View>
</Modal>
}
{
       // menu COnversiones
<Modal
  animationType="slide"
  transparent={true}
  visible={isMenuVisibleC}
  onRequestClose={() => setIsMenuVisibleC(false)}
>
  <View style={styles.menuContainer}>
    <Text style={styles.menuTitle}>CONVERSIONES</Text>
    <TouchableOpacity
  onPress={() => {
    openMenuConverisones("FA=CE"); // Abre el modal del farenheit
    setConversionesModalVisible(true);
  }}
>
  <Text style={styles.menuItem}>farenheit a celsius y viceversa</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => setIsMenuVisibleC(false)}>
    <Text style={styles.closeButton}>Cerrar</Text>
  </TouchableOpacity>
  </View>
</Modal>
}
    {//modal farenheit
<Modal
animationType="slide"
transparent={true}
visible={ConverisionesModalVisible && selectedMenuItemC === "FA=CE"}
onRequestClose={() => setConversionesModalVisible(false)}
>
<View style={[styles.areaModalContainer, { zIndex: 2, position: 'absolute' }]}>
  
  {/* datos a pedir */}
  <Text style={styles.areaModalTitle}>CONVERSIONES FARENHEIT A CELCIUS ↹</Text>
  <TextInput
    placeholder="INGRESE F O C "
    value={faren}
    onChangeText={text => setFaren(text)}
    keyboardType="numeric"
    color="white"
    backgroundColor="blue"
    width="40%"
    placeholderTextColor={"white"}
    marginBottom="10%"

  />
  
  <TouchableOpacity
     style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
 onPress={conversionFarent}>
<Text style={{ color: 'white', fontSize: 16 }}>Calcular</Text>
</TouchableOpacity>
  <Text style={{ fontSize: 16, marginTop: 20, color:"white" }}>
    FARENHEIT A CELSIUS: {conversionFaren}
  </Text>
  <Text style={{ fontSize: 16, marginTop: 20, color:"white" }}>
    CELCIUS A FARENHEIT: {conversionCel}
  </Text>
  {/* Agrega elementos para el cálculo del área */}
  {/* Por ejemplo, campos de entrada, botón de calcular, resultados, etc. */}
  <TouchableOpacity onPress={() => setConversionesModalVisible(false)}>
    <Text style={styles.closeButton}>Cerrar</Text>
  </TouchableOpacity>
</View>
</Modal>
}
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
    {
  /*otros botones*/
  <View style={styles.buttonRow7}>
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleButtonPress("factorial(")}
    >
      <Text style={styles.buttonText}>n!</Text>
    </TouchableOpacity>
    <TouchableOpacity
  style={styles.button}
  onPress={() => openMenu()} 
>
  <Text style={styles.buttonText}>A</Text>
</TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => openMenuP()}
    >
      <Text style={styles.buttonText}>P</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => openMenuConverisones()}
    >
      <Text style={styles.buttonText}>CO</Text>
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
    height: 50,
    borderColor: "rgb(6, 172, 255) ",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30,
    color: "white",
    top: 20,
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
  buttonRow7:{
    flexDirection: "row",
    marginBottom: 24,

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
  },
  menuContainer: {
    flex: 1,
 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0,0,1)",
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white"
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
    color: "white"
  },
  closeButton: {
    fontSize: 18,
    color: "red",
    marginVertical: 10,
  },
   // Estilos para el modal de cálculo del área del triángulo
   areaModalContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  areaModalTitle: {
    fontSize: 20,
    marginBottom: 20,
    color:"white"
  },
});