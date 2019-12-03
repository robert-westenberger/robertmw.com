import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

function Edit() {
  return (<Editor
    apiKey="1jagv10p4zfc02pdtf2a328yth5exycy0swllhoe1ic4eeo5"
    init={{
      external_plugins: {
        'tiny_mce_wiris' : 'http://localhost:3000/public/javascripts/plugin.min.js'
      },
      toolbar: 'tiny_mce_wiris_formulaEditor'
    }}
  />);
}

export default Edit;
