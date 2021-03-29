import React from 'react';
import { config } from './pxConfig.v1.00';

// posize version v1.00

const StyleSheet = config.StyleSheet;
const css = config.css;

const styles = StyleSheet.create({
  absTrack: {
    display: ['grid', '-ms-grid'],
    pointerEvents: 'none',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },

  relTrack: {
    display: ['grid', '-ms-grid'],
    pointerEvents: 'none',
    position: 'relative'
  },

  area: {
    pointerEvents: 'none',
    position: 'relative',
    width: '100%', // fit box, it is necessary because child need refer parent size
    height: '100%' // fit box, it is necessary because child need refer parent size
  },

  debugTrack: {
    outlineWidth: 1,
    outlineColor: '#106709',
    outlineStyle: 'solid',
    outlineOffset: -1
  },

  debugArea: {
    outlineWidth: 3,
    outlineColor: '#106709',
    outlineStyle: 'solid',
    outlineOffset: -3
  }
});

const classNameMaps = new Map();

function hashFun(obj) {
  const str = JSON.stringify(obj);
  let hash = 5381;
  let i = str.length;
  while (i) { hash = (hash * 33) ^ str.charCodeAt(i -= 1); }
  hash = (hash >>> 0).toString(36);

  if (config.hashName) {
    return hash;
  } else {
    let result = classNameMaps.get(hash);
    if (!result) {
      result = `${classNameMaps.size + 1}`;
      classNameMaps.set(hash, result);
    }
    return result;
  }
}

const rep = /\s*,\s*/g
const split = /\s+/

function genGridStyles(horizontal, vertical, zIndex, trackStyle, areaStyle) {
  const v = Math.round(vertical.replace(rep, ',').split(split).length / 2);
  const h = Math.round(horizontal.replace(rep, ',').split(split).length / 2);

  const track = {
    grid: `${vertical} / ${horizontal}`,
    '-ms-grid-columns': horizontal,
    '-ms-grid-rows': vertical,
    zIndex,
    height: '100%',
    width: '100%',
    ...trackStyle
  };

  const area = {
    gridArea: `${v} / ${h} / ${v} / ${h}`,
    '-ms-grid-column': `${h}`,
    '-ms-grid-row': `${v}`,
    ...areaStyle
  };

  const trackName = `${hashFun(track)}`;
  const areaName = `${hashFun(area)}`;
  return {
    styles: StyleSheet.create({
      [trackName]: track,
      [areaName]: area
    }),
    trackName,
    areaName
  };
}

function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (!objA || !objB) {
    return false;
  }

  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  const len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    const key = aKeys[i];
    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }

  return true;
}

export const Posize = React.memo((props) => {
  const {
    x = 'minmax(auto,max-content)',
    y = 'minmax(auto,max-content)',
    name,
    absolute,
    zIndex,
    trackStyle,
    areaStyle,
    altClassName,
    children,
    debug
  } = props;

  const gridStyles = genGridStyles(x, y, zIndex, trackStyle, areaStyle);
  return (
    <div key={'track'}
         className={
           [
             'track',
             altClassName? `${altClassName}_track` : null,
             css(absolute ? styles.absTrack : styles.relTrack,
               gridStyles.styles[gridStyles.trackName],
               (config.debug || debug) && styles.debugTrack,
             )
           ].filter(e => !!e).join(' ')} id={name ? `${name}Track` : null}>
      <div key={'area'}
           className={
             [
               'area',
               altClassName? `${altClassName}_area` : null,
               css(styles.area,
                 gridStyles.styles[gridStyles.areaName],
                 (config.debug || debug) && styles.debugArea)
             ].filter(e => !!e).join(' ')} id={name ? `${name}Area` : null}>
        { children }
      </div>
    </div>
  );
}, function areEqual(prevProps, nextProps) {
  const {
    x = 'minmax(auto,max-content)',
    y = 'minmax(auto,max-content)',
    name,
    absolute,
    zIndex,
    trackStyle,
    areaStyle,
    altClassName,
    debug
  } = prevProps;

  if(
    x === nextProps.x &&
    y === nextProps.y &&
    name === nextProps.name &&
    absolute === nextProps.absolute &&
    zIndex === nextProps.zIndex &&
    shallowEqualObjects(trackStyle, nextProps.trackStyle) &&
    shallowEqualObjects(areaStyle, nextProps.areaStyle) &&
    altClassName === nextProps.altClassName &&
    debug === nextProps.debug
  ) {
    return true;
  } else {
    return false;
  }
});

export const Px = ({ id, x, y, absolute, zIndex, trackStyle, areaStyle, altClassName, children, ...props }) => {
  const posizeProps = { name: id, x, y, absolute, zIndex, trackStyle, areaStyle, altClassName };
  return (
    <Posize {...posizeProps}>
      <div id={id} {...props}>
        {children}
      </div>
    </Posize>
  );
};

export const PxImage = ({ id, x, y, absolute, zIndex, trackStyle, areaStyle, altClassName, children, ...props }) => {
  const posizeProps = { name: id, x, y, absolute, zIndex, trackStyle, areaStyle, altClassName };
  return (
    <Posize {...posizeProps}>
      <img id={id} alt='alt' {...props}/>
    </Posize>
  );
};

