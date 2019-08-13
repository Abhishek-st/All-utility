import React, { useState } from 'react';
import PersistentDrawerLeft from './components/navbar';
import { useSpeechSynthesis } from "react-speech-kit";


export default function App() {
  //     var request = require('request');
  //     var program = {
  //         script : `a=input('')\nprint(a)`,
  //         language: "python3",
  //         stdin:"ast",
  //         versionIndex: "0",
  //         clientId: "7a44198107b7f42b95724a3f9abf98a3",
  //         clientSecret:"cf48176249d4b71363f707d11cbef5d2242feff1890ffcf6fd5db8586c47a9bf"
  //     };
  //     request({
  //         url: 'https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/v1/execute',
  //         method: "POST",
  //         json: program,
  //         'Access-Control-Allow-Origin': '*'
  //     },
  //     function (error, response, body) {
  //         console.log('error:', error);
  //         console.log('statusCode:', response && response.statusCode);
  //         console.log('body:', body);
  //         console.log(body.output);
  //     });
    

  const [value, setValue] = useState("");
  const { speak,voices } = useSpeechSynthesis();
  

    return(
      <div>
        <PersistentDrawerLeft />
        <div>
          <textarea
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <button onClick={() => speak({ text: value,voice: voices[10]})}>Speak</button>
          </div>
      </div>
    )

}
