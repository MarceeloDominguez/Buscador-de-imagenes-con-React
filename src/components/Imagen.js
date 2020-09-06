import React from 'react'

const Imagen = (props) => {

    const { largeImageURL, tags } = props.imagen 

    return(
        <div className='col-12 col-sm-12 col-md-6 col-lg-4 mb-4'>
            <div className='card'>
                <div className='embed-responsive embed-responsive-4by3'>
                    <img src={largeImageURL} alt={tags} className='card-img-top embed-responsive-item'/>
                </div>
                <div>
                    <a href={largeImageURL} target='blank' className='btn btn-primary btn-block'>Ver imagen</a>
                </div>
            </div>
        </div>
    )
}

export default Imagen