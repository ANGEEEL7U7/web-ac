import React, { ComponentType, ReactNode } from "react";
export type ReactProvider = ComponentType<{ children: ReactNode }>;
interface ImportProvidersProps {
    providers: ReactProvider[];
    children: React.ReactNode;
}
export const ImportProviders = ({ providers, children }: ImportProvidersProps) =>
    providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, children);