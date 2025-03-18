import './Showresults.css';

const Showresults=({ipResult})=>{

    return(
        <div>
            <ul className='App-results'>
                <li>IP Address: <span className='Ip-list'>{ipResult.ip}</span></li>
                <br></br>
                <li>Country: <span className='Ip-list'>{ipResult.country_name}</span></li>
                <br></br>
                <li>City: <span className='Ip-list'>{ipResult.city}</span></li>
                <br></br>
                <li>Country Flag: <span className='Ip-list'><a href={ipResult.country_flag} target='_blank'>Flag</a></span></li>
                <br></br>
                <li>Organization: <span className='Ip-list'>{ipResult.organization}</span></li>
                <br></br>
                <li>ISP: <span className='Ip-list'>{ipResult.isp}</span></li>
            </ul>
        </div>
    );

}

export default Showresults;