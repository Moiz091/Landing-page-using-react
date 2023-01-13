import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/1.png';
import featureimage1 from '../images/2.png';
import featureimage2 from '../images/3.png';

function Feature() {
  return (
    <div id='features'>
        <div className="a-container">
        <FeatureBox image={featureimage} title='Feature Box'/>
        <FeatureBox image={featureimage1} title='Feature Box1'/>
        <FeatureBox image={featureimage2} title='Feature Box2'/>
        </div>
    </div>
  )
}

export default Feature