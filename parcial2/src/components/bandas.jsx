import React from 'react';
import { FormattedMessage } from 'react-intl';
import {useState} from 'react';

const Bandas = ({bandas,setSelectedBand}) => {
    
    //Banda actualmente seleccionada
    const [selectedBand] = useState(null);
    const band = bandas.filter((banda)=>banda.id === selectedBand.id);

    //Se encarga de encontrar el minimo
    let bandFoundationYear  = bandas.map(
        function(bandas) {
            return bandas.foundation_year;
        }
    );
    

    var oldestBand = Math.min.apply( null, bandFoundationYear );

    const handleClick = (band) => {
        setSelectedBand(band);
    }


    return(
        <div className='col-md-6'>
            <div className='row'>
                {
                    <table className='table table-stripped'>
                        <thead>
                            <th>#</th>
                            <th><FormattedMessage id="BandName"></FormattedMessage></th>
                            <th><FormattedMessage id="Country"></FormattedMessage></th>
                            <th><FormattedMessage id="Genre"></FormattedMessage></th>
                            <th><FormattedMessage id="Foundation"></FormattedMessage></th>
                        </thead>
                        <tbody>
                            {
                                bandas.map((banda) => {
                                            <tr onClick={setSelectedBand(band)}>
                                                <td>{banda.id}</td>
                                                <td>{banda.name}</td>
                                                <td>{banda.country}</td>
                                                <td>{banda.genre}</td>
                                                <td>{banda.foundation_year}</td>
                                            </tr>
                                })
                            }
                        </tbody>
                    </table>
                }
            </div>
            <div className='row'>
                <p>
                    <FormattedMessage id="oldest-band"></FormattedMessage>
                    <span>{oldestBand.name}</span>
                    <FormattedMessage id="oldest-foundation"></FormattedMessage>
                </p>
            </div>
            <div className='card-group'>
            {
                <div className='card-group'>
                {
                    selectedBand && 
                            bands.map(band => {
                                <div className='card' onClick={handleClick(band)}>
                                    <div className='card-body'>
                                        <img src="/house-icon.png" alt="House Icon" />
                                        <h5 className='card-title'>{band.name}</h5>
                                        <p className='card-text'>{band.description}</p>
                                    </div>
                                </div>
                            }
                    )
                }
            </div>
            }
        </div>
        </div>
    );
}

export default Bandas;