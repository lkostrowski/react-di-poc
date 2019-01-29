import React, { ReactNode } from 'react';

import { DependencyContainerContext } from './context';

type ProviderWithToken = {
    token: any;
    provide: any;
};
type SingleProvider = any;

export type Provider = ProviderWithToken | SingleProvider;

export interface InjectionContainerProps {
    children: ReactNode;
    providersMap: ProvidersMap;
}

export class ProvidersMap {
    providers = new Map<any, any>();

    constructor(providers: Provider[]) {
        providers.forEach((prov) => {
            if (prov.token) {
                let injectable;

                try {
                    injectable = new prov();
                } catch (e) {
                    injectable = prov;
                }

                this.providers.set(prov.token, injectable);
            } else {
                let injectable;

                try {
                    injectable = new prov();
                } catch (e) {
                    injectable = prov;
                }

                this.providers.set(prov, injectable);
            }
        });
    }

    bind = (token: string) => ({
        to: (service: any) => {
            this.providers.set(token, service);
        },
    });
}

export const InjectionContainer = ({
    children,
    providersMap,
}: InjectionContainerProps) => {
    const injections = providersMap.providers;

    return (
        <DependencyContainerContext.Provider value={injections}>
            {children}
        </DependencyContainerContext.Provider>
    );
};
