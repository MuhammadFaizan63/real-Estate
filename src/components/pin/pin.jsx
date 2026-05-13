import { Marker, Popup } from "react-leaflet";
import './pin.scss'

export default function Pin({item}){
    return(
        <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        
      </Popup>
    </Marker>
    )
}