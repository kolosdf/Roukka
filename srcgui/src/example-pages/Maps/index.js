import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import MapsLeafletMaps from '../../example-components/Maps/MapsLeafletMaps';
export default function Maps() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Maps"
        titleDescription="Implement in your applications Google or vector maps."
      />
      <ExampleWrapperSimple sectionHeading="Leaflet maps">
        <MapsLeafletMaps />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
