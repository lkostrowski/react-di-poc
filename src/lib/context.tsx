import React from 'react';

/**
 * Should it be array, object or map?
 */
export const DependencyContainerContext = React.createContext<Map<any, any>>(
    new Map(),
);
