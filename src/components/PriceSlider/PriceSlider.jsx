import { useState } from 'react';
import { ConfigProvider, Slider, Switch } from 'antd';

import styles from './PriceSlider.module.css';

/*
  Превратить все это в форму.
  На выходе мы должны запомнить выбор юзера. И перенаправить его на (условную) форму заказа.
*/

const PriceSlider = () => {
  const price = {
    1: {
      view: '10k',
      cost: 8,
      get discountedCost() {
        return this.cost * 0.75; // 6
      },
    },
    2: {
      view: '50k',
      cost: 12,
      get discountedCost() {
        return this.cost * 0.75; // 9
      },
    },
    3: {
      view: '100k',
      cost: 16,
      get discountedCost() {
        return this.cost * 0.75; // 12
      },
    },
    4: {
      view: '500k',
      cost: 24,
      get discountedCost() {
        return this.cost * 0.75; // 18
      },
    },
    5: {
      view: '1m',
      cost: 36,
      get discountedCost() {
        return this.cost * 0.75; // 27
      },
    },
  };

  // const [inputValue, setInputValue] = useState(3);
  const [inputValue, setInputValue] = useState(3);
  const [checked, setChecked] = useState(false);

  const onChangeSwitch = (value) => {
    setChecked(value);
  };

  const onChangeSlider = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <div className={styles.priceSlider}>
      <div className={styles.sliderBody}>
        <h2 style={{ display: 'none' }}>PriceSlider</h2>
        <p className={styles.textViews}>
          <span>{price[inputValue].view}</span> Pageviews
        </p>
        <p className={styles.textCost}>
          <span className={styles.textCostSpan}>
            $
            <span>
              {checked
                ? price[inputValue].discountedCost
                : price[inputValue].cost}
            </span>
            .00
          </span>
          <small>/ month</small>
        </p>
        <ConfigProvider
          theme={{
            components: {
              Slider: {
                handleColor: 'hsl(174, 77%, 80%)',
                handleActiveColor: 'hsl(174, 86%, 45%)',
                handleActiveOutlineColor: 'transparent',

                handleLineWidthHover: 0,
                handleLineWidth: 0,
                handleSizeHover: 35,
                handleSize: 35,

                trackBg: 'hsl(174, 77%, 80%)',
                trackHoverBg: 'hsl(174, 86%, 45%)',
                railBg: 'hsl(224, 65%, 95%)',
                railSize: 6,
              },
            },
            token: {
              colorBgElevated: 'hsl(174, 86%, 45%)',
              borderRadiusXS: 10,
              // colorPrimaryBorderHover: 'hsl(174, 86%, 45%)',
            },
          }}
        >
          <Slider
            min={1}
            max={5}
            value={inputValue}
            tooltip={{ formatter: null }}
            onChange={onChangeSlider}
            className={styles.slider}
            styles={{
              handle: {
                // background: "url('./images/icon-slider.svg')",
                boxShadow: '0px 10px 20px 5px hsl(174, 77%, 80%)',
                borderRadius: '50%',

                // background: 'hsl(174, 86%, 45%)',
              },
            }}
          />
        </ConfigProvider>

        <div className={styles.discountBlock}>
          <p className={styles.discountText}> Monthly Billing</p>
          <ConfigProvider
            theme={{
              components: {
                Switch: {
                  handleSize: 15,
                  trackPadding: 3,
                },
              },
              token: {
                colorPrimary: 'hsl(174, 86%, 45%)',
                colorTextQuaternary: 'hsl(224, 65%, 95%)',
                colorTextTertiary: 'hsl(174, 77%, 80%)',
              },
            }}
          >
            <Switch value={checked} onChange={onChangeSwitch} />
          </ConfigProvider>
          <p className={styles.discountText}>
            Yearly Billing&nbsp;
            <span className={styles.discount}>
              25% <span>discount</span>
            </span>
          </p>
        </div>
      </div>
      <div className={styles.sliderBottom}>
        <div>
          <ul className={styles.listBenefits}>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>
        </div>
        <button className={styles.button}>Start my trial</button>
      </div>
    </div>
  );
};

export default PriceSlider;
