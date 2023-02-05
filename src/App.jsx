import { useEffect, useState } from "react";
import "./App.css";
import Tabla from "./components/Tabla";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [consulta, setConsulta] = useState("");

  const itemTable = ["name", "username", "email"];

  /*   const buscar = (data) => {
    return data.filter((item) => item.name.toLocaleLowerCase().includes(consulta) || item.username.toLocaleLowerCase().includes(consulta) || item.email.toLocaleLowerCase().includes(consulta))
  } */

  const buscar = (data) => {
    return data.filter((item) =>
      itemTable.some((i) => item[i].toLowerCase().includes(consulta))
    );
  };

  useEffect(() => {
    const getUsersAPI = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json())
        .then((data) => setUsuarios(data));
    };
    getUsersAPI();
  }, []);

  return (
    <div className="bg-gray-300 min-h-screen text-center">
      <h1 className="bg-purple-900 mb-2 p-1 text-white text-3xl">Buscador de usuarios</h1>
      <input
        type="text"
        placeholder="Buscar..."
        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-50 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mb-2"
        onChange={(e) => setConsulta(e.target.value.toLocaleLowerCase())}
      />
      <Tabla data={buscar(usuarios)} />
    </div>
  );
}

export default App;
