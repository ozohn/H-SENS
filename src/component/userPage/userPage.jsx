import React, { useState, useEffect  } from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import useFetch from '../fetch.js';

import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


const UserImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: 30rem
  width: 30rem;
  height: 30rem;
  border: 1px solid #bbb;
`;

function UserPage () {
  const [userImg, setUserImg] = useState('');
  const [userWorks, setUserWorks] = useState([]);
  const [files, setFiles] = useState([])
  useEffect(() => {
    fetch('http://hea-b.herokuapp.com/creator', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Authorization': `Bearer localStorage.getItem("token")`,
      }
    }).then(res => console.log(res));
  })
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/image/person.jpg`).then(res => setUserImg(res.url));
  });
  useEffect(() => {
      const initialWorks = {id: 1, title: 'works'};
      setUserWorks([...userWorks, initialWorks]);
  }, []);

  return (
    <>
      <UserInfo userImg={userImg}/>
      <WorksList works={userWorks} /> 
      <FilePond
        files={files}
        allowMultiple={true}
        onupdatefiles={setFiles}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </>
  )
};

function UserInfo({userImg}){
  return (
    <>
      <Image src={userImg} size='small' circular />
      <div>
        <h2>name</h2>
        <p>desc</p>
      </div>
    </>
  );
}

function WorksList({works}){
  return works.map(item => <Work item={item} />);
}

function Work({item}){
  return <div key={item.id}>{item.title}</div>
}

export default UserPage;
