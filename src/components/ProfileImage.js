import React, { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';

import CreateIcon from '@mui/icons-material/Create';

function ProfileImage() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('/temp-img.png');
    const [uploadActive, setUploadActive] = useState(false)

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);


    return (
        <>
            <div className="content-wrap profile-image">
                <h2 style={{ marginBottom: '40px' }}>Upload Profile Picture:</h2>
                <div className="img-wrap" style={{ margin: '20px 0' }}>
                    <Box mt={2} textAlign="center" onMouseEnter={() => setUploadActive(true)} onMouseLeave={() => setUploadActive(false)}>
                        <img src="" alt="" srcSet={imageUrl} style={{ height: '200px', width: '200px', objectFit: 'cover' }} />
                    </Box>
                    <Button component="label" onMouseEnter={() => setUploadActive(true)} onMouseLeave={() => setUploadActive(true)} variant="contained" className='edit-btn black-btn' style={{ borderRadius: '5px', background: '#212529', color: '#fff', display: uploadActive ? '' : 'none', position: uploadActive && 'relative', top: uploadActive && '-190px', left: uploadActive && '230px', zIndex: '100' }}>
                        <CreateIcon />
                        <input hidden accept="image/*" type="file" onChange={e => setSelectedImage(e.target.files[0])} />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ProfileImage;