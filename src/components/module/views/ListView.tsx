import {myData} from "../../../data.ts";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface ListViewProps {
    item: myData
}


const ListView = (props: ListViewProps) => {
    return (
       <div>
           <div className='list-conteiner'>
               <div className='image'>
                   <img className='main-image'
                        src={props.item.img.src}
                        alt={props.item.img.alt}
                   />
               </div>
               <div className='list-box'>
                   <FontAwesomeIcon className='icon' icon={faLocationDot} />
               <span className='country'>{props.item.country}</span>
                <a className='mapLink'
                   href={props.item.mapLink}
                   target='_blank'>
                    View on Google Maps
                </a>
                <p className='dates'>{props.item.dates}</p>
                 <p className='description'>{props.item.description}</p>
               </div>
           </div>
       </div>
    )

}

export default ListView
