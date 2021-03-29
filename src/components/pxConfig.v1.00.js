import { StyleSheet, css } from 'aphrodite/no-important';

// version v1.00

export const config = {
  hashName: true,
  debug: false,

  StyleSheet,
  css
};

export const shareStyles = {
  fit: {
    width: '100%',
    height: '100%'
  },

  fitVisible: {
    pointerEvents: 'auto',
    width: '100%',
    height: '100%',
    overflow: 'visible'
  },

  fitRelative: {
    pointerEvents: 'auto',
    width: '100%',
    height: '100%',
    position: 'relative'
  },

  fitFlex: {
    pointerEvents: 'auto',
    width: '100%',
    height: '100%',
    display: 'flex'
  },

  fitFlexCenter: {
    pointerEvents: 'auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'visible'
  },

  fitFlex2Center: {
    pointerEvents: 'auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible'
  },

  fitFlexCenterHidden: {
    pointerEvents: 'auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden'
  },

  fitFlex2CenterHidden: {
    pointerEvents: 'auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },

  fitFlexColumn: {
    pointerEvents: 'auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  imageContain: {
    pointerEvents: 'auto',
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },

  imageFill: {
    pointerEvents: 'auto',
    width: '100%',
    height: '100%',
    resizeMode: 'fill'
  },

  imageCover: {
    pointerEvents: 'auto',
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },

  flex2Center: {
    pointerEvents: 'auto',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  flexLeftCenter: {
    pointerEvents: 'auto',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  flexRightCenter: {
    pointerEvents: 'auto',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

  itemAuto: {
    position: 'relative',
    flexShrink: 0,
    flexBasis: 'auto'
  },

  itemShrinkAuto: {
    position: 'relative',
    flexShrink: 1,
    flexBasis: 'auto'
  },

  itemGrowAuto: {
    position: 'relative',
    flexGrow: 1,
    flexBasis: 'auto'
  },

  itemGrowShrinkAuto: {
    position: 'relative',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto'
  }
};

export const commonStyles = StyleSheet.create({
  anchor: {
    cursor: 'pointer',
    textDecoration: 'none',

    ':visited': { textDecoration: 'underline' },

    ':hover': {
      opacity: 0.7,
      textDecoration: 'underline'
    }
  },

  clickable: {
    cursor: 'pointer',
    userSelect: 'none',
    ':hover': { opacity: 0.7 }
  },

  textInput: {
    border: 0,
    padding: 0,
    width: '100%',
    verticalAlign: 'top',
    backgroundColor: 'transparent',
    ':focus': { outline: 'none' }
  }
});
