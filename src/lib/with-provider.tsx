import React, { ComponentType, useContext } from 'react';

import { DependencyContainerContext } from './context';

export function withProvider<T>(serviceName: string, token: any) {
    return (Component: ComponentType<any>) => (props: any) => {
        const context = useContext(DependencyContainerContext);

        const provider = context.get(token);

        if (!provider) {
            throw Error('No provider under this token');
        }

        const providerToInject = {
            [serviceName]: provider.provide || provider,
        };

        return <Component {...providerToInject} {...props} />;
    };
}
