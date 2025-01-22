
import "./styles.css"
import { useForm } from "react-hook-form";
import { findMap } from "../../utils/findMap";

export default function SearchLocation({map}) {

      const { register, handleSubmit } = useForm();

      const onSubmit = async (data) => {

        const result = await fetch(`http://localhost:5056/places/${data.locale}`);

        const inJson = await result.json();

        console.log(inJson);

        if (inJson.result === "0") {
            alert("Local não encontrado");
        } else {
            const coord = inJson.result.coordinates;

            const regex = /POINT\(([-\d.]+)\s([-\d.]+)\)/;

            const res = coord.match(regex);

            if (res) {
                const longitude = parseFloat(res[1]); 
                const latitude = parseFloat(res[2]); 

                

                map.setView([latitude, longitude], 18)
            }
            
        }

      }

    return (
        <section className="searchlocation-container">
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" name="local" id="local" placeholder="Pesquisar locais" {...register("locale", findMap.locale)}/>
                </div>
                <button type="submit">
                    <img src="/icons/search-icon.png" alt="buscar" />
                </button>
            </form>
        </section>
    );
}