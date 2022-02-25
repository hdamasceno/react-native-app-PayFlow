import React from 'react';

export interface BillProps {
    id: string;
    title: string;
    description: string;
    amount: number;
}

interface Props {
    list: BillProps[];
    handleSelect(itemSelected: BillProps): void;
    handleDelete(itemSelected: BillProps): Promise<void>;
}

import {Container} from './styles';

export function BillList({list}: Props) {
    return <Container />;
}
