import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import { Posize } from "components/posize.v1.00";
import { commonStyles, shareStyles } from "components/pxConfig.v1.00";

const Px = ({
  id,
  x,
  y,
  absolute,
  zIndex,
  trackStyle,
  areaStyle,
  altClassName,
  children,
  ...props
}) => {
  const posizeProps = {
    name: id,
    x,
    y,
    absolute,
    zIndex,
    trackStyle,
    areaStyle,
    altClassName
  };
  return (
    <Posize {...posizeProps}>
      <div id={id} {...props}>
        {children}
      </div>
    </Posize>
  );
};

export default class Box extends Component {
  static inStorybook = true;

  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div>
        <Px
          x="30px minmax(min-content, 1fr) 30px"
          y="30px 120fr 30px"
          trackStyle={{ overflow: "auto" }}
          areaStyle={{ overflow: "hidden" }}
          className={css(styles.group1Body)}
        >
          <h3>CDI + PDI</h3>
          <div style={{ backgroundColor: "lightgreen" }}>
            hello world sdflkj dflkjsd fsdlk dfl;k sd;fk sdfl klskjf sldkjf
            lsdkfj sldkfj ldsjfk sldkfjsdlfkj sdlfkj sldfkj jf dkslfj dlfsjd
            lkfdsj sdlk fjsdlkf{" "}
          </div>
        </Px>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  group1Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    backgroundColor: `pink`,
    flexDirection: "column"
  },
  rect2Body: {
    backgroundColor: `rgb(216,216,216)`,
    borderRadius: `0px 0px 0px 0px`,
    borderStyle: `solid`,
    borderColor: `rgb(151,151,151)`,
    borderWidth: 1
  },
  rect3Body: {
    width: `112px`,
    height: `112px`,
    backgroundColor: `rgb(216,216,216)`,
    borderRadius: `0px 0px 0px 0px`,
    borderStyle: `solid`,
    borderColor: `rgb(151,151,151)`,
    borderWidth: 1,
    position: `absolute`,
    top: `67px`,
    left: `271px`
  },
  rect4Body: {
    width: `112px`,
    height: `112px`,
    backgroundColor: `rgb(216,216,216)`,
    borderRadius: `0px 0px 0px 0px`,
    borderStyle: `solid`,
    borderColor: `rgb(151,151,151)`,
    borderWidth: 1,
    position: `absolute`,
    top: `226px`,
    left: `271px`
  },
  rect5Body: {
    width: `112px`,
    height: `112px`,
    backgroundColor: `rgb(216,216,216)`,
    borderRadius: `0px 0px 0px 0px`,
    borderStyle: `solid`,
    borderColor: `rgb(151,151,151)`,
    borderWidth: 1,
    position: `absolute`,
    top: `226px`,
    left: `87px`
  }
});
