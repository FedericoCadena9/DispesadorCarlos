function initializeApp() {
  const firebaseConfig = {
    apiKey: "AIzaSyAxqFbE1qgJRDNmpGyitv5nWgUBAIKPkYk",
    authDomain: "dispensador-sis-progs.firebaseapp.com",
    databaseURL: "https://dispensador-sis-progs-default-rtdb.firebaseio.com",
    projectId: "dispensador-sis-progs",
    storageBucket: "dispensador-sis-progs.appspot.com",
    messagingSenderId: "214208199856",
    appId: "1:214208199856:web:5cf1b16aa924acae2d0f75",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  //Comida
  let foodDish = "Dispensador/Comida/SensorPesoPlato";
  let foodContainer = "Dispensador/Comida/SensorPesoTanque";

  //Agua
  let waterDish = "Dispensador/Agua/SensorAguaPlato";
  let waterContainer = "Dispensador/Agua/SensorAguatanque";

  // Referencia BD Comida
  const dbFoodDish = database.ref(foodDish);
  const dbFoodContainer = database.ref(foodContainer);

  // Referencia BD Agua
  const dbWaterDish = database.ref(waterDish);
  const dbWaterContainer = database.ref(waterContainer);

  //Variables
  let foodDishValue;
  let foodContainerValue;
  let waterDishValue;
  let waterContainerValue;

  //Funciones
  dbFoodDish.on(
    "value",
    (snapshot) => {
      foodDishValue = snapshot.val();
      console.log(foodDishValue);
      document.getElementById("food-dish").innerHTML = foodDishValue;
    },
    (error) => {
      console.log("La lectura falló: " + error.name);
    }
  );
}
