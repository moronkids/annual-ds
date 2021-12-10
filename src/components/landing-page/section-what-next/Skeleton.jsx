import React from 'react';

// libs
import { RectShape } from 'react-placeholder/lib/placeholders';

export default function Skeleton() {
  return (
    <div className="row justify-content-center ds-section__content-bod skeleton">
      <div className="col-md">
        
        <RectShape className="ds-section__what-next-title"></RectShape>
        
        <div className="ds-section__content-bod-detail">
          {[...Array(7)].map((v, i) => (
            <RectShape className="ds-section__content-bod-detail-desc"></RectShape>
          ))}
        </div>
        
      </div>
      <div className="col-md-auto">
        <div className="ds-section__content-bod-detail-photo">
            <RectShape className="ds-section__content-bod-detail-photo-skeleton"></RectShape>
            
            <RectShape className="ds-section__content-bod-detail-name text-center"></RectShape>
            <RectShape className="ds-section__content-bod-detail-position text-center"></RectShape>
        </div>
      </div>
    </div>
  )
}
