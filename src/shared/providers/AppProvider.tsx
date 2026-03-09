import React, { ComponentType, ReactNode } from "react";
export type ReactProvider = ComponentType<{ children: ReactNode }>;
interface AppProviderProps {
    providers: ReactProvider[];
    children: React.ReactNode;
}
export const AppProvider = ({ providers, children }: AppProviderProps) =>
    providers.reduceRight((acc, Provider, index) => {
        const keyName = Provider.displayName || index;
        return <Provider key={keyName}>{acc}</Provider>
    }, children);