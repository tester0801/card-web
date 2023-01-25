// import { Card } from '@chakra-ui/react';
import CardPreview from '@/component/CardPreview';
import AdminLayout from '@/layout/admin';
import { Button, Grid, GridItem, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const CardList = props => {
    const [list, setList] = useState([]);

    const fetchCards = async () => {
        try {
            const response = await fetch("/api/card", { method: "GET", headers: { erdenebat: "1" } });
            const cardList = await response.json();
            setList(cardList);
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchCards();
    }, [])
    return (
        <AdminLayout>
            <Grid gap={6} templateColumns="repeat(4, 1fr)">
                <GridItem colSpan={4}>
                    <Text variant="h4">
                        Картын жагсаалт
                    </Text>

                    <Button>Шинэ карт бүртгэх</Button>
                </GridItem>
                {
                    list.map((card) => <GridItem>
                        <CardPreview card={card} />
                    </GridItem>)
                }
            </Grid>
        </AdminLayout>
    )
}

export default CardList;