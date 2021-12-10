import React, { Fragment } from 'react';

// libs
import { RectShape } from 'react-placeholder/lib/placeholders';

// dummy
import { DataReaders } from 'src/helpers/dummy-data/dataReaders';

export default function Skeleton() {
  return (
    <Fragment>
      {DataReaders.map((value, index) => (
        <div className="row ds-section__readers-inner align-items-center skeleton" key={index}>
          <div className={`col-md ds-section__readers-desc ${value.imagesDirection}`}>
            <div className="ds-section__readers-desc">
              <RectShape className="ds-section__readers-desc-title"></RectShape>
              <RectShape className="ds-section__readers-desc-content"></RectShape>
              <RectShape className="ds-section__readers-desc-date"></RectShape>
            </div>
          </div>

          <RectShape className={`col-md-auto ds-section__readers-img`}></RectShape>
        </div>
      ))}
    </Fragment>
  )
}
