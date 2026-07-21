// CSS style sheet
import './index.css';

// Internal components
import App from './App.tsx';

// Library imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


// "DevMode"
/*
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
      <App />
    </DevSupport>
  </StrictMode>,
)
*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
