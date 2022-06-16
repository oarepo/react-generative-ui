import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GeneratedUI } from '../.';

const App = () => {
  return (
    <div>
      <GeneratedUI
        layout={[
          { component: 'header', content: 'hello' }
        ]}
        data={{ hello: 'Hello world' }}
        components={{}} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
