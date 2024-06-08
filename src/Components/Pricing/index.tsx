import { useState } from "react";
import styles from "./pricing.module.scss";

export default function Pricing() {
  const steps: number[] = [8, 12, 16, 24, 36];
  const [sliderValue, setSliderValue] = useState<number>(8);
  const [yearlyBilling, setYearlyBilling] = useState<boolean>(false);

  // Function to find the closest step
  const closestStep = (value: string): number => {
    return steps.reduce((prev, curr) => {
      return Math.abs(curr - Number(value)) < Math.abs(prev - Number(value))
        ? curr
        : prev;
    });
  };

  // Handle change event for slider
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    const closest = closestStep(value.toString());
    setSliderValue(closest);
  };

  // Function to toggle between monthly and yearly billing
  const handleBillingToggle = () => {
    setYearlyBilling(!yearlyBilling);
  };

  // Calculate monthly price
  const monthlyPrice: number = yearlyBilling ? sliderValue * 9 : sliderValue;

  return (
    <>
      <div className={styles.main_pricing}>
        <div className={styles.price_and_pageviews}>
          <div className={styles.page_view}>
            <p>{sliderValue * 2}k PAGEVIEW</p>
          </div>
          <div className={styles.price_per_month}>
            <p>
              ${monthlyPrice}.00
              <span className={styles.month_span}> / month</span>
            </p>
          </div>
        </div>
        <div className={styles.slider_or_spiner}>
          <input
            type="range"
            min="8"
            max="36"
            value={sliderValue}
            className={styles.slider}
            id="myRange"
            onChange={handleChange}
          />
        </div>
        <div className={styles.montly_biling}>
          <p className={styles.monthly_p}>Monthly Billing</p>
          <div>
            <label className={styles.switcher}>
              <input
                className={styles.switcher_checkbox}
                type="checkbox"
                onChange={handleBillingToggle}
              />
              <span className={styles.point}></span>
            </label>
          </div>
          <p className={styles.monthly_p}>Yearly Billing</p>
          {!yearlyBilling && <p className={styles.discount_p}>25% discount</p>}
        </div>
        <div className={styles.my_trial}>
          <div className={styles.features_pack}>
            <ul className={styles.ul_features}>
              <li className={styles.li_features}>Unlimited websites</li>
              <li className={styles.li_features}>100% data ownership</li>
              <li className={styles.li_features}>Email reports</li>
            </ul>
          </div>
          {/* BUTTON TRIAL */}
          <div className={styles.btn_trial}>
            <button>Start My Trial</button>
          </div>
        </div>
      </div>
    </>
  );
}
