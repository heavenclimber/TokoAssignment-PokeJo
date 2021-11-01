import {React} from 'react'
import logocollection from '../img/mycollection.png'


export default function CatchBar({openModal}) {
    return (
        <div className='catchBar'>
            <div className='catchBarBtn' onClick={()=>openModal(true)}>
                <img className='bouncecatch' src={logocollection} />
                <p>CATCH!</p>
            </div>
            
        </div>
    )
}
