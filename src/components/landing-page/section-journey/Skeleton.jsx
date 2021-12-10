import React from 'react';

// libs
import { RectShape } from 'react-placeholder/lib/placeholders';

export default function Skeleton() {
  return (
    <div className="row justify-content-center ds-section__journey-inner skeleton">
      <div className="col-md-auto">
        <RectShape className="ds-section__journey-img"></RectShape>
      </div>
      <div className="col-md">
          <RectShape className="ds-section__journey-title"></RectShape>
          <div>
            <RectShape className="ds-section__journey-desc"></RectShape>
            <RectShape className="ds-section__journey-desc"></RectShape>
          </div>
          <RectShape className="ds-button"></RectShape>
      </div>
    </div>
  )
}
