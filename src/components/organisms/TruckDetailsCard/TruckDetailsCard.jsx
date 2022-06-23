import React from 'react';
import TruckDetailsCardStyle from './TruckDetailsCardStyle';
import Text from '../../atoms/Text/Text';
import Logo from '../../../assets/icons/truck-icon.svg';

const TruckDetailsCard = ({onClick}) => {
  return (
    <TruckDetailsCardStyle onClick={() => onClick() }>
      <div className={`truck-name`}>
        <img src={Logo} alt="truck-icon" />
        <Text value="XXA-675BC" className={`truck`} />
      </div>
      <div className={`truck-details`}>
        <div className={`item`}>
          <Text value="Purpose of entry" className={`item-title`}/>
          <Text value="Offloading" className={`item-name`}/>
        </div>
        <div className={`item`}>
          <Text value="Supplier" className={`item-title`}/>
          <Text value="Bymce" className={`item-name`}/>
        </div>
        <div className={`item`}>
          <Text value="pallet" className={`item-title`}/>
          <Text value="Good" className={`item-name`}/>
        </div>
      </div>
    </TruckDetailsCardStyle>
  );
};

export default TruckDetailsCard;
