import React from 'react';
import {FlatList} from 'react-native';
import {BillProps} from '../../models/Bill.model';
import {Item} from './Item';

interface Props {
    list: BillProps[];
    handleSelect(itemSelected: BillProps): void;
    handleDelete(itemSelected: BillProps): Promise<void>;
}

import {Container} from './styles';

export function BillList({list}: Props) {
    return (
        <Container>
            <FlatList
                data={list}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Item item={item} />}
            />
        </Container>
    );
}
