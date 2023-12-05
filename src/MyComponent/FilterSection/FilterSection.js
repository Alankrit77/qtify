import React, { useState } from 'react'
import "./FilterSection.css"
import Corousel from "../Corousel/Corousel";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
function FilterSection({ title, data, filters, filterLogic }) {
    const [selectTab, SetSelectTab] = useState(0)
    return (
        <div className="section">

            <h1 className="title">{title}</h1>
            <Tabs
                value={selectTab}
                onChange={(e, value) => {
                    filterLogic(filters[value].key)
                    SetSelectTab(value);
                }}
                TabIndicatorProps={{
                    style: {
                        backgroundColor: 'var(--css-primary)'
                    }
                }}
            >
                {filters.map(f => <Tab className='tab' key={f.key} label={f.label} />)}
            </Tabs>
            <Corousel data={data} />

        </div>
    )
}


export default FilterSection;