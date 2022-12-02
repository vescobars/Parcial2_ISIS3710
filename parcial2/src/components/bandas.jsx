import React from 'react';
import useState from 'react';
import FormattedMessage from 'react-intl';

const Bandas = ({bandas,selectedBand}) => {
    
    //Banda actualmente seleccionada
    const band = bandas.filter((banda)=>banda.id === selectedBand);

    return(
        <div className='col-md-6'>
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
                            bandas.map(
                                (banda) => {
                                        <tr>
                                            <td>{banda.id}</td>
                                            <td>{banda.name}</td>
                                            <td>{banda.country}</td>
                                            <td>{banda.genre}</td>
                                            <td>{banda.foundation}</td>
                                        </tr>
                                }
                            )
                        }
                    </tbody>
                </table>
            }
        </div>
    );
}