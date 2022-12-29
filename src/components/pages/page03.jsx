import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ItemDetail02 from "../list/ItemDetail02";


export default function PAGE03() {
    const { id } = useParams();


    let list = useSelector(state => state)
    const found = list.find((e) => e.id.toString() === id);



    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 50, flex: 1 }}>
            <ItemDetail02 item={found} />
        </div>
    );
}