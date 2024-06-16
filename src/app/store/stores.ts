import React from 'react';

import { PanelStore } from './panel-store';

export const stores = {
  PanelStore: new PanelStore(),
};

export const storesContext = React.createContext(stores);
