import { useContext } from 'react';
import { DependencyContainerContext } from './context';

export function UseProvider<T>(token: any): T {
    const context = useContext<Map<any, T>>(DependencyContainerContext);

    const provider = context.get(token);

    if (!provider) {
        throw Error('No provider with this token');
    }

    return provider;
}
