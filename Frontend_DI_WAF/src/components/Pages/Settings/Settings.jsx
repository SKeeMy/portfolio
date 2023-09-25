import React from 'react';
import { useTranslation } from 'react-i18next';
import RangeSlider from '../Configuration/TableResident/RangeSlider/RangeSlider';

function Settings() {
    const { t } = useTranslation();
    return (
        <div className='monitoring__wrapper'>
            {t("Settings Example")}
            <RangeSlider />
        </div>
    )
}

export default Settings;



