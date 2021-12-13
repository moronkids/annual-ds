import React from 'react';

// libs
import { RectShape } from 'react-placeholder/lib/placeholders';

export default function Skeleton() {
  return (
    <div className="ds-section__gadget-content skeleton">
      <div className="container">
        <div className="row justify-content-center ds-section__gadget-content-bod">
          <div className="col-md-auto">
            <RectShape className="ds-section__gadget-content-bod-detail-photo"></RectShape>
          </div>
          <div className="col-md">
            <div className="ds-section__gadget-content-bod-detail">
              <div>
                <RectShape className="ds-section__gadget-content-bod-text"></RectShape>
                <RectShape className="ds-section__gadget-content-bod-text"></RectShape>
                <RectShape className="ds-section__gadget-content-bod-text"></RectShape>
                <RectShape className="ds-section__gadget-content-bod-text"></RectShape>
              </div>

              <RectShape className="ds-section__gadget-content-bod-detail-name"></RectShape>
              <RectShape className="ds-section__gadget-content-bod-detail-position"></RectShape>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
