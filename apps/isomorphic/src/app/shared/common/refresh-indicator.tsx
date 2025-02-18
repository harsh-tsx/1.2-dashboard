import React, { useState } from 'react'
import { ActionIcon } from 'rizzui';
import { IoReload } from "react-icons/io5";

type Props = {
    onClick: () => Promise<void>
}

const RefreshIndicator = (props: Props) => {
    const [refreshing, setRefreshing] = useState(false);
    return (
        <ActionIcon
            variant="outline"
            title="Refresh"
            className="h-9 p-1"
            disabled={refreshing}
            onClick={async () => {
                setRefreshing(true);
                await props.onClick();
                setRefreshing(false);

            }}
        >
            <IoReload
                strokeWidth={3}
                className="size-5"
            />
        </ActionIcon>
    )
}

export default RefreshIndicator