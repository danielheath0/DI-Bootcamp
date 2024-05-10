import { createClient } from 'pexels';
import { useState, useEffect } from 'react';

const client = createClient('owJ9kcY0lHJ8jmS0g2rpvDBTe3vymmXtiCjw2kcYmVgULUetWxZ4QDbC');

const GetImages = (props) => {
    const [photo, setPhoto] = useState();

    useEffect(() => {
        client.photos.search({ query: props.query, per_page: props.per_page }).then(photos => { setPhoto(photos) });
     }, [props.query, props.per_page]);

    return (
        <>
            {photo && photo.photos && photo.photos.map((item =>

                <img src={item.src.tiny} alt={item.alt} key={item.id} />
            ))}
        </>
    )
}

export default GetImages;
