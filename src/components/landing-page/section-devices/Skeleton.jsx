import React from 'react';

// libs
import { RectShape } from 'react-placeholder/lib/placeholders';

export default function Skeleton() {
  return (
    <div className="ds-section__devices-item skeleton">
      <RectShape className="ds-section__devices-item-images"></RectShape>
      <RectShape className="ds-section__devices-item-name"></RectShape>
    </div>
  )
}
