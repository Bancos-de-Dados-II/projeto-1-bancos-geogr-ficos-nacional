import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import "./styles.css"
import SearchLocation from "../SearchLocation";
import { useForm } from "react-hook-form";
import { validationinputAddCoordinate } from "../../utils/addPointVallidation";

export default function LeafletMap() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [visibleConfig, setVisibleConfig] = useState(true);
  const [isAdmin, setisAdmin] = useState(false);
  const [addPointVisible, setAddPointVisible] = useState(true);
  const [itemIsAdded, setItemAdded]= useState(false);

  //definindo visibilidade dos cards
  const handleClickAddPint = () => {
    setAddPointVisible(!addPointVisible);
  }

  const handleClickConfig = () => {
    setVisibleConfig(!visibleConfig);
  }

  //salvando local
  const onSubmit = async (data) => {

      const request = new Request("http://localhost:5056/places", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      const response = await fetch(request);
      const inJson = await response.json();

      if (response != null) {
        console.log(inJson)
      }

      console.log("Error: " + response);
  }

  useEffect(() => {

    const map = Leaflet.map("map").setMinZoom(2);

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    //método que pega a localização do usuário
    map.locate({ setView: true, watch: true, enableHighAccuracy: true });

    //quando a localização é encontrada, a setamos no mapa
    map.on("locationfound", (location) => {

      const icon = Leaflet.icon({
        iconUrl: "icons/pin-user-marer.png",
        iconSize: [30, 30], 
        iconAnchor: [20, 40],
        popupAnchor: [0, -40] 
      })

      Leaflet.marker(location.latlng)
      .setIcon(icon)
      .addTo(map)
      .bindPopup("Você")
      .openPopup();
    });

    //caso o usuário não permita um alerta é emitido (substituir por um pop-up)
    map.on("locationerror", (err) => {
        console.log("Error ao buscar posição", err.message);
        alert("Permita acesso a sua localização para uma experiência personalizada :)")
    })

    const fetchAllPlaces = async () => {
      //rota para buscar todos os itens
      const request = new Request("http://localhost:5056/places/all")

      const response = await fetch(request);
      const responseJSON = await response.json();

      if (responseJSON != null) {
        Leaflet.geoJSON(responseJSON, {
          //para cada item da lista
          onEachFeature: (feature, layer) => {
            //setando um a um
            if (feature.properties && feature.properties.name) {

              //definindo icone de exibição (podemos alterar com base na categoria)
              const icon = Leaflet.icon({
                iconUrl: "icons/pin-selector.png",
                iconSize: [30, 30], 
                iconAnchor: [20, 40],
                popupAnchor: [0, -40] 
              })

              layer.setIcon(icon);

              //adicionar html aqui
              layer.bindPopup(feature.properties.name);
            }
          }
        }).addTo(map);
      }

      console.log("Falha ao buscar os locais para exibir no mapa");
    }

    const fetchDataRole = async () => {
        //setando role do user, verificando se ele é do tipo admin
        const response = await fetch('http://localhost:5055/redis');
        const inJson = await response.json();

        if (inJson.role === "admin-user") {
          setisAdmin(true);
        }
    }

    //veirficando se o user é adm
    fetchDataRole();

    //carregando locais do banco no mapa
    fetchAllPlaces();

    return () => {
      map.remove();
    };
  }, [itemIsAdded]);

  const handleAddLocal = () => {
    setTimeout(() => {
      setItemAdded(!itemIsAdded);
    }, 1700)
  }

  return (
    <section>
        <div className="coment-session">
          <div>
            <h2>Explore</h2>
            <p>Encontre locais e viva experiências inesquecíveis</p>
          </div>

          <SearchLocation />
        </div>

        <div id="map"></div>

        {
          isAdmin ? (
            <div className="configuration-container">

            <button onClick={handleClickConfig}>Configurações</button>

            <div className={visibleConfig ? 'display-none' : ''}>
              <button onClick={handleClickAddPint}>Adicionar</button>
              <button>Remover</button>
              <button>Editar</button>
            </div>

            <section className={`add-local ${addPointVisible ? "display-none": ""}`}>
              <form action="#" onSubmit={handleSubmit(onSubmit)}>

                <div>
                  <div>
                    <label htmlFor="name">Nome</label>

                    <input type="text" name="name" id="name"
                    {...register("name", validationinputAddCoordinate.name)}/>
                  </div>

                  <div>
                    <label htmlFor="description">Descrição</label>
                    <input type="text" name="descripton" id="description" {...register("description", validationinputAddCoordinate.description)} />
                  </div>

                  <div>
                    <label htmlFor="coordinates">Coordenadas</label>

                    <input type="text" name="coordinates" id="coordinates"
                    {...register("coordinates", validationinputAddCoordinate.coordinates)}/>
                  </div>

                  <div>
                    <label htmlFor="category">Categoria</label>

                    <input type="text" name="category" id="category"
                    {...register("category", validationinputAddCoordinate.category)}/>
                  </div>
                </div>

                {errors.password && <p className="login-error-message">{errors.password.message}</p>}

                <button onClick={handleAddLocal}>Salvar local</button>
              </form>
            </section>
          </div>
          ) : (
            ""
          )
        }


    </section>
  )
}
